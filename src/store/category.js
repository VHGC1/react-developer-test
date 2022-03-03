import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = slice.actions;

export default slice.reducer;
