/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const TarotCards = [
  {
    id: 0,
    name: "愚人",
    number: 0,
    type: "Major",
  },
  {
    id: 1,
    name: "魔術師",
    number: 1,
    type: "Major",
  },
  {
    id: 2,
    name: "女祭司",
    number: 2,
    type: "Major",
  },
  {
    id: 3,
    name: "女皇",
    number: 3,
    type: "Major",
  },
  {
    id: 4,
    name: "皇帝",
    number: 4,
    type: "Major",
  },
  {
    id: 5,
    name: "教皇",
    number: 5,
    type: "Major",
  },
  {
    id: 6,
    name: "戀人",
    number: 6,
    type: "Major",
  },
  {
    id: 7,
    name: "戰車",
    number: 7,
    type: "Major",
  },
  {
    id: 8,
    name: "力量",
    number: 8,
    type: "Major",
  },
  {
    id: 9,
    name: "隱士",
    number: 9,
    type: "Major",
  },
  {
    id: 10,
    name: "命運之輪",
    number: 10,
    type: "Major",
  },
  {
    id: 11,
    name: "正義",
    number: 11,
    type: "Major",
  },
  {
    id: 12,
    name: "吊人",
    number: 12,
    type: "Major",
  },
  {
    id: 13,
    name: "死神",
    number: 13,
    type: "Major",
  },
  {
    id: 14,
    name: "節制",
    number: 14,
    type: "Major",
  },
  {
    id: 15,
    name: "惡魔",
    number: 15,
    type: "Major",
  },
  {
    id: 16,
    name: "塔",
    number: 16,
    type: "Major",
  },
  {
    id: 17,
    name: "星星",
    number: 17,
    type: "Major",
  },
  {
    id: 18,
    name: "月亮",
    number: 18,
    type: "Major",
  },
  {
    id: 19,
    name: "太陽",
    number: 19,
    type: "Major",
  },
  {
    id: 20,
    name: "審判",
    number: 20,
    type: "Major",
  },
  {
    id: 21,
    name: "世界",
    number: 21,
    type: "Major",
  },
  {
    id: 22,
    name: "權杖一",
    number: 1,
    type: "Wand",
  },
  {
    id: 23,
    name: "權杖二",
    number: 2,
    type: "Wand",
  },
  {
    id: 24,
    name: "權杖三",
    number: 3,
    type: "Wand",
  },
  {
    id: 25,
    name: "權杖四",
    number: 4,
    type: "Wand",
  },
  {
    id: 26,
    name: "權杖五",
    number: 5,
    type: "Wand",
  },
  {
    id: 27,
    name: "權杖六",
    number: 6,
    type: "Wand",
  },
  {
    id: 28,
    name: "權杖七",
    number: 7,
    type: "Wand",
  },
  {
    id: 29,
    name: "權杖八",
    number: 8,
    type: "Wand",
  },
  {
    id: 30,
    name: "權杖九",
    number: 9,
    type: "Wand",
  },
  {
    id: 31,
    name: "權杖十",
    number: 10,
    type: "Wand",
  },
  {
    id: 32,
    name: "權杖侍者",
    number: 11,
    type: "Wand",
  },
  {
    id: 33,
    name: "權杖騎士",
    number: 12,
    type: "Wand",
  },
  {
    id: 34,
    name: "權杖皇后",
    number: 13,
    type: "Wand",
  },
  {
    id: 35,
    name: "權杖國王",
    number: 14,
    type: "Wand",
  },
  {
    id: 36,
    name: "聖杯一",
    number: 1,
    type: "Cup",
  },
  {
    id: 37,
    name: "聖杯二",
    number: 2,
    type: "Cup",
  },
  {
    id: 38,
    name: "聖杯三",
    number: 3,
    type: "Cup",
  },
  {
    id: 39,
    name: "聖杯四",
    number: 4,
    type: "Cup",
  },
  {
    id: 40,
    name: "聖杯五",
    number: 5,
    type: "Cup",
  },
  {
    id: 41,
    name: "聖杯六",
    number: 6,
    type: "Cup",
  },
  {
    id: 42,
    name: "聖杯七",
    number: 7,
    type: "Cup",
  },
  {
    id: 43,
    name: "聖杯八",
    number: 8,
    type: "Cup",
  },
  {
    id: 44,
    name: "聖杯九",
    number: 9,
    type: "Cup",
  },
  {
    id: 45,
    name: "聖杯十",
    number: 10,
    type: "Cup",
  },
  {
    id: 46,
    name: "聖杯侍者",
    number: 11,
    type: "Cup",
  },
  {
    id: 47,
    name: "聖杯騎士",
    number: 12,
    type: "Cup",
  },
  {
    id: 48,
    name: "聖杯皇后",
    number: 13,
    type: "Cup",
  },
  {
    id: 49,
    name: "聖杯國王",
    number: 14,
    type: "Cup",
  },
  {
    id: 50,
    name: "寶劍一",
    number: 1,
    type: "Sword",
  },
  {
    id: 51,
    name: "寶劍二",
    number: 2,
    type: "Sword",
  },
  {
    id: 52,
    name: "寶劍三",
    number: 3,
    type: "Sword",
  },
  {
    id: 53,
    name: "寶劍四",
    number: 4,
    type: "Sword",
  },
  {
    id: 54,
    name: "寶劍五",
    number: 5,
    type: "Sword",
  },
  {
    id: 55,
    name: "寶劍六",
    number: 6,
    type: "Sword",
  },
  {
    id: 56,
    name: "寶劍七",
    number: 7,
    type: "Sword",
  },
  {
    id: 57,
    name: "寶劍八",
    number: 8,
    type: "Sword",
  },
  {
    id: 58,
    name: "寶劍九",
    number: 9,
    type: "Sword",
  },
  {
    id: 59,
    name: "寶劍十",
    number: 10,
    type: "Sword",
  },
  {
    id: 60,
    name: "寶劍侍者",
    number: 11,
    type: "Sword",
  },
  {
    id: 61,
    name: "寶劍騎士",
    number: 12,
    type: "Sword",
  },
  {
    id: 62,
    name: "寶劍皇后",
    number: 13,
    type: "Sword",
  },
  {
    id: 63,
    name: "寶劍國王",
    number: 14,
    type: "Sword",
  },
  {
    id: 64,
    name: "錢幣一",
    number: 1,
    type: "Pentacle",
  },
  {
    id: 65,
    name: "錢幣二",
    number: 2,
    type: "Pentacle",
  },
  {
    id: 66,
    name: "錢幣三",
    number: 3,
    type: "Pentacle",
  },
  {
    id: 67,
    name: "錢幣四",
    number: 4,
    type: "Pentacle",
  },
  {
    id: 68,
    name: "錢幣五",
    number: 5,
    type: "Pentacle",
  },
  {
    id: 69,
    name: "錢幣六",
    number: 6,
    type: "Pentacle",
  },
  {
    id: 70,
    name: "錢幣七",
    number: 7,
    type: "Pentacle",
  },
  {
    id: 71,
    name: "錢幣八",
    number: 8,
    type: "Pentacle",
  },
  {
    id: 72,
    name: "錢幣九",
    number: 9,
    type: "Pentacle",
  },
  {
    id: 73,
    name: "錢幣十",
    number: 10,
    type: "Pentacle",
  },
  {
    id: 74,
    name: "錢幣侍者",
    number: 11,
    type: "Pentacle",
  },
  {
    id: 75,
    name: "錢幣騎士",
    number: 12,
    type: "Pentacle",
  },
  {
    id: 76,
    name: "錢幣皇后",
    number: 13,
    type: "Pentacle",
  },
  {
    id: 77,
    name: "錢幣國王",
    number: 14,
    type: "Pentacle",
  },
];

const Card = ({ cardId, direction, isOpen }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        perspective: 500px;
        & > div {
          backface-visibility: hidden;
          transition: transform 1s;
        }
      `}
    >
      <div
        className="front"
        css={css`
          ${isOpen ? "" : "transform: rotateY(-180deg);"};
        `}
      >
        <img
          css={css`
            width: 100%;
            ${direction === false ? "transform: rotate(180deg)" : ""}
          `}
          src={`/tarots/${cardId % 5}.png`}
        />
      </div>
      <div
        className="back"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          ${isOpen ? "transform: rotateY(180deg);" : ""};
        `}
      >
        <img
          css={css`
            width: 100%;
            ${direction === false ? "transform: rotate(180deg)" : ""}
          `}
          src="/images/card-2.png"
        />
      </div>
      <span
        css={css`
          position: absolute;
          bottom: -1.6em;
          width: 200%;
          font-size: 12px;
          text-align: center;
        `}
      >
        {isOpen
          ? `${TarotCards[cardId].name} (${
              direction === true ? "正位" : "逆位"
            })`
          : null}
      </span>
    </div>
  );
};
export default Card;
