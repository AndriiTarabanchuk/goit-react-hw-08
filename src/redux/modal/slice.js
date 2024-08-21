import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisibleModal: false,
  itemModal: {
    item: {},
    operation: "",
  },
};

const slice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModal: (state, actions) => {
      state.isVisibleModal = true;
      state.itemModal = actions.payload;
    },
    hideModal: (state, actions) => {
      state.isVisibleModal = false;
      state.itemModal = {};
    },
  },
});

export const modalReducer = slice.reducer;
export const { showModal, hideModal } = slice.actions;
