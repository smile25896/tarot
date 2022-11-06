/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import {
  CARD_STATUS_TRANSLUCENT,
  CARD_STATUS_EMPTY,
  CARD_STATUS_NORMAL,
} from "constant/data";
import TarotCard from "components/Card/Card";

const Card = ({ _css, status = CARD_STATUS_TRANSLUCENT, card, isOpen }) => {
  return (
    <div
      css={[
        css`
          position: absolute;
        `,
        _css,
      ]}
    >
      {status !== CARD_STATUS_NORMAL ? null : (
        <TarotCard
          cardId={card.id}
          direction={card.direction}
          isOpen={isOpen}
        />
      )}
      <img
        css={css`
          ${status === CARD_STATUS_NORMAL ? "position: absolute;" : ""};
          top: 0;
          left: 0;
          width: 100%;
          /* height: 100%; */
          opacity: ${status === CARD_STATUS_NORMAL ? 0 : 1};
          transition: opacity 0.5s;
        `}
        src={
          status === CARD_STATUS_TRANSLUCENT
            ? "/images/card-3.png"
            : "/images/card-none.png"
        }
      ></img>
    </div>
  );
};

Card.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.string,
};
export default Card;
