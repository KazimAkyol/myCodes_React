import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    firms: [],
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    firmSuccess: (state, { payload }) => {
      state.firms = payload.data;
      console.log(state.data);
    },
  },
});

export const { fetchStart, fetchFail, firmSuccess } = stockSlice.actions;

export default stockSlice.reducer;
