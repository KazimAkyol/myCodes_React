import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <MyNavbar />

      <Slider />
    </div>
  );
};

export default App;
