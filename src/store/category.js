import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "category",
  initialState: {
    categories: null,
    category: "",
  },
  reducers: {
    setCurrentCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setCurrentCategory } = slice.actions;

export default slice.reducer;
