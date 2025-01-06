import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { email, password } = useSelector((state) => state.yetkiSlice);

  //? yetkiSlice sayfasından kullanici dolu gelirse ve email=osman ise yönlendirilen sayfaya git

  return email === "osman" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
