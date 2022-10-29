/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import Title from "components/Title/Title";
import HomeBg from "./HomeBg";
import Opening from "./Opening";
import Cover from "./Cover";
import LayoutContent from "components/LayoutContent/LayoutContent";
import PostCard from "components/PostCard/PostCard";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";

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

const titleBeforeAnimation = css`
  opacity: 0;
  transform: translate(130px, 130px);
`;

const titleShowCss = css`
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition: all 1s cubic-bezier(0.3, 0.4, 0.1, 1) 0.2s;
`;

export default function Content({ left, top, roundTranslate }) {
  return (
    <div>
      <Opening />
      <HomeBg roundTranslate={roundTranslate} />
      <Cover left={left} top={top} />
      <LoadingAnimation beforeAnimation={opacityCss} animationIn={showCss}>
        <LayoutContent>
          <div
            css={css`
              margin-top: 20vh;
            `}
          >
            <Title text="塔羅文章" enText="Recommend" />
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
