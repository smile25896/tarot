/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Background({ isTop = true }) {
  return (
    <>
      <div
        css={css`
          position: absolute;
          left: 0;
          ${isTop ? "top: 0;" : "bottom: 0;"}
          width: 100%;
          height: 70vh;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(-90deg, #e6f4f2, #f5ede4, #f5e4e1);
        `}
      ></div>
      <div
        css={css`
          position: absolute;
          left: 0;
          ${isTop ? "top: 30vh;" : "bottom: 30vh;"}
          width: 100%;
          height: 60vh;
          z-index: -1;
          ${isTop
            ? "background: linear-gradient(360deg, #fff, #fff 40%, transparent);"
            : "background: linear-gradient(180deg, #fff, #fff 40%, transparent);"}
        `}
      ></div>
    </>
  );
}
