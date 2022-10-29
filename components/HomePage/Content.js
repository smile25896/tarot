/** @jsxImportSource @emotion/react */
import HomeBg from "./HomeBg";
import Opening from "./Opening";
import Cover from "./Cover";
import Article from "./Article";

export default function Content({ left, top, roundTranslate }) {
  return (
    <div>
      <Opening />
      <HomeBg roundTranslate={roundTranslate} />
      <Cover left={left} top={top} />
      <Article />
    </div>
  );
}
