import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="" element={""} />
          <Route path="" element={""} />
          <Route path="" element={""} />
          <Route path="" element={""} />
          <Route path="" element={""} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
