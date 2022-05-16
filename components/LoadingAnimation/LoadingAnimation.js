/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import { css, keyframes } from "@emotion/react";

const opacityCss = css`
  opacity: 0;
  transform: translateY(-50px);
`;

const showCss = css`
  opacity: 1;
  transform: translateY(0px);
  transition: all 1.5s ease-out;
`;

export default class LoadingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };

    this.myRef = React.createRef();

    this.checkShow = this.checkShow.bind(this);
  }

  componentDidMount() {
    this.checkShow();
    document.addEventListener("scroll", this.checkShow);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.checkShow);
  }

  checkShow() {
    if (
      window.pageYOffset + window.screen.height - 200 >
      this.myRef.current.offsetTop
    ) {
      this.setState({
        isShow: true,
      });
    }
  }

  render() {
    return (
      <div
        ref={this.myRef}
        css={[
          this.state.isShow
            ? this.props.animationIn
            : this.props.beforeAnimation,
          this.props.customCss,
        ]}
      >
        {this.props.children}
      </div>
    );
  }
}
