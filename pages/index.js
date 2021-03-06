/** @jsxImportSource @emotion/react */
import { Component } from "react";
import Layout from "components/Layout/Layout";
import { css, keyframes } from "@emotion/react";
import Title from "components/Title/Title";
import HomeBg from "components/HomeBg/HomeBg";
import Opening from "components/Opening/Opening";
import LayoutContent from "components/LayoutContent/LayoutContent";
import PostCard from "components/PostCard/PostCard";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";
import Link from "next/link";
import { connect } from "react-redux";

const floatKeyframes = keyframes`
  0, 100%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(20px);
  }
`;

const cardShadowKeyframes = keyframes`
  0%{
    transform: scaleX(1.1) scaleY(1);
  }
  50%{
    transform: scaleX(1) scaleY(1.05);
  }
  100%{
    transform: scaleX(1.1) scaleY(1);
  }
`;

const cardImageOutterCss = css`
  width: 15vw;
  position: absolute;
  perspective: 1300px;
  @media (max-width: 576px) {
    width: 40vw;
  }
`;

const cardImageCss = css`
  width: 100%;
  filter: drop-shadow(-2px 2px 25px rgba(64, 54, 35, 0.1))
    drop-shadow(-4px 4px 10px rgba(64, 54, 35, 0.06));
  /* filter: drop-shadow(0px 4px 30px rgba(39, 36, 30, 0.28)); */
  border-radius: 10px;
`;

const titleImageOutterCss = css`
  position: relative;
  width: 25vw;
  min-width: 257px;
  @media (max-width: 576px) {
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

const titleImageCss = css`
  width: 100%;
`;

const circleBtnCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    229.05deg,
    #ffaeae 14.19%,
    #ffd9b6 73.03%,
    #fee9de 122.26%,
    #ffd9b6 173.02%,
    #ffaeae 218.86%
  );
  transition: all 0.3s;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    transition: all 0.3s;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background: linear-gradient(
      228.11deg,
      #ffaeae -115.2%,
      #ffd9b6 -56.8%,
      #fee9de -7.94%,
      #ffd9b6 17.24%,
      #ffaeae 87.93%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 3;
    display: block;
    width: 50%;
    height: 200%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #ffffff82 40%,
      #ffffff82 60%,
      transparent 100%
    );
    /* background: red; */
    transform: rotate(-45deg) translate(-160%, -5%);
    /* transform: rotate(-45deg) translate(70%, -10%); */
    transition: all 0.3s;
  }
`;

const opacityCss = css`
  opacity: 0;
  transform: translateY(50px);
`;

const showCss = css`
  opacity: 1;
  transform: translateY(0px);
  transition: all 1s ease-out 0.2s;
`;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      top: 0,
      roundTranslate: 0,
    };

    // this.handleMouseMove = debounce(this.handleMouseMove, 30);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseScroll = this.handleMouseScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("scroll", this.handleMouseScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("scroll", this.handleMouseScroll);
  }

  handleMouseMove(e) {
    this.setState({
      left: e.pageX * 0.6,
      top: Math.min(e.pageY - window.pageYOffset, 1000),
    });
  }

  handleMouseScroll(e) {
    this.setState({ roundTranslate: Math.min(window.pageYOffset * 0.5, 600) });
  }

  render() {
    return (
      <Layout showFooter={true}>
        <Content
          left={Number(this.state.left / 40)}
          top={Number(this.state.top / 20)}
          roundTranslate={this.state.roundTranslate}
        />
      </Layout>
    );
  }
}

function Content({ left, top, roundTranslate }) {
  return (
    <div>
      <Opening />
      <HomeBg roundTranslate={roundTranslate} />
      <div
        className="cover-box"
        css={css`
          /* display: none; */
          height: 100vh;
          @media (max-width: 576px) {
            height: 150vh;
          }
        `}
      >
        <LoadingAnimation
          customCss={css`
            position: absolute;
            top: 18vh;
            left: 23vw;

            @media (max-width: 576px) {
              position: relative;
              left: 0;
              top: 0;
              margin-top: 50px;
              width: 100vw;
            }
          `}
          beforeAnimation={opacityCss}
          animationIn={showCss}
        >
          <div className="title">
            <div css={[titleImageOutterCss]}>
              <img src="/images/title-1.svg" css={[titleImageCss]} />
            </div>
            <div
              css={[
                titleImageOutterCss,
                css`
                  margin-top: 5%;
                `,
              ]}
            >
              <img src="/images/title-2.svg" css={[titleImageCss]} />
            </div>
            <Link href="/chooseSpread">
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  margin-top: 40px;
                  margin-left: 10vh;
                  cursor: pointer;

                  &:hover .circle-btn {
                    transform: scale(1.7);

                    img {
                      transform: scale(0.6);
                    }

                    &::before {
                      opacity: 1;
                    }

                    &::after {
                      transform: rotate(-45deg) translate(160%, 0%);
                    }
                  }

                  @media (max-width: 576px) {
                    margin-left: 0;
                    margin-top: 60px;
                    justify-content: center;
                  }
                `}
              >
                <div
                  css={css`
                    display: inline-block;
                    width: 3vw;
                    height: 3vw;

                    @media (max-width: 576px) {
                      width: 43px;
                      height: 43px;
                    }
                  `}
                >
                  <div className="circle-btn" css={[circleBtnCss]}>
                    <img
                      src="/images/btn-start-arrow.png"
                      alt="start-button"
                      css={css`
                        position: relative;
                        z-index: 1;
                        width: 30%;
                      `}
                    />
                  </div>
                </div>
                <span
                  css={css`
                    position: relative;
                    z-index: 1;
                    margin-left: 10px;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    letter-spacing: 0.23em;
                    color: #48381d;
                  `}
                >
                  ????????????
                </span>
              </div>
            </Link>
          </div>
        </LoadingAnimation>
        <LoadingAnimation
          customCss={css`
            position: absolute;
            top: 30vh;
            left: 47vw;
            transition-delay: 0.7s;
            @media (max-width: 576px) {
              position: relative;
              top: 100px;
              left: 16vw;
              width: 68vw;
            }
          `}
          beforeAnimation={opacityCss}
          animationIn={showCss}
        >
          <div className="CardBox">
            <div
              css={[
                cardImageOutterCss,
                css`
                  top: 10vh;
                  animation: ${floatKeyframes} 3.5s ease-in-out infinite;
                `,
              ]}
            >
              <img
                src="/images/card-1.png"
                css={[
                  cardImageCss,
                  css`
                    transform: ${`rotateX(${top / 2 - 10}deg)`}
                      ${`rotateY(${left - 10}deg)`} rotateZ(-12deg);
                  `,
                ]}
              />
            </div>
            <div
              css={[
                cardImageOutterCss,
                css`
                  top: 0px;
                  left: 15vw;
                  animation: ${floatKeyframes} 3.5s ease-in-out infinite 0.4s;
                  @media (max-width: 576px) {
                    left: 30vw;
                  }
                `,
              ]}
            >
              <img
                src="/images/card-2.png"
                css={[
                  cardImageCss,
                  css`
                    transform: ${`rotateX(${(top / 2) * 1.2}deg)`}
                      ${`rotateY(${-left + 10}deg)`} rotateZ(10deg);
                  `,
                ]}
              />
            </div>
            <div
              css={css`
                position: absolute;
                width: 30vw;
                top: 36vw;

                @media (max-width: 1080px) {
                  top: 37vw;
                }
                @media (max-width: 800px) {
                  top: 38vw;
                }
                @media (max-width: 700px) {
                  top: 39vw;
                }
                @media (max-width: 576px) {
                  display: none;
                }

                & img {
                  animation: ${cardShadowKeyframes} 3.5s ease-in-out infinite;
                  width: 100%;
                }
              `}
            >
              <img src="/images/shadow.svg" alt="" />
            </div>
          </div>
        </LoadingAnimation>
        <div
          className="quick-start"
          css={css`
            position: absolute;
            right: 0;
            top: calc(50vh - 25px);
            cursor: pointer;
            overflow: hidden;
            &::before {
              content: "";
              position: absolute;
              z-index: 3;
              display: block;
              display: none;
              width: 20px;
              height: 200px;
              background: linear-gradient(
                90deg,
                transparent 0%,
                #ffffff 40%,
                #ffffff 60%,
                transparent 100%
              );
              /* background: red; */
              transform: rotate(-45deg) translate(30px, -20px);
              transition: all 0.3s;
            }
            &:hover {
              .line-box {
                transform: translateX(10px);
              }
              ::before {
                transform: rotate(-45deg) translate(150px, -20px);
              }
            }
          `}
        >
          <div
            className="line-box"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.3s;
            `}
          >
            <img
              src="/images/btn-arrow.png"
              alt="quick-start-button"
              css={css`
                width: 13px;
              `}
            />
            <div
              className="line"
              css={css`
                height: 1px;
                width: 96px;
                background: #1d1406;
                margin-left: -2px;
              `}
            ></div>
          </div>
          <div
            css={css`
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 36px;
              letter-spacing: 0.23em;
              text-align: right;
              margin-right: 19px;
            `}
          >
            ????????????
          </div>
        </div>
      </div>
      <LoadingAnimation beforeAnimation={opacityCss} animationIn={showCss}>
        <LayoutContent>
          <div
            css={css`
              margin-top: 20vh;
            `}
          >
            <Title text="????????????" enText="Recommend" />
            <div
              className="post-card-box"
              css={css`
                display: flex;
                width: 100%;
                margin: 50px 0;

                @media (max-width: 576px) {
                  display: block;
                  /* width: auto;
                  overflow: scroll;
                  border-radius: 5px; */
                  /* flex-direction: column; */
                }
              `}
            >
              <PostCard link="/post/123" />
              <PostCard link="/post/123" />
              <PostCard link="/post/123" />
            </div>
          </div>
        </LayoutContent>
      </LoadingAnimation>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    spread: state.spread,
  };
}

export default connect(mapStateToProps, null)(Page);
