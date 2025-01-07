import { createSlice } from "@reduxjs/toolkit";

export const haberSlice = createSlice({
  name: "haberSlice",

  initialState: {
    haberler: [],
    loading: true,
  },

  reducers: {
    temizle: (state, { payload }) => {},
  },
});

export const { temizle } = haberSlice.actions;

export default haberSlice.reducer;
