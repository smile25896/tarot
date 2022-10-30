/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { TitleCss, TitleOutterCss } from "components/Style/Title";

const Title = ({ text, enText }) => {
  return (
    <div
      css={[
        TitleOutterCss,
        css`
          margin-bottom: 50px;
        `,
      ]}
    >
      <h1
        css={[
          TitleCss,
          css`
          position: relative;
          &::before {
            content: "${enText}";
            display: block;
            position: absolute;
            font-family: "Montserrat";
            font-weight: 700;
            font-size: 1.87em;
            line-height: 1.21em;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
            z-index: -1;
            top: 93px;
            opacity: 0.6;

            @media (max-width: 768px) {
              top: 70px;
            }
            @media (max-width: 420px) {
              top: 76px;
              font-size: 50px;
            }
          }
        `,
        ]}
      >
        {enText}
      </h1>
      <h2
        css={css`
          margin-left: 5px;
          margin-top: 7px;
          font-style: normal;
          font-weight: 400;
          font-size: 0.32em;
          line-height: 1.21em;
          letter-spacing: 0.46em;
          color: #48381d;
        `}
      >
        {text}
      </h2>
      <div
        className="line"
        css={css`
          width: 106px;
          height: 1px;
          margin-left: 5px;
          margin-top: 28px;
          background-color: #000;
        `}
      ></div>
    </div>
  );
};
export default Title;
