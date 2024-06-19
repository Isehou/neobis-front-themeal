import React from "react";
import Header from "./components/header/Header";
import AppRouter from "./AppRouter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages-wrapper">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
