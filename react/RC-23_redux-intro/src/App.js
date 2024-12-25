import React from "react";
import Counter from "./components/counter/Counter";
import "./App.css";
import Todo from "./components/todo/Todo";

const App = () => {
  return (
    <div className="app">
      <Counter />
      {/* <Todo /> */}
    </div>
  );
};

export default App;
