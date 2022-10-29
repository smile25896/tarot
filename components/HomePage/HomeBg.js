/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { clockwiseKeyframes } from "styles/background";
import Bubbles from "components/Bubbles/Bubbles";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";

const whiteCoverKeyframes = keyframes`
  0%{
    transform: rotate(0deg);
  }

50%{
  transform: rotate(180deg) translateY(140px);
}

  100%{
    transform: rotate(360deg);
  }
`;

const whiteCoverKeyframes2 = keyframes`
  0%{
    transform: rotate(0deg);
  }

  50%{
    transform: rotate(180deg) translateY(50px);
  }

  100%{
    transform: rotate(360deg);
  }
`;

const whiteCoverKeyframes3 = keyframes`
  0%{
    transform: rotate(0deg);
  }

50%{
  /* transform: rotate(180deg) translateY(140px); */
}

  100%{
    transform: rotate(360deg);
  }
`;

const waveCss = css`
  position: absolute;
  transform-origin: center;
  filter: blur(30px);
  background: white;
`;

const HomeBg = ({ roundTranslate }) => {
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
      `}
    >
      <div
        className="bg-colorful"
        css={css`
          position: absolute;
          top: 0;
          width: 100%;
          height: 180vh;
          z-index: -1;
          background: linear-gradient(90deg, #e6f4f2, #f5ede4, #f5e4e1);

          @media (max-width: 768px) {
            top: -10vh;
          }

          @media (max-width: 576px) {
            height: 250vh;
          }
        `}
      ></div>
      <div
        className="top-cover-box"
        css={css`
          position: absolute;
          top: -10vh;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          @media (max-width: 768px) {
            top: -20vh;
          }
        `}
      >
        <div
          className="top-cover"
          css={[
            waveCss,
            css`
              position: absolute;
              z-index: -1;
              top: -85vh;
              left: -50vh;
              width: 130vh;
              height: 130vh;
              border-radius: 40%;
              /* background: red; */
              filter: blur(25px);
              animation: ${whiteCoverKeyframes3} 15s infinite linear;
            `,
          ]}
        ></div>
        <div
          className="top-cover"
          css={[
            waveCss,
            css`
              position: absolute;
              z-index: -1;
              top: -180vh;
              left: -50vh;
              width: 230vh;
              height: 230vh;
              border-radius: 40%;
              animation: ${whiteCoverKeyframes} 15s infinite linear;
            `,
          ]}
        ></div>
        <div
          className="top-cover"
          css={[
            waveCss,
            css`
              z-index: -1;
              top: -70vh;
              left: 70vh;
              width: 100vh;
              height: 100vh;
              border-radius: 40%;
              animation: ${whiteCoverKeyframes2} 15s infinite linear;
            `,
          ]}
        ></div>
        <div
          className="top-cover"
          css={[
            waveCss,
            css`
              position: absolute;
              z-index: -1;
              top: -170vh;
              left: 40vh;
              width: 200vh;
              height: 200vh;
              border-radius: 40%;
              animation: ${whiteCoverKeyframes2} 15s infinite linear;
            `,
          ]}
        ></div>
      </div>
      <div
        className="bottom-cover box"
        css={css`
          position: absolute;
          top: 123vh;
          left: 0;
          width: 100%;
          height: 80vh;
          background: linear-gradient(
            0deg,
            white,
            white 50%,
            transparent 90%,
            transparent
          );

          @media (max-width: 576px) {
            top: 200vh;
          }
        `}
      ></div>
      <LoadingAnimation
        beforeAnimation={css`
          transform: translateY(300px);
        `}
        animationIn={css`
          transform: translateY(0);
          transition: all 2.3s cubic-bezier(0.12, 0.41, 0.36, 0.95);
          transition-delay: 3.5s;
        `}
      >
        <div
          className="bg-round"
          css={css`
            position: absolute;
            width: 80vw;
            height: 80vw;
            top: 50vh;
            left: 10vw;
            z-index: -1;
            overflow: hidden;
            opacity: 0.4;
            /* transition: transform 1s; */
            ${`transform: translateY(${-roundTranslate}px);`}

            @media (max-width: 576px) {
              top: 80vh;
              width: 100vw;
              left: 0vw;
              height: 180vw;
            }
          `}
        >
          <div
            css={css`
              position: absolute;
              width: 80vw;
              height: 80vw;
              display: flex;
              align-items: center;
              justify-content: center;
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
          </div>
          <img
            src="/images/circle-main.png"
            alt="background"
            css={css`
              position: absolute;
              width: 100%;
              animation: ${clockwiseKeyframes} 100s linear infinite;

              @media (max-width: 576px) {
                width: 180vw;
                left: -40vw;
              }
            `}
          />
        </div>
      </LoadingAnimation>
      <div className="bubbles-box">
        <Bubbles />
      </div>
    </div>
  );
};
export default HomeBg;
