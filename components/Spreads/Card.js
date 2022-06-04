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
      {status !== CARD_STATUS_NORMAL ? (
        <img
          css={css`
            width: 100%;
            height: 100%;
            ${status === CARD_STATUS_EMPTY ? "border: 1px dashed blue" : ""};
          `}
          src={
            status === CARD_STATUS_NORMAL
              ? "/images/card-2.png"
              : "/images/card-3.png"
          }
        ></img>
      ) : (
        <TarotCard
          cardId={card.id}
          direction={card.direction}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};

Card.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.string,
};
export default Card;
