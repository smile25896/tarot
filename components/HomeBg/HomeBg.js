/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const clockwiseKeyframes = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

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

const bubblesKeyframes = keyframes`
  0%{
  transform: translateY(170vh);
  }
  100%{
    transform: translateY(0vh);
  }
`;

const bubblesBoxCss = css``;

const bubblesCss = css`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 20vw;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: white;
  opacity: 0.6;
  animation: ${bubblesKeyframes} 10s linear infinite;
`;

const HomeBg = ({ bubbles, roundTranslate }) => {
  const Bubbles = bubbles.map((item, index) => {
    return (
      <div
        key={index}
        className="bubble"
        css={[
          bubblesCss,
          css`
            left: ${index * 12.5}vw;
            width: ${item.width}vw;
            height: ${item.width}vw;
            filter: blur(${item.width}px);
            animation-delay: ${item.delay}s;
            animation-duration: ${item.width * 0.7 + 6}s;
          `,
        ]}
      ></div>
    );
  });
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
          background: linear-gradient(45deg, #e6f4f2, #f5ede4, #f5e4e1);

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
          /* transition: transform 1s; */
          ${`transform: translateY(${-roundTranslate}px)`}

          @media (max-width: 576px) {
            top: 80vh;
            width: 100vw;
            left: 0vw;
            height: 180vw;
          }
        `}
      >
        {/* <div
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
          width: 45%;
          margin: 0 auto;
        `}
      />
    </div> */}
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
      <div className="bubbles-box" css={[bubblesBoxCss]}>
        {Bubbles}
      </div>
    </div>
  );
};
export default HomeBg;
