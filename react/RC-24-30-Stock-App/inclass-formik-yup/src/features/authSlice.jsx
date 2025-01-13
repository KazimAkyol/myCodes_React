import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    error: false,
    currentUser: null,
    token: null,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, { payload }) => {
      console.log(payload);
      state.currentUser = payload.data.username;
      state.token = payload.token;
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      console.log(payload);
      state.currentUser = payload?.user?.username;
      state.token = payload?.token;
      state.loading = false;
      state.isAdmin = payload?.user?.isAdmin;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.token = null;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
