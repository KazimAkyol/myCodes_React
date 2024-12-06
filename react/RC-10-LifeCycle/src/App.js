import React, { useState } from "react";
import "./App.css";
import Selamlama from "./components/Selamlama";
import LifeCycle from "./components/LifeCycle";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Selamlama isim="Gökhan" />

      <button onClick={() => setShow(!show)}>SHOW</button>

      {show && <LifeCycle />}
    </div>
  );
}

export default App;
