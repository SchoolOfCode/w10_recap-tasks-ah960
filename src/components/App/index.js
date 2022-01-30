import css from "./app.module.css";
import articles from "../../libs/articles";
import Header from "../Header";
import ArticleList from "../ArticleList";
import LibDemo from "../LibDemo";
import LoginButton from "../LogInButton";
import LogoutButton from "../LogoutButton";
import React from "react";
import LogInContent from "../LogInContent";

function App() {
  return (
    <main className={css.app}>
      <Header />
      <LoginButton />
      <LogoutButton />
      <LogInContent />
      <ArticleList articles={articles} />
      <LibDemo />
    </main>
  );
}
export default App;
