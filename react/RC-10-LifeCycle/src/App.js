import React, { useState } from "react";
import "./App.css";
import Selamlama from "./components/Selamlama";
import LifeCycle from "./components/LifeCycle";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Selamlama isim="Life Cycle" />

      <button className="btn btn-danger" onClick={() => setShow(!show)}>
        SHOW
      </button>

      {show && <LifeCycle />}
    </div>
  );
}

export default App;
