import ArticleItem from "../ArticleItem";
function ArticleList({ articles }) {
  return (
    <div>
      <ArticleItem articles={articles} />
    </div>
  );
}

export default ArticleList;
