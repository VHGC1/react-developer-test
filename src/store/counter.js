import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementar(state) {
      state.value++
    },
    reduzir(state) {
      state.value--
    }
  },
});

export const {incrementar, reduzir} = slice.actions;

export default slice.reducer;