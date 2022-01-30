import LikeButton from "../LikeButton";
import CommentsItem from "../CommentsItem";
import ArticleItem from "../ArticleItem";
function ArticleList({ articles }) {
  return (
    <div>
      <div>hello im the article list</div>
      <ArticleItem articles={articles} />
      <LikeButton />
      <CommentsItem />
    </div>
  );
}

export default ArticleList;
