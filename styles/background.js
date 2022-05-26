/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const clockwiseKeyframes = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

const bubblesKeyframes = keyframes`
  0%{
  transform: translateY(170vh);
  }
  100%{
    transform: translateY(-100px);
  }
`;

export const bubblesCss = css`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 20vw;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: white;
  opacity: 0.4;
  animation: ${bubblesKeyframes} 10s linear infinite;
`;
