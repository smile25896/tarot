/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import { css, keyframes } from "@emotion/react";
import { isConstructorDeclaration } from "typescript";

const opacityCss = css`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.2s ease-out 0.2s;
`;

const showCss = css`
  opacity: 1;
  transform: translateY(0px);
  transition: all 1s ease-out 0.2s;
`;

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
    // 進場動畫觸發條件分成：1. scroll滾到 2.設定this.props.isShow
    if (this.props.isShow === undefined) {
      document.addEventListener("scroll", this.checkShow);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isShow !== undefined &&
      this.props.isShow !== prevProps.isShow
    ) {
      this.setState({
        isShow: this.props.isShow,
      });
    }
  }

  componentWillUnmount() {
    if (this.props.isShow === undefined) {
      document.removeEventListener("scroll", this.checkShow);
    }
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
    const animationIn = this.props.animationIn ?? showCss;
    const beforeAnimation = this.props.beforeAnimation ?? opacityCss;
    return (
      <div
        ref={this.myRef}
        css={[
          this.state.isShow ? animationIn : beforeAnimation,
          this.props.customCss,
        ]}
      >
        {this.props.children}
      </div>
    );
  }
}
