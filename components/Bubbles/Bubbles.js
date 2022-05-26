import { Component } from "react";
import Bubble from "./Bubble";
import PropTypes from "prop-types";

class Bubbles extends Component {
  constructor(props) {
    super(props);

    this.bubbles = [
      {
        width: Math.random() * 7 + 4,
        delay: Math.random() * 20 - 20,
      },
      {
        width: Math.random() * 7 + 4,
        delay: Math.random() * 20 - 20,
      },
      {
        width: Math.random() * 7 + 4,
        delay: Math.random() * 20 - 20,
      },
      {
        width: Math.random() * 7 + 4,
        delay: Math.random() * 20 - 20,
      },
      {
        width: Math.random() * 7 + 4,
        delay: Math.random() * 20 - 20,
      },
      {
        width: Math.random() * 7 + 4,
        delay: Math.random() * 20 - 20,
      },
    ];
  }

  render() {
    return this.bubbles.map((item, index) => {
      return <Bubble key={index} item={item} index={index} />;
    });
  }
}

Bubbles.propTypes = {};
export default Bubbles;
