import React from "react";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { axiosWithToken } = useAxios();

  /* -------------------------------------------------------------------------- */
  //   const getFirm = async () => {
  //     dispatch(fetchStart());

  //     try {
  //       const { data } = await axios(`${BASE_URL}firms`, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       });

  //       console.log(data);
  //       dispatch(firmSuccess(data))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  // /* -------------------------------------------------------------------------- */
  // const getBrands = async () => {
  //     dispatch(fetchStart());

  //     try {
  //       const { data } = await axios(`${BASE_URL}brands`, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       });

  //       console.log(data);
  //       dispatch(brandSuccess(data))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };

  //   Bu şekilde her sayfa için ayrı bir fonksiyon yazmak yerine DRY (don't repeat yourself) gereği tek bir fonksiyon yazıyoruz.
  //   Bu nedenle getFirm ve getBrand fonksiyonlarını kullanmayıp getStockData'yı kullanacağız.
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               GETSTOCK DATA                                */
  /* -------------------------------------------------------------------------- */

  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(stockSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                 DELETE DATA                                */
  /* -------------------------------------------------------------------------- */

  const getDeleteData = async (url, id) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                 ADD NEW                                    */
  /* -------------------------------------------------------------------------- */

  const postStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.post(`${url}`, info);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                 UPDATE DATA                                */
  /* -------------------------------------------------------------------------- */

  const putStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.post(`${url}${info._id}`, info);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getStockData, getDeleteData, postStockData, putStockData };
};

export default useStockCall;
