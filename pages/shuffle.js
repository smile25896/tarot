/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Component } from "react";
import Layout from "components/Layout/Layout";
import { Global, css } from "@emotion/react";
import Spread from "components/Spreads/Spread";
import { clockwiseKeyframes } from "styles/background";
import { connect } from "react-redux";
import { setSpreadId } from "actions/spread";
import { bindActionCreators } from "redux";
import Card from "components/Card/Card";
import { spreads } from "data/spreads";
import { CARD_STATUS_EMPTY, CARD_STATUS_NORMAL } from "constant/data";

const SHUFFLE = 0; // 洗牌階段
const COLLASPE = 1; // 洗牌之後將牌疊合至左側
const DISPLAY = 2; // 將牌攤開給
const CUT = 3; // 切牌階段
const AFTER_CUT = 4; // 洗牌之後將牌疊合至左側
const CHOOSE_DISPLAY = 5;
const CHOOSE = 6;
const SHOW_BACK = 7;
const SHOW = 8;

class Shuffle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMask: true,
      scene: 1,
      cards: Array.from({ length: 78 }, (_, i) => {
        return {
          id: i,
          chosen: false,
          direction: true,
        };
      }),
      shuffleStatus: SHUFFLE,
      currentHoverIndex: -1,
      cutIndexes: [],
      cardStatus: [],
      chosenCards: [],
    };

    this.hiddenMask = this.hiddenMask.bind(this);
    this.switchScene = this.switchScene.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.switchAfterCutCardsStatus = this.switchAfterCutCardsStatus.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.cutCards = this.cutCards.bind(this);
  }

  componentDidMount() {
    setTimeout(this.hiddenMask, 500);
    this.setState({
      cardStatus: Array.from(
        { length: spreads[this.props.spread.spreadId].count },
        () => CARD_STATUS_EMPTY
      ),
    });
  }

  /**
   * 隱藏開場的黑幕
   */
  hiddenMask() {
    this.setState({
      isShowMask: false,
    });
  }

  /**
   * 切換場景
   * @param {number} scene - 1: 準備頁面; 2: 抽牌洗牌頁面
   */
  switchScene(scene) {
    this.setState({
      scene,
    });
  }

  /**
   * 洗牌
   */
  shuffle() {
    let array = this.state.cards;
    // let array = this.state.emptyCards;
    let currentIndex = array.length - 1,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      array[currentIndex].direction = Math.floor(Math.random() * 2) === 1;
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    this.setState({
      cards: array,
      shuffleStatus: SHUFFLE,
    });
  }

  switchCardsStatus(status) {
    this.setState({
      shuffleStatus: status,
    });
    switch (status) {
      case COLLASPE:
      case DISPLAY:
      case AFTER_CUT:
      case CHOOSE_DISPLAY:
      case SHOW_BACK:
        setTimeout(() => {
          this.switchCardsStatus(status + 1);
        }, 1500);
        break;
      default:
        break;
    }

    if (status === AFTER_CUT) {
      this.switchAfterCutCardsStatus();
    }
  }

  switchAfterCutCardsStatus() {
    let cards = this.state.cards;
    let cutIndexes = this.state.cutIndexes;
    let newCards = cards
      .slice(cutIndexes[0])
      .concat(cards.slice(cutIndexes[1], cutIndexes[0]))
      .concat(cards.slice(0, cutIndexes[1]));

    this.setState({
      cards: newCards,
    });
  }

  handleMouseOver(index) {
    this.setState({
      currentHoverIndex: index,
    });
  }

  handleMouseLeave(index) {
    if (index === this.state.currentHoverIndex) {
      this.setState({
        currentHoverIndex: -1,
      });
    }
  }

  cutCards(index) {
    let cutIndexes = this.state.cutIndexes;
    cutIndexes.push(index);
    this.setState({
      cutIndexes,
    });

    if (cutIndexes.length === 2) {
      setTimeout(() => {
        this.switchCardsStatus(AFTER_CUT);
      }, 600);
    }
  }

  chooseCard(chosenCard, chosenCardIndex) {
    if (
      this.state.chosenCards.length < spreads[this.props.spread.spreadId].count
    ) {
      let chosenCards = this.state.chosenCards;
      let cardStatus = this.state.cardStatus.slice();
      let cards = this.state.cards;
      cards[chosenCardIndex].chosen = true;
      cardStatus[chosenCards.length] = CARD_STATUS_NORMAL;

      chosenCards.push({ id: chosenCard.id, direction: chosenCard.direction });
      this.setState({
        chosenCards,
        cardStatus,
        cards,
      });
    }
    if (
      this.state.chosenCards.length >= spreads[this.props.spread.spreadId].count
    ) {
      setTimeout(() => {
        this.switchCardsStatus(SHOW_BACK);
      }, 600);
    }
  }

  render() {
    const cardItems = this.state.cards.map((item, index) => {
      let topRandom = Math.random();
      let leftRandom = Math.random();
      let zIndex = 1;

      let leftIndex = 1.12 * (index + 1) + 1.5;
      if (this.state.shuffleStatus === CUT) {
        if (this.state.cutIndexes.length === 0) {
          leftIndex = ((100 - 8.5) / 81) * (index + 1) + 1.5;
        } else if (this.state.cutIndexes.length === 1) {
          if (index > this.state.cutIndexes[0]) {
            leftIndex = 1.12 * 79 + 1.5;
          } else {
            leftIndex =
              ((100 - 30) / this.state.cutIndexes[0]) * (index + 1) + 1.5;
          }
        } else if (this.state.cutIndexes.length === 2) {
          if (index > this.state.cutIndexes[0]) {
            leftIndex = 1.12 * 79 + 1.5;
          } else if (index > this.state.cutIndexes[1]) {
            leftIndex = 46;
            zIndex = 2;
          } else {
            leftIndex = 1.5;
            zIndex = 3;
          }
        }

        if (
          this.state.currentHoverIndex === -1 ||
          (this.state.cutIndexes.length === 1 &&
            this.state.cutIndexes[0] <= index) ||
          this.state.cutIndexes.length === 2
        ) {
        } else if (this.state.currentHoverIndex < index) {
          leftIndex += 1.6;
        } else {
          leftIndex -= 1.6;
        }
      } else if (this.state.shuffleStatus === AFTER_CUT) {
        if (index > this.state.cutIndexes[1]) {
          zIndex = 2;
        } else {
          zIndex = 3;
        }
      }

      return (
        <div
          key={index}
          css={css`
            position: absolute;
            top: ${this.state.shuffleStatus === SHUFFLE
              ? `${topRandom * 45}vh`
              : this.state.shuffleStatus === CHOOSE_DISPLAY ||
                this.state.shuffleStatus === CHOOSE
              ? "calc(90vh + 0vw)"
              : this.state.shuffleStatus >= SHOW_BACK
              ? "120vh"
              : "41vh"};
            left: ${this.state.shuffleStatus === SHUFFLE
              ? `${leftRandom * 50}vh`
              : this.state.shuffleStatus === COLLASPE ||
                this.state.shuffleStatus === AFTER_CUT
              ? "1.5vw"
              : `${leftIndex}vw`};
            transform: ${this.state.shuffleStatus === SHUFFLE
              ? `${"rotate(" + Math.random() * 360 + "deg)"}`
              : "unset"};
            transition: ${this.state.shuffleStatus === CUT ||
            this.state.shuffleStatus === CHOOSE
              ? "all 0.5s"
              : "all 1.5s cubic-bezier(0.55, 0, 0.43, 1.01), z-index 0s"};
            z-index: ${zIndex};
            cursor: pointer;
            display: ${item.chosen ? "none" : "block"};
            &:hover {
              ${this.state.shuffleStatus === CHOOSE
                ? "transform: translateY(-3vw);"
                : null}
            }
          `}
          onClick={() => {
            if (this.state.shuffleStatus === SHUFFLE) {
              this.shuffle(index);
            } else if (this.state.shuffleStatus === CUT) {
              this.cutCards(index);
            } else if (this.state.shuffleStatus === CHOOSE) {
              this.chooseCard(item, index);
            }
          }}
          onMouseOver={() => {
            if (this.state.shuffleStatus === CUT) {
              this.handleMouseOver(index);
            }
          }}
          onMouseLeave={() => {
            if (this.state.shuffleStatus === CUT) {
              setTimeout(() => {
                this.handleMouseLeave(index);
              }, 100);
            }
          }}
        >
          <div
            css={css`
              width: 8.5vw;
            `}
          >
            <Card cardId={item.id} isOpen={false} />
          </div>
        </div>
      );
    });
    return (
      <Layout showFooter={false} showMenu={false} colorfulBg={true}>
        <Global
          styles={css`
            body {
              overflow: hidden;
            }
          `}
        />
        <div>
          <div
            className="bg-round"
            css={css`
              position: fixed;
              width: 90vw;
              height: 90vw;
              left: 5vw;
              top: 5vw;
              opacity: 0.4;

              img {
                width: 100%;
                height: 100%;
              }
            `}
          >
            <img
              src="/images/circle-sun.png"
              alt="background"
              css={css`
                position: absolute;
                width: 100%;
                margin: 0 auto;
              `}
            />
            <img
              src="/images/circle-main.png"
              alt="background"
              css={css`
                position: absolute;
                width: 100%;
                animation: ${clockwiseKeyframes} 100s linear infinite;
              `}
            />
          </div>
        </div>

        {this.state.shuffleStatus >= CHOOSE ? (
          <div
            css={css`
              position: relative;
              top: ${this.state.shuffleStatus < SHOW_BACK ? "10vh" : "15vh"};
              left: calc(50vw - 35vh);
              width: 70vh;
              height: 70vh;
              opacity: ${this.state.shuffleStatus === CHOOSE_DISPLAY
                ? "0"
                : "1"};
              transition: all 1s;
            `}
          >
            {Spread[this.props.spread.spreadId](
              this.state.cardStatus,
              this.state.chosenCards,
              this.state.shuffleStatus >= SHOW_BACK
            )}
          </div>
        ) : null}

        {this.state.scene === 1 ? (
          <div className="scene1">
            <div
              css={css`
                position: fixed;
                top: calc(50vh - 29px);
                width: 100%;
                text-align: center;
                font-style: normal;
                font-weight: 300;
                font-size: 40px;
                line-height: 58px;
                text-align: center;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #54433d;
              `}
            >
              請在心中默念你的問題
              <div
                css={css`
                  width: 66px;
                  height: 66px;
                  margin: 17vh auto;
                  cursor: pointer;
                  img {
                    width: 100%;
                  }
                `}
                onClick={() => {
                  this.switchScene(2);
                }}
              >
                <img src="/images/btn-start.png" />
              </div>
            </div>
          </div>
        ) : this.state.scene === 2 ? (
          <div className="scene2">
            <div
              className="shuffle-box"
              css={css`
                position: fixed;
                top: ${this.state.shuffleStatus === SHUFFLE ? "10vh" : "0"};
                left: ${this.state.shuffleStatus === SHUFFLE
                  ? "calc(50vw - 33vh)"
                  : "0"};
                /* width: 100vw;
                height: 100vh; */
                transition: all 1.5s cubic-bezier(0.55, 0, 0.43, 1.01);
              `}
            >
              {cardItems}
            </div>
            <div
              css={css`
                position: fixed;
                width: 100%;
                text-align: center;
                bottom: 6vh;
                display: ${this.state.shuffleStatus > SHUFFLE
                  ? "none"
                  : "block"};
              `}
            >
              <div
                css={css`
                  width: 66px;
                  height: 66px;
                  margin: 0 auto;
                  cursor: pointer;
                  visibility: ${this.state.shuffleStatus === SHUFFLE
                    ? "visible"
                    : "hidden"};
                  opacity: ${this.state.shuffleStatus === SHUFFLE ? "1" : "0"};
                  transition: all 1s ease-in-out 0.3s;
                  img {
                    width: 100%;
                  }
                `}
                onClick={() => {
                  this.switchCardsStatus(COLLASPE);
                }}
              >
                <img src="/images/btn-start.png" />
              </div>
            </div>
          </div>
        ) : null}
        <div
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000;
            visibility: ${this.state.isShowMask ? "visible" : "hidden"};
            opacity: ${this.state.isShowMask ? "1" : "0"};
            transition: opacity 1.5s, visibility 1.5s;
            z-index: 999;
          `}
        ></div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.spread);
  return {
    spread: state.spread,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSpreadId: bindActionCreators(setSpreadId, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shuffle);
