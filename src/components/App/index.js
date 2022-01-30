import css from "./app.module.css";
import articles from "../../libs/articles";
import Header from "../Header";
import ArticleList from "../ArticleList";
function App() {
  return (
    <main className={css.app}>
      <Header />
      <ArticleList articles={articles} />
    </main>
  );
}

export default App;
