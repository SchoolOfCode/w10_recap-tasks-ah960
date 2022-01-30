import LikeButton from "../LikeButton";
import CommentsItem from "../CommentsItem";
import ArticleItem from "../ArticleItem";
function ArticleList({ articles }) {
  return (
    <div>
      <ArticleItem articles={articles} />
      <LikeButton />
    </div>
  );
}

export default ArticleList;
