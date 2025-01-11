import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";

const useAuthCall = () => {
  const dispatch = useDispatch();

  //! Custom hook yazma kuralları:
  //? 1- use kelimesi ile başlar
  //? 2- return de { fonksiyonlar }, değişkense [ bilgiler ] gönderilmeli
  //? 3- Çağrılacağı noktada const {register}=useAuthCall() seklinde tanimlanir.

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://10102.fullstack.clarusway.com/users",
        userInfo
      );
      console.log("register icinde", data);
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register };
};

export default useAuthCall;
