/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

const linkLiCss = css`
  margin: 0 23px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #48381d;
`;

const Footer = () => {
  return (
    <footer
      css={css`
        width: 100%;
        position: absolute;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 30vh 10vw 174px;
          @media (max-width: 576px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            margin-top: 3vh;
            width: 247px;
            height: 43px;
          `}
        >
          <img
            src="/images/logo.svg"
            alt=""
            css={css`
              width: 100%;
            `}
          />
        </div>
        <div>
          <div
            css={css`
              font-weight: 400;
              font-size: 14px;
              line-height: 36px;
              text-align: right;
              color: #988e88;
              width: 50vw;
              @media (max-width: 576px) {
                margin-top: 50px;
                width: 100%;
                text-align: left;
              }
            `}
          >
            塔羅牌裡面的各個元素、符號、以及象徵意義是源自公元前3世紀～14世紀中發展形成的。
            集合了多國神秘學、基督教、猶太教、埃及神話、星座、數字符號、象徵學等自成一格的嚴謹占卜體系。
          </div>
          <ul
            css={css`
              display: flex;
              margin: 39px -23px 0;
              justify-content: end;
              @media (max-width: 576px) {
                justify-content: start;
              }
            `}
          >
            <li css={[linkLiCss]}>
              <Link href="/">快速連結</Link>
            </li>
            <li css={[linkLiCss]}>
              <Link href="/">快速連結</Link>
            </li>
            <li css={[linkLiCss]}>
              <Link href="/">快速連結</Link>
            </li>
          </ul>
        </div>
        <div
          css={css`
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 70vh;
            overflow: hidden;
            z-index: -1;
            background: linear-gradient(90deg, #e6f4f2, #f5ede4, #f5e4e1);
          `}
        ></div>
        <div
          css={css`
            position: absolute;
            left: 0;
            bottom: 30vh;
            width: 100%;
            height: 60vh;
            z-index: -1;
            background: linear-gradient(180deg, #fff, #fff 40%, transparent);
          `}
        ></div>
      </div>
      <div
        css={css`
          margin-bottom: 20px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 36px;

          text-align: center;
          text-transform: uppercase;

          color: #a2938e;
        `}
      >
        Copyright ©
      </div>
    </footer>
  );
};
export default Footer;
