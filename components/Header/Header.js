/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

const lineCss = css`
  height: 1px;
  background-color: #48381d;
  margin: 12px 0;
`;

const Header = () => {
  return (
    <header
      css={css`
        padding: 30px 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <Image src="/images/logo.svg" width="145" height="25" alt="" />
      <div
        className="menu-icon"
        css={css`
          cursor: pointer;
          /* float: right; */
          width: 37px;
        `}
      >
        <div
          className="line-box"
          css={css`
            margin: -12px 0 0;
          `}
        >
          <div
            className="line"
            css={[
              lineCss,
              css`
                width: 37px;
              `,
            ]}
          ></div>
          {/* <div
            className="line"
            css={[
              lineCss,
              css`
                width: 30px;
                margin-left: 3.5px;
              `,
            ]}
          ></div> */}
          <div
            className="line"
            css={[
              lineCss,
              css`
                width: 37px;
              `,
            ]}
          ></div>
        </div>
        <div
          className="text"
          css={css`
            margin-top: -3px;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #48381d;
            transform: scale(0.9);
            margin-left: -1px;
          `}
        >
          MENU
        </div>
      </div>
    </header>
  );
};
export default Header;
