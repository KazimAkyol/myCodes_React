import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",

  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    olusturKullanici: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
    },

    kullaniciSil: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { olusturKullanici, kullaniciSil } = yetkiSlice.actions;

export default yetkiSlice.reducer;
