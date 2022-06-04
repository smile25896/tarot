/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./Card";

const spreadData = [
  {
    width: "12%",
    cardPosition: [
      css`
        top: 39%;
        left: 0%;
      `,
      css`
        top: 10%;
        left: 23%;
      `,
      css`
        top: 39%;
        left: 23%;
      `,
      css`
        bottom: 10%;
        left: 23%;
      `,
      css`
        top: 39%;
        left: 23%;
        transform: rotate(90deg);
      `,
      css`
        top: 39%;
        left: 46%;
      `,
      css`
        top: 10%;
        right: 20%;
      `,
      css`
        top: 39%;
        right: 20%;
      `,
      css`
        top: 39%;
        right: 0%;
      `,
      css`
        bottom: 10%;
        right: 0%;
      `,
    ],
  },
  {
    width: "18%",
    cardPosition: [
      css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        left: 10%;
      `,
      css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        left: ${50 - 9}%;
      `,
      css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        right: 10%;
      `,
    ],
  },
  {
    width: "18%",
    cardPosition: [
      css`
        top: 10%;
        left: 25%;
      `,
      css`
        top: 10%;
        right: 25%;
      `,
      css`
        bottom: 10%;
        left: 25%;
      `,
      css`
        bottom: 10%;
        right: 25%;
      `,
    ],
  },
  {
    width: "20%",
    cardPosition: [
      css`
        top: ${50 - ((164 / 90) * 20) / 2}%;
        left: ${50 - 10}%;
      `,
    ],
  },
  {
    width: "18%",
    cardPosition: [
      css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        left: 24%;
      `,
      css`
        top: ${50 - ((164 / 90) * 18) / 2}%;
        right: 24%;
      `,
    ],
  },
  {
    width: "16%",
    cardPosition: [
      css`
        top: ${50 - ((164 / 90) * 16) / 2}%;
        left: 19%;
      `,
      css`
        top: 0%;
        left: 42%;
      `,
      css`
        top: ${50 - ((164 / 90) * 16) / 2}%;
        left: 42%;
      `,
      css`
        bottom: 0%;
        left: 42%;
      `,
      css`
        top: ${50 - ((164 / 90) * 16) / 2}%;
        right: 19%;
      `,
    ],
  },
];

export default spreadData.map((item) => {
  return (cardStatus = [], chosenCards = [], isOpen = false) => {
    console.log(chosenCards);
    const cardItems = item.cardPosition.map((cardItem, index) => {
      return (
        <Card
          key={index}
          _css={cardItem}
          status={cardStatus[index]}
          card={chosenCards[index]}
          isOpen={isOpen}
        />
      );
    });
    return (
      <div
        key={1}
        css={css`
          & > div {
            width: ${item.width};
          }
        `}
      >
        {cardItems}
      </div>
    );
  };
});
