/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { css } from "@emotion/react";

const Layout = ({
  topPadding = false,
  showFooter,
  showMenuIcon = true,
  children,
  colorfulBg = false,
}) => {
  return (
    <>
      <Header showMenuIcon={showMenuIcon} />
      {colorfulBg ? (
        <div
          css={css`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: linear-gradient(
              180deg,
              #f4dfdf -26.67%,
              #f5ede4 49.7%,
              #e6f4f2 92.87%
            );
            z-index: -1;
          `}
        ></div>
      ) : null}
      <main
        css={css`
          ${topPadding ? "padding-top: 95px;" : ""};
        `}
      >
        {children}
      </main>
      {showFooter ? <Footer /> : null}
    </>
  );
};

Layout.propTypes = {
  topPadding: PropTypes.bool,
  children: PropTypes.any,
  colorfulBg: PropTypes.bool,
  showFooter: PropTypes.bool.isRequired,
  showMenuIcon: PropTypes.bool,
};
export default Layout;
