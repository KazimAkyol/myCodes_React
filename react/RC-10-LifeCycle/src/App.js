import React from "react";
import "./App.css";
import Selamlama from "./components/Selamlama";
import LifeCycle from "./components/LifeCycle";

function App() {
  return (
    <div className="App">
      <Selamlama isim="Gökhan" />

      <LifeCycle />
    </div>
  );
}

export default App;
