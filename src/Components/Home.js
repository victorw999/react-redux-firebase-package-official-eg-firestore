import React from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

import "../css/App.css";

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>firestore demo</h2>
      </div>
      <div className="App-todos">
        <h4>Todos List</h4>
        <Todos />
        <NewTodo />
      </div>
    </div>
  );
}

export default Home;
