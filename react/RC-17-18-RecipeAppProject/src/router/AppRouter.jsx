import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;