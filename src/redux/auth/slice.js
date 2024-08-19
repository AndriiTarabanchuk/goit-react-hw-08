import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 20,
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const handlePending = (state) => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
};
const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.user = action.payload.user;
        state.user.email = action.payload.email;
        state.isRefreshing = false;
      })
      .addCase(registerThunk.pending, handlePending)
      .addCase(loginThunk.pending, handlePending)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(getMeThunk.pending, handlePending);
  },
});
export const authReducer = slice.reducer;
export const { incrementCount } = slice.actions;
