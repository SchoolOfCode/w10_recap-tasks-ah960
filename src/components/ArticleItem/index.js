function ArticleItem({ articles }) {
  return (
    <div>
      {articles.map((article) => {
        return (
          <article key={article.id} className="post">
            <h2>{article.title}</h2>
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <button className="like-button">Like 👍</button>
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
