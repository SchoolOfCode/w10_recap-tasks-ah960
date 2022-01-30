import "./App.css";
import articles from "../../libs/articles";
import Header from "../Header";
import ArticleList from "../ArticleList";
function App() {
  return (
    <main className="App">
      <Header />
      <ArticleList articles={articles} />
    </main>
  );
}

export default App;
