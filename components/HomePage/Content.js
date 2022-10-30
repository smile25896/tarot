/** @jsxImportSource @emotion/react */
import HomeBg from "./HomeBg";
import Opening from "./Opening";
import Cover from "./Cover";
import Article from "./Article";

export default function Content() {
  return (
    <div>
      <Opening />
      <HomeBg />
      <Cover />
      <Article />
    </div>
  );
}
