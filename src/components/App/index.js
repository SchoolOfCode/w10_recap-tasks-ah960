import css from "./app.module.css";

import Header from "../Header";

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

      <LibDemo />
    </main>
  );
}
export default App;
