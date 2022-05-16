/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

const PostCard = ({ link }) => {
  return (
    <Link href={link}>
      <div
        css={css`
          position: relative;
          flex: 1;
          cursor: pointer;

          @media (min-width: 577px) {
            &:nth-child(2n-1) {
              margin-top: 10vh;
            }
            &:nth-child(2n) {
              margin-right: 4vw;
              margin-left: 4vw;
            }
            &:hover {
              .cover-mask {
                opacity: 1;
              }
            }
          }

          @media (max-width: 576px) {
            margin: 40px 0;
            display: flex;
          }
        `}
      >
        <div
          className="cover-box"
          css={css`
            position: relative;
            padding-top: 128%;
            border-radius: 5px;
            overflow: hidden;
            background-image: url(/images/post-example.jpeg);
            background-size: cover;

            @media (max-width: 576px) {
              /* display: inline-block; */
              width: 100px;
              height: 100px;
              padding-top: 0;
              /* padding-top: 100%; */
            }
          `}
        >
          <div
            className="cover-mask"
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              transition: all 0.8s;
              background: rgba(38, 17, 10, 0.35);
              padding: 13px;
              opacity: 0;
            `}
          >
            <div
              css={css`
                position: relative;
                width: 100%;
                height: 100%;
                padding: 20% 15%;
                font-weight: 400;
                font-size: 14px;
                line-height: 27px;
                letter-spacing: 0.04em;
                color: #ffffff;
                border: 1px solid #ffffff;
                display: flex;
                justify-content: center;
                flex-direction: column;
              `}
            >
              <div
                css={css`
                  text-align: center;
                  margin-bottom: 18px;
                `}
              >
                <img src="/images/bubble1.png" alt="bubble" />
              </div>
              <div
                css={css`
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                `}
              >
                塔羅牌占卜是個活生生的系統，能夠創造性地適應你獨特的需求。你所需要的僅僅是一顆開放的心和及真誠的願望，去尋求你生命中反映在塔羅圖像上潛藏的深層實相...
              </div>
            </div>
          </div>
          <div
            css={css`
              position: absolute;
              bottom: 20px;
              padding: 10px 10px 10px 5px;
              border-radius: 0px 5px 5px 0px;
              background-color: white;
              -webkit-writing-mode: vertical-lr;
              writing-mode: vertical-lr;
              @media (max-width: 576px) {
                display: none;
              }
              &:before {
                content: "塔羅秘笈";
                /* height: auto; */
                background: linear-gradient(
                  216.07deg,
                  #ff9999 2.53%,
                  #ffcea0 73.5%,
                  #ffe5a0 99.86%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              }
            `}
          ></div>
        </div>
        <div
          css={css`
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #48381d;
            margin-top: 17px;

            @media (max-width: 576px) {
              /* display: inline-block; */
              flex: 1;
              margin-left: 20px;
              margin-top: 0px;
              text-align: left;
            }
          `}
        >
          想知道塔羅牌的「逆位」如何解釋嗎？學習塔羅的 5 大常...
          <div
            css={css`
              @media (min-width: 577px) {
                display: none;
              }
              position: absolute;
              background: linear-gradient(
                216.07deg,
                #ff9999 2.53%,
                #ffcea0 73.5%,
                #ffe5a0 99.86%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
              bottom: 0;

              &:before {
                content: "";
                position: relative;
                display: inline-block;
                margin-right: 5px;
                width: 3px;
                height: 17px;
                top: 1.5px;
                background: #ff9b7e;
              }
            `}
          >
            塔羅秘笈
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
