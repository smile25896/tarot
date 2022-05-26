/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Component } from "react";
import Layout from "components/Layout/Layout";
import { Global, css } from "@emotion/react";
import Spread from "components/Spreads/Spread";
import { clockwiseKeyframes } from "styles/background";
import Bubbles from "components/Bubbles/Bubbles";

const spreadItemCss = css`
  width: 144px;
  height: 336px;
  background: #ffffff;

  border: 1px solid #d1ccca;
  font-size: 22px;
  line-height: 142px;
`;

const spreadItemActiveCss = css`
  position: relative;
  width: 180px;
  height: 419px;

  background: radial-gradient(
    284.45% 94.63% at 71.91% 0%,
    #f5e4e1 0.01%,
    rgba(245, 237, 228, 0.73) 46.26%,
    rgba(230, 244, 242, 0.31) 69.68%,
    rgba(255, 255, 255, 1) 99.99%,
    rgba(255, 255, 255, 1) 100%
  );
  border: 8px solid #ffffff;
  font-size: 32px;
  line-height: 164px;
`;

const spreads = [
  {
    id: 0,
    name: "凱爾特十字牌陣",
    en: "CELTIC CROSS",
  },
  {
    id: 1,
    name: "時間之流占卜法",
    en: "Past-Present-Future",
  },
  {
    id: 2,
    name: "四元素",
    en: "Four Card",
  },
  {
    id: 3,
    name: "單張牌",
    en: "One Card",
  },
  {
    id: 4,
    name: "二擇一",
    en: "Two Choice",
  },
  {
    id: 5,
    name: "四季運勢",
    en: "Four Seasons",
  },
];

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };

    this.wheeling = false;

    this.clickSpreadItem = this.clickSpreadItem.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.moveCard = this.moveCard.bind(this);
  }
  componentDidMount() {
    window.addEventListener("wheel", this.handleWheel);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("wheel", this.handleWheel);
  // }

  clickSpreadItem(id) {
    this.setState({
      activeIndex: id,
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
          {item}
        </div>
      );
    });
    return (
      <Layout showFooter={false} showMenu={false}>
        <Global
          styles={css`
            body {
              overflow: hidden;
            }
          `}
        />
        <div
          css={css`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: linear-gradient(
              180deg,
              #f4dfdf -26.67%,
              #f5ede4 49.7%,
              #e6f4f2 92.87%
            );
            z-index: -1;
          `}
        ></div>
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
              width: calc(50% + 90px);
              overflow: hidden;
            `}
          >
            <div
              css={css`
                position: relative;
                height: 100vh;
                display: flex;
                align-items: center;
                transition: transform 0.7s;
                /* transform: ${`translateX(${
                  this.state.activeIndex * -164
                }px)`}; */
              `}
            >
              {spreadItems}
              {spreadItems2}
              {spreadItems3}
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

const SpreadItem = ({ activeIndex, index, total, item, clickSpreadItem }) => {
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
        clickSpreadItem(index);
      }}
    >
      <div
        css={css`
          position: fixed;
          opacity: ${activeIndex === index ? "1" : "0"};
          transform: ${activeIndex === index
            ? "translateY(0)"
            : activeIndex < index
            ? "translateY(-100px)"
            : "translateY(100px)"};
          transition: all ${activeIndex === index ? "0.7s" : "0.6s"};
          top: calc(50% - 300px);
          left: calc(50% + 150px);
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
  // if (activeIndexAdd - 2 >= indexAdd && indexAdd >= activeIndexAdd - 6) {
  //   transition += ", opacity: 0s";
  // }
  // if (activeIndex)
  return css`
    opacity: ${opacity};
    left: ${left}px;
  `;
}
