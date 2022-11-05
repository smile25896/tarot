/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { css, keyframes } from "@emotion/react";
import Link from "next/link";
import { TitleCss } from "components/Style/Title";
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

function BgColor() {
  return (
    <div
      className="bg-colorful"
      css={css`
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(0deg, #e6f4f2, #f5ede4, #f5e4e1);

        @media (max-width: 768px) {
          top: -10vh;
        }

        @media (max-width: 576px) {
          height: 250vh;
        }
      `}
    ></div>
  );
}

function CoverBox() {
  return (
    <div
      className="top-cover-box"
      css={css`
        position: absolute;
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
            top: -20vw;
            left: 0vw;
            width: 60vw;
            height: 60vw;
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
            top: 10vh;
            left: -20vw;
            width: 100vw;
            height: 100vw;
            /* background: red; */
            border-radius: 40%;
            animation: ${whiteCoverKeyframes} 15s infinite linear;
          `,
        ]}
      ></div>
    </div>
  );
}

const SideMenuCss = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  transform: translateX(100vw);
  transition: transform 0.5s ease-in-out;
`;

const SideMenuShowCss = css`
  transform: translateX(0);
`;

const UlCss = css`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0px;
  list-style-type: none;
  font-size: 20px;
  line-height: 29px;
  margin-top: 27px;
  margin-bottom: 92px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #a2938e;

  li {
    margin-top: 20px;
    transition: color 0.3s;
    &:hover {
      color: #54433d;
    }
  }
`;

function MenuColumn({ title, list, isShow }) {
  const listItems = list.map((item, index) => (
    <LoadingAnimation isShow={isShow} delay={index * 0.2} key={index}>
      <li>
        <Link href={item.link}>{item.title}</Link>
      </li>
    </LoadingAnimation>
  ));
  return (
    <LoadingAnimation isShow={isShow}>
      <div>
        <div
          css={[
            TitleCss,
            css`
              font-size: 54px;
            `,
          ]}
        >
          {title}
        </div>
      </div>
      <ul css={UlCss}>{listItems}</ul>
    </LoadingAnimation>
  );
}

MenuColumn.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default function SideMenu({ isShow }) {
  return (
    <div css={[SideMenuCss, isShow ? SideMenuShowCss : null]}>
      <BgColor />
      <CoverBox />
      <div
        css={css`
          position: absolute;
          top: 100px;
          left: 10%;
        `}
      >
        <MenuColumn
          isShow={isShow}
          title="Tarot divination"
          list={[
            { title: "塔羅占卜", link: "/" },
            { title: "快速占卜", link: "/" },
          ]}
        />
        <MenuColumn
          isShow={isShow}
          title="Article"
          list={[
            { title: "文章分類1", link: "/" },
            { title: "文章分類2", link: "/" },
            { title: "文章分類3", link: "/" },
            { title: "文章分類4", link: "/" },
          ]}
        />
      </div>
    </div>
  );
}
