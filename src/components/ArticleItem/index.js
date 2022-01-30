import css from "./app.module.css";
import LikeButton from "../LikeButton";

function ArticleItem({ articles }) {
  return (
    <div className={css.articleItem}>
      {articles.map((article) => {
        return (
          <article key={article.id} className="post">
            <h2>{article.title}</h2>
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <LikeButton />
            <section className="comment-section">
              {article.comments.map((comment) => {
                return (
                  <div key={comment.id} className="comment">
                    <h4>{comment.name} says:</h4>
                    <p>{comment.text}</p>
                  </div>
                );
              })}
            </section>
          </article>
        );
      })}
    </div>
  );
}

export default ArticleItem;
