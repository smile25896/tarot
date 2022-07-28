/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useState } from "react";

const textKeyframs = keyframes`
  0%{
    opacity: 0;
  }
  40%, 60%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;
const bgKeyframs = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Opening = () => {
  const [isShow, setIsShow] = useState(true);
  setTimeout(() => {
    setIsShow(false);
  }, 4800);
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        display: ${isShow ? "block" : "none"};

        & > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}
    >
      <div
        css={css`
          background-color: #fff;
          animation: ${bgKeyframs} 2s;
          animation-delay: 2.8s;
          animation-fill-mode: forwards;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          css={css`
            cursor: pointer;
            animation: ${textKeyframs} 3s;
            animation-fill-mode: forwards;
          `}
          src="/images/logo.svg"
          width="145"
          height="25"
          alt=""
        />
      </div>
    </div>
  );
};
export default Opening;
