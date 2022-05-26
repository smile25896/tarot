/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { bubblesCss } from "styles/background";

const Bubble = ({ item, index }) => {
  return (
    <div
      key={index}
      className="bubble"
      css={[
        bubblesCss,
        css`
          left: ${index * 16}vw;
          width: ${item.width}vw;
          height: ${item.width}vw;
          filter: blur(${item.width}px);
          animation-delay: ${item.delay}s;
          animation-duration: ${item.width * 0.7 + 6}s;
        `,
      ]}
    ></div>
  );
};

Bubble.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default Bubble;
