/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Title from "./Title/Title";
import LayoutContent from "components/LayoutContent/LayoutContent";
import PostCard from "components/PostCard/PostCard";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";

const opacityCss = css`
  opacity: 0;
  transform: translateY(50px);
`;

const showCss = css`
  opacity: 1;
  transform: translateY(0px);
  transition: all 1s ease-out 0.2s;
`;

const CardCss = css`
  position: relative;
  flex: 1;
  cursor: pointer;

  @media (min-width: 577px) {
    &:nth-child(2n-1) {
      margin-top: 10vh;
    }
    &:nth-child(2n) {
      margin-right: 4vw;
      margin-left: 4vw;
    }
    &:hover {
      .cover-mask {
        opacity: 1;
      }
    }
  }

  @media (max-width: 576px) {
    margin: 40px 0;
    display: flex;
  }
`;

export default function Article() {
  return (
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
          <LoadingAnimation
            beforeAnimation={opacityCss}
            animationIn={showCss}
            customCss={CardCss}
          >
            <PostCard link="/post/123" />
          </LoadingAnimation>
          <LoadingAnimation
            beforeAnimation={opacityCss}
            animationIn={showCss}
            customCss={CardCss}
            delay={0.4}
          >
            <PostCard link="/post/123" />
          </LoadingAnimation>
          <LoadingAnimation
            beforeAnimation={opacityCss}
            animationIn={showCss}
            customCss={CardCss}
            delay={0.75}
          >
            <PostCard link="/post/123" />
          </LoadingAnimation>
        </div>
      </div>
    </LayoutContent>
  );
}
