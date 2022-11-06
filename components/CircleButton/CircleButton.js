/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useState } from "react";

const littleCircleShadowKeyframes = keyframes`
  0%{
    box-shadow: 0px 0px 50px rgb(255 163 110 / 73%),
      inset 0px 0px 20px rgb(255 163 110 / 50%);
    transform: scale(1);
  }

  50%{
    box-shadow: 0px 0px 20px rgb(255 163 110 / 90%),
      inset 0px 0px 20px rgb(255 163 110 / 50%);
      opacity: 1;
      transform: scale(1.3);
  }

  100%{
    box-shadow: 0px 0px 50px rgb(255 163 110 / 73%),
      inset 0px 0px 20px rgb(255 163 110 / 50%);
      transform: scale(1);
  }
`;

const bigCircleShadowKeyframes = keyframes`
  0%{
    box-shadow: 0px 0px 100px rgb(255 163 110 / 28%),
      inset 0px 0px 20px rgb(255 163 110 / 13%);
      transform: scale(1);
      opacity: 1;
  }
  
  40%{
    opacity: 1;

  }

  100%{
  box-shadow: 0px 0px 40px rgb(255 163 110 / 50%),
    inset 0px 0px 20px rgb(255 163 110 / 13%);
    transform: scale(2.4);
    opacity: 0;
    /* border-width: 6px; */
  }
`;

const CircleButton = ({ shuffle, top, left, isShow }) => {
  const [isHide, setIsHide] = useState(false);
  if (!isShow && !isHide) {
    setTimeout(() => {
      setIsHide(true);
    }, 700);
  }
  return !isHide ? (
    <div
      css={css`
        position: absolute;
        top: ${top}vh;
        right: ${left}vw;
        width: 50px;
        height: 50px;
        opacity: ${isShow ? "1" : "0"};
        transition: opacity 0.7s;
      `}
      onClick={shuffle}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 4px solid rgb(255 255 255);
          box-shadow: 0px 0px 50px rgb(255 163 110 / 73%),
            inset 0px 0px 20px rgb(255 163 110 / 50%);
          border-radius: 50%;
          cursor: pointer;
          filter: blur(1px);
          animation: ${littleCircleShadowKeyframes} 1.3s infinite ease-in-out;
        `}
      ></div>
    </div>
  ) : null;
};
export default CircleButton;
