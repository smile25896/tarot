/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import SideMenu from "./SideMenu";

const lineCss = css`
  height: 1px;
  background-color: #48381d;
  margin: 12px 0;
  transition: all 0.5s ease-in-out;
`;

const Header = ({ showMenuIcon }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <header
      css={css`
        position: fixed;
        width: 100%;
        padding: 30px 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
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
      <SideMenu isShow={isShowMenu} />

      <div
        className="menu-icon"
        css={css`
          display: ${showMenuIcon ? "block" : "none"};
          cursor: pointer;
          /* float: right; */
          width: 37px;
          z-index: 999;
        `}
        onClick={() => {
          setIsShowMenu(!isShowMenu);
        }}
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
              isShowMenu
                ? css`
                    transform: rotate(15deg);
                    transform-origin: -18% 0;
                  `
                : null,
            ]}
          ></div>
          <div
            className="line"
            css={[
              lineCss,
              css`
                width: 37px;
              `,
              isShowMenu
                ? css`
                    transform: rotate(-15deg);
                    transform-origin: -18% 0;
                  `
                : null,
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
  showMenuIcon: PropTypes.bool.isRequired,
};
export default Header;
