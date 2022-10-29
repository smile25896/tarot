/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import { css, keyframes } from "@emotion/react";

export default class LoadingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };

    this.myRef = React.createRef();

    this.checkShow = this.checkShow.bind(this);
    this.setShow = this.setShow.bind(this);
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
      const delay = this.props.delay ? this.props.delay : 0;
      setTimeout(this.setShow, delay * 1000);
    }
  }

  setShow() {
    this.setState({
      isShow: true,
    });
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
