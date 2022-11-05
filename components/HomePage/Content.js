/** @jsxImportSource @emotion/react */
import HomeBg from "./HomeBg";
import Cover from "./Cover";
import Article from "./Article";

export default function Content({ isShowOpening }) {
  return (
    <div>
      <HomeBg />
      <Cover isShowOpening={isShowOpening} />
      <Article />
    </div>
  );
}
