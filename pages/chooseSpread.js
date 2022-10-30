/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Component } from "react";
import Layout from "components/Layout/Layout";
import { Global, css } from "@emotion/react";
import Spread from "components/Spreads/Spread";
import { clockwiseKeyframes } from "styles/background";
import Bubbles from "components/Bubbles/Bubbles";
import { connect } from "react-redux";
import { setSpreadId } from "actions/spread";
import { bindActionCreators } from "redux";
import Router from "next/router";
import { spreads } from "data/spreads";

const spreadItemCss = css`
  width: 144px;
  height: 336px;
  background: rgb(255 255 255 / 100%);

  border: 1px solid #d1ccca;
  font-size: 22px;
  line-height: 142px;
`;

const spreadItemActiveCss = css`
  position: relative;
  width: 180px;
  height: 419px;

  background: linear-gradient(
    194.49deg,
    #f5e4e1 4.8%,
    rgba(245, 237, 228, 0.73) 40.71%,
    rgba(230, 244, 242, 0.31) 58.9%,
    rgba(255, 255, 255, 0) 82.44%,
    rgba(255, 255, 255, 0) 82.44%
  );
  border: 8px solid #ffffff;
  font-size: 32px;
  line-height: 164px;
  box-shadow: 0px 0px 35px 0px #402c2312;
`;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isShowMask: false,
    };

    this.wheeling = false;

    this.clickSpreadItem = this.clickSpreadItem.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.moveCard = this.moveCard.bind(this);
    this.chooseSpread = this.chooseSpread.bind(this);
  }
  componentDidMount() {
    window.addEventListener("wheel", this.handleWheel);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("wheel", this.handleWheel);
  // }

  clickSpreadItem(index) {
    console.log(index);
    this.setState({
      activeIndex: index,
    });
  }

  handleWheel(e) {
    if (this.wheeling) {
      return;
    }
    clearTimeout(this.handleWheel);
    this.handleWheel = setTimeout(() => {
      this.wheeling = false;
    }, 1000);
    this.wheeling = true;
    if (e.deltaY > 0) {
      this.moveCard(1);
    } else {
      this.moveCard(-1);
    }
  }

  handleKeyDown(e) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      this.moveCard(1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      this.moveCard(-1);
    }
  }

  moveCard(move) {
    let activeIndex = this.state.activeIndex;
    let length = spreads.length * 3;
    if (move === 1) {
      if (activeIndex + 1 >= length) {
        activeIndex = 0;
      } else {
        activeIndex += 1;
      }
      this.setState({
        activeIndex,
      });
    } else if (move === -1) {
      if (activeIndex === 0) {
        activeIndex = length - 1;
      } else {
        activeIndex -= 1;
      }
      this.setState({
        activeIndex,
      });
    }
  }

  chooseSpread(id) {
    this.props.setSpreadId(id);
    this.setState({
      isShowMask: true,
    });
    setTimeout(() => {
      Router.push("shuffle");
    }, 1100);
  }

  render() {
    const spreadItems = spreads.map((item, index) => {
      return (
        <SpreadItem
          key={item.id}
          activeIndex={this.state.activeIndex}
          item={item}
          index={index}
          total={spreads.length * 3}
          clickSpreadItem={this.clickSpreadItem}
          chooseSpread={this.chooseSpread}
        />
      );
    });
    const spreadItems2 = spreads.map((item, index) => {
      return (
        <SpreadItem
          key={item.id}
          activeIndex={this.state.activeIndex}
          item={item}
          index={index + spreads.length}
          total={spreads.length * 3}
          clickSpreadItem={this.clickSpreadItem}
          chooseSpread={this.chooseSpread}
        />
      );
    });
    const spreadItems3 = spreads.map((item, index) => {
      return (
        <SpreadItem
          key={item.id}
          activeIndex={this.state.activeIndex}
          item={item}
          index={index + spreads.length * 2}
          total={spreads.length * 3}
          clickSpreadItem={this.clickSpreadItem}
          chooseSpread={this.chooseSpread}
        />
      );
    });
    const SpreadItems = Spread.map((item, index) => {
      let isActive = index === this.state.activeIndex % spreads.length;
      return (
        <div
          key={index}
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding-top: 100%;
            opacity: ${isActive ? "1" : "0"};
            transition: opacity ${isActive ? "0.7s" : "0.6s"};
          `}
        >
          {item()}
        </div>
      );
    });
    return (
      <Layout showFooter={false} showMenuIcon={false} colorfulBg={true}>
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
              right: -40vw;
              bottom: -50vw;
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
          <div className="bubbles-box">
            <Bubbles />
          </div>
        </div>
        <main
          css={css`
            display: flex;
            width: 100vw;
            max-width: 100vw;
            height: 100vh;
            padding: 0 40px;
            align-items: center;
          `}
        >
          <div
            css={css`
              position: relative;
              width: calc(50% - 150px);
              padding-top: calc(50% - 150px);
              margin-right: 40px;
            `}
          >
            {SpreadItems}
          </div>
          <div
            css={css`
              white-space: nowrap;
              width: calc(50% + 120px);
              overflow: hidden;
            `}
          >
            <div
              css={css`
                position: relative;
                height: 100vh;
                display: flex;
                align-items: center;
                transform: translateX(30px);
                transition: transform 0.7s;
                /* transform: ${`translateX(${this.state.activeIndex *
                  -164}px)`}; */
              `}
            >
              {spreadItems}
              {spreadItems2}
              {spreadItems3}
            </div>
          </div>
        </main>
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
            transition: opacity 1s;
            z-index: 999;
          `}
        ></div>
      </Layout>
    );
  }
}

const SpreadItem = ({
  activeIndex,
  index,
  total,
  item,
  clickSpreadItem,
  chooseSpread,
}) => {
  return (
    <div
      css={[
        activeIndex === index ? spreadItemActiveCss : spreadItemCss,
        setOpacity(index, activeIndex, total),
        css`
          position: absolute;
          margin: 0 10px;
          color: #79665f;
          cursor: pointer;
          border-radius: 5px;
          font-weight: 300;
          text-align: center;
          transition: all 0.7s;
        `,
      ]}
      onClick={() => {
        if (activeIndex === index) {
          chooseSpread(item.id);
        } else {
          clickSpreadItem(index);
        }
      }}
    >
      <div
        css={css`
          position: fixed;
          opacity: ${activeIndex === index ? "1" : "0"};
          transform: ${activeIndex === index
            ? "translateY(0)"
            : activeIndex > index
            ? "translateY(-100px)"
            : "translateY(100px)"};
          transition: all ${activeIndex === index ? "0.7s" : "0.6s"};
          top: calc(50% - 300px);
          left: 50%;
          font-family: "Montserrat";
          font-weight: 700;
          font-size: 110px;
          line-height: 112px;
          text-align: right;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
        `}
      >
        {item.en}
      </div>
      <span
        css={css`
          display: inline-block;
          height: 100%;
          writing-mode: vertical-lr;
          letter-spacing: 0.3em;
          color: #54433d;
        `}
      >
        {item.name}
      </span>
    </div>
  );
};

SpreadItem.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  clickSpreadItem: PropTypes.func.isRequired,
  chooseSpread: PropTypes.func.isRequired,
};

function setOpacity(index, activeIndex, total) {
  let opacity = 1;
  let left = (index - activeIndex) * 164;

  let activeIndexAdd = activeIndex + total;
  let indexAdd = index;
  if (index < activeIndex) {
    indexAdd += total;
  }
  if (activeIndexAdd - 1 >= indexAdd && indexAdd >= activeIndexAdd - 12) {
    opacity = 0;
  }
  if (activeIndexAdd - 1 >= indexAdd && indexAdd >= activeIndexAdd - 6) {
    left = -164 * (activeIndexAdd - indexAdd);
  } else if (activeIndex < index) {
    left = (index - activeIndex) * 164 + 40;
  } else if (activeIndex > index + 1) {
    left = (total - activeIndex + index) * 164 + 40;
  }
  return css`
    opacity: ${opacity};
    left: ${left}px;
  `;
}

function mapStateToProps(state) {
  return {
    spread: state.spread,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSpreadId: bindActionCreators(setSpreadId, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
