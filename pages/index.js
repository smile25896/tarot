/** @jsxImportSource @emotion/react */
import { Component } from "react";
import Layout from "components/Layout/Layout";
import { connect } from "react-redux";
import Content from "components/HomePage/Content";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout showFooter={true}>
        <Content isShowOpening={this.props.isShowOpening} />
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
