import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, firmSuccess } from "../features/stockSlice";
import axios from "axios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getFirm = async () => {
    dispatch(fetchStart());

    try {
      const { data } = await axios(`${BASE_URL}firms`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log(data);
      dispatch(firmSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getFirm };
};

export default useStockCall;
