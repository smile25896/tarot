/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { setSpreadId } from "actions/spread";
import { bindActionCreators } from "redux";
import Layout from "components/Layout/Layout";
import LayoutContent from "components/LayoutContent/LayoutContent";
import { Background } from "components/Background";
import { css } from "@emotion/react";
import { TagCss } from "components/Style/Article";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener("wheel", this.handleWheel);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <Layout showFooter={true} topPadding={true}>
        <Background />
        <LayoutContent>
          <div
            className="article"
            css={css`
              padding-top: 10vh;
            `}
          >
            <div
              className="title"
              css={css`
                font-size: 32px;
                line-height: 49px;
                letter-spacing: 0.03em;
                text-transform: uppercase;
                color: #54433d;
                margin-bottom: 28px;
              `}
            >
              你有所不知：
              12星座男絕不放棄這些東西！？獅子死愛面子、天蠍最深癡情
            </div>
            <div
              className="tag-date-box"
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <div
                className="tag-box"
                css={css`
                  display: flex;
                `}
              >
                <div css={[TagCss]}>星座占卜</div>
              </div>
              <div
                className="data-box"
                css={css`
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 20px;
                  /* identical to box height */

                  letter-spacing: 0.05em;
                  text-transform: uppercase;

                  /* font-80 */

                  color: #a2938e;
                `}
              >
                2022/12/12
              </div>
            </div>
            <div
              className="content"
              css={css`
                font-family: "Noto Sans TC";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                letter-spacing: 0.03em;
                text-transform: uppercase;
                color: #54433d;
                & p {
                  margin: 2em 0;
                }
              `}
            >
              <p>
                成年人的生活是沒有容易二字的，更多的是咬牙堅持。每個人的一生都有自己的執著，有他們珍惜且看重的東西，或許這個東西很平凡，也很普通，但在他們眼裡卻是無價之寶，不管前路如何艱難困苦，無論如何都是不能捨棄的。這些東西可能是名利，可能是金錢，亦或是自身修養。
              </p>
              <p>
                俗話說，捨得捨得，有捨才有得，在這個現實的社會誰不是在一邊擁有一邊失去呢？每一個人都有自己無法拋棄的東西，這些東西會給他們的生活帶來非同一般的意義。也正因為每個人內心在乎的不一樣，所以無法放棄的也都是不一樣的，下面一起來揭密12星座男有哪些東西不願放棄吧？
              </p>
              <p>
                延伸閱讀：占星一點都不難：西洋占星學入門與進階的知識與秘笈都在這一篇！
              </p>
              <br />
              <p>
                牡羊男不願意放棄的東西，是什麼呢？
                <br />
                <br />
                在「自我」尚未確立前，牡羊座的特質是沒有「別人」存在的，坦率、純真、直接、毫無保留，完全不在乎外界的眼光，其勇氣與熱情是完全不需要任何理由，探索任何未知的人、事、物，其潛意識裡真正的動機就是要反向確立「我是誰」，並將自我逐步推進新世界，但過於熱衷自我的追尋卻容易產生莽撞、粗心、自私、堅持己見、忽略週遭人事物的潛藏危機，這些負面特質使牡羊座容易與外界環境產生衝撞、爭執、破壞、殲滅、戰爭以及傷害。
                <br />
                <br />
                當「物質慾望」被滿足時，此滿足感將形成金牛座安全感與安定感的來源，進而顯現出穩定、安靜、優雅、享受等特質，然而當「物質慾望」無法被滿足時，那種內心的不安及焦慮便形成金牛座急於為了獲取滿足而努力工作或積極理財的行為動機，從另一個層面來說，若當金牛座的物質被「過度滿足」時，便會顯現出紙醉金迷、安逸享樂、自我放縱、緩慢而懶散。
                <br />
              </p>
              <p>
                雖然金牛男是屬於比較保守的星座，他們喜歡穩定踏實，性格也屬於慢熱的一種，又有點固執己見，從來都是他們去鎮住一切，一般人是無法馴服他們的。他們最不願放棄的東西是源源不斷的金錢，如果沒有了獨立的經濟來源，他們就像是失去了物質保障一樣，因此對於金牛座男生來說經濟獨立是非常重要的，那就是他們的安全感來源啊！
              </p>
              <br />
            </div>
            <div className="article-info"></div>
          </div>
        </LayoutContent>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    spread: state.spread,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSpreadId: bindActionCreators(setSpreadId, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
