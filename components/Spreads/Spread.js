/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./Card";

export default [
  <div
    key={1}
    css={css`
      & > div {
        width: 13%;
      }
    `}
  >
    <Card
      _css={css`
        top: 39%;
        left: 0%;
      `}
    />
    <Card
      _css={css`
        top: 10%;
        left: 23%;
      `}
    />
    <Card
      _css={css`
        top: 39%;
        left: 23%;
      `}
    />
    <Card
      _css={css`
        bottom: 10%;
        left: 23%;
      `}
    />
    <Card
      _css={css`
        top: 39%;
        left: 23%;
        transform: rotate(90deg);
      `}
    />
    <Card
      _css={css`
        top: 39%;
        left: 46%;
      `}
    />
    <Card
      _css={css`
        top: 10%;
        right: 20%;
      `}
    />
    <Card
      _css={css`
        top: 39%;
        right: 20%;
      `}
    />
    <Card
      _css={css`
        top: 39%;
        right: 0%;
      `}
    />
    <Card
      _css={css`
        bottom: 10%;
        right: 0%;
      `}
    />
  </div>,
  <div
    key={2}
    css={css`
      & > div {
        width: 26%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 26) / 2}%;
        left: 5%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 26) / 2}%;
        left: ${50 - 13}%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 26) / 2}%;
        right: 5%;
      `}
    />
  </div>,
  <div
    key={3}
    css={css`
      & > div {
        width: 24%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: 4%;
        left: 23.5%;
      `}
    />
    <Card
      _css={css`
        top: 4%;
        right: 23.5%;
      `}
    />
    <Card
      _css={css`
        bottom: 4%;
        left: 23.5%;
      `}
    />
    <Card
      _css={css`
        bottom: 4%;
        right: 23.5%;
      `}
    />
  </div>,
  <div
    key={4}
    css={css`
      & > div {
        width: 30%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 30) / 2}%;
        left: ${50 - 15}%;
      `}
    />
  </div>,
  <div
    key={5}
    css={css`
      & > div {
        width: 30%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 30) / 2}%;
        left: 15%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 30) / 2}%;
        right: 15%;
      `}
    />
  </div>,
  <div
    key={6}
    css={css`
      & > div {
        width: 16%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 16) / 2}%;
        left: 19%;
      `}
    />
    <Card
      _css={css`
        top: 0%;
        left: 42%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 16) / 2}%;
        left: 42%;
      `}
    />
    <Card
      _css={css`
        bottom: 0%;
        left: 42%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 16) / 2}%;
        right: 19%;
      `}
    />
  </div>,
];
