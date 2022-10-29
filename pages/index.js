/** @jsxImportSource @emotion/react */
import { Component } from "react";
import Layout from "components/Layout/Layout";
import { connect } from "react-redux";
import Content from "components/HomePage/Content";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      top: 0,
      roundTranslate: 0,
    };

    // this.handleMouseMove = debounce(this.handleMouseMove, 30);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseScroll = this.handleMouseScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("scroll", this.handleMouseScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("scroll", this.handleMouseScroll);
  }

  handleMouseMove(e) {
    this.setState({
      left: e.pageX * 0.6,
      top: Math.min(e.pageY - window.pageYOffset, 1000),
    });
  }

  handleMouseScroll(e) {
    this.setState({ roundTranslate: Math.min(window.pageYOffset * 0.5, 600) });
  }

  render() {
    return (
      <Layout showFooter={true}>
        <Content
          left={Number(this.state.left / 40)}
          top={Number(this.state.top / 20)}
          roundTranslate={this.state.roundTranslate}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    spread: state.spread,
  };
}

export default connect(mapStateToProps, null)(Page);
