import { useState } from "react";
import "./App.css";
import HoverFocus from "./components/HoverFocus";
import Navbar from "./components/Navbar";
import Responsive from "./components/Responsive";
import Sizing from "./components/Sizing";
import Typograghy from "./components/Typograghy";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      {/* <Typograghy /> */}

      {/* <Sizing /> */}

      {/* <HoverFocus /> */}

      {/* <Responsive /> */}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
