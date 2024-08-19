import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 20,
  // user: {
  //   name: null,
  //   email: null,
  // },
  // token: null,
  // isLoggedIn: false,
  // isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + 1;
    },
  },
});
export const authReducer = slice.reducer;
export const { incrementCount } = slice.actions;
