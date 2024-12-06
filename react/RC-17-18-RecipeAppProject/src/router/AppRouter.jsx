import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

      
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
