/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LayoutContent = ({ children }) => {
  return (
    <main
      css={css`
        margin: 0 auto;
        width: 1200px;
        @media (max-width: 1480px) {
          width: 1020px;
        }
        @media (max-width: 1280px) {
          width: 860px;
        }
        @media (max-width: 1080px) {
          width: 720px;
        }
        @media (max-width: 860px) {
          width: 680px;
        }
        @media (max-width: 768px) {
          width: 80vw;
        }
      `}
    >
      {children}
    </main>
  );
};
export default LayoutContent;
