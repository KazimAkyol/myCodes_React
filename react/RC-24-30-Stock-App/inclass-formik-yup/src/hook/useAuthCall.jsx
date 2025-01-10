import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";

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
      console.log(data);
    } catch (error) {
      dispatch(fetchFail);
    }
  };

  return <div>useAuthCall</div>;
};

export default useAuthCall;
