import React from "react";

const useAxios = () => {
  const axiosWithToken = axios.create({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Token ${token},`,
    },
  });

  return { axiosWithToken };
};

export default useAxios;
