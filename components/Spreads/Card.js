/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { css } from "@emotion/react";

const Card = ({ width = "100px", _css }) => {
  return (
    <div
      css={[
        css`
          position: absolute;
        `,
        _css,
      ]}
    >
      <img
        css={css`
          width: 100%;
          height: 100%;
        `}
        src="/images/card-3.png"
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
