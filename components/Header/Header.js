/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import Link from "next/link";

const lineCss = css`
  height: 1px;
  background-color: #48381d;
  margin: 12px 0;
`;

const Header = ({ showMenu }) => {
  return (
    <header
      css={css`
        position: ${showMenu ? "static" : "fixed"};
        padding: 30px 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <Link href="/">
        <img
          css={css`
            cursor: pointer;
          `}
          src="/images/logo.svg"
          width="145"
          height="25"
          alt=""
        />
      </Link>
      <div
        className="menu-icon"
        css={css`
          display: ${showMenu ? "block" : "none"};
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

Header.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};
export default Header;
