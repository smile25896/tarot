/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./Card";

export default [
  () => {
    return (
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
      </div>
    );
  },
  () => {
    return (
      <div
        key={2}
        css={css`
          & > div {
            width: 18%; // 164 * 90
          }
        `}
      >
        <Card
          _css={css`
            top: ${50 - ((164 / 90) * 18) / 2}%;
            left: 10%;
          `}
        />
        <Card
          _css={css`
            top: ${50 - ((164 / 90) * 18) / 2}%;
            left: ${50 - 9}%;
          `}
        />
        <Card
          _css={css`
            top: ${50 - ((164 / 90) * 18) / 2}%;
            right: 10%;
          `}
        />
      </div>
    );
  },
  () => {
    return (
      <div
        key={3}
        css={css`
          & > div {
            width: 18%; // 164 * 90
          }
        `}
      >
        <Card
          _css={css`
            top: 10%;
            left: 25%;
          `}
        />
        <Card
          _css={css`
            top: 10%;
            right: 25%;
          `}
        />
        <Card
          _css={css`
            bottom: 10%;
            left: 25%;
          `}
        />
        <Card
          _css={css`
            bottom: 10%;
            right: 25%;
          `}
        />
      </div>
    );
  },
  () => {
    return (
      <div
        key={4}
        css={css`
          & > div {
            width: 20%; // 164 * 90
          }
        `}
      >
        <Card
          _css={css`
            top: ${50 - ((164 / 90) * 20) / 2}%;
            left: ${50 - 10}%;
          `}
        />
      </div>
    );
  },
  () => {
    return (
      <div
        key={5}
        css={css`
          & > div {
            width: 18%; // 164 * 90
          }
        `}
      >
        <Card
          _css={css`
            top: ${50 - ((164 / 90) * 18) / 2}%;
            left: 24%;
          `}
        />
        <Card
          _css={css`
            top: ${50 - ((164 / 90) * 18) / 2}%;
            right: 24%;
          `}
        />
      </div>
    );
  },
  () => {
    return (
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
      </div>
    );
  },
];

const arr = [
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
        width: 18%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        left: 10%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        left: ${50 - 9}%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        right: 10%;
      `}
    />
  </div>,
  <div
    key={3}
    css={css`
      & > div {
        width: 18%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: 10%;
        left: 25%;
      `}
    />
    <Card
      _css={css`
        top: 10%;
        right: 25%;
      `}
    />
    <Card
      _css={css`
        bottom: 10%;
        left: 25%;
      `}
    />
    <Card
      _css={css`
        bottom: 10%;
        right: 25%;
      `}
    />
  </div>,
  <div
    key={4}
    css={css`
      & > div {
        width: 20%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 20) / 2}%;
        left: ${50 - 10}%;
      `}
    />
  </div>,
  <div
    key={5}
    css={css`
      & > div {
        width: 18%; // 164 * 90
      }
    `}
  >
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        left: 24%;
      `}
    />
    <Card
      _css={css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        right: 24%;
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
