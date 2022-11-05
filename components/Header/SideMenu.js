/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import Link from "next/link";
import { TitleCss } from "components/Style/Title";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";

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
