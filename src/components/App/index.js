import "./App.css";
import articles from "../../libs/articles";
import Header from "../Header";
import ArticleList from "../ArticleList";
function App() {
  return (
    <main className="App">
      <Header />
      <ArticleList articles={articles} />
      <h1>PLACEHOLDER MY CODE ABOVE</h1>
    </main>
  );
}

export default App;
