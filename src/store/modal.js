import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "count",
  initialState: {
    cartModal: false,
  },
  reducers: {
    openCartModal(state) {
      state.cartModal = true;
    },
    closeCartModal(state) {
      state.cartModal = false;
    },
  },
});

export const {openCartModal, closeCartModal} = slice.actions;

export default slice.reducer;