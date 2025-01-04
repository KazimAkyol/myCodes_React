import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",

  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    olusturKullanici: (state, { payload }) => {},
  },
});

export const { olusturKullanici } = yetkiSlice.actions;

export default yetkiSlice.reducer;
