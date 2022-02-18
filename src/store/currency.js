import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "currency",
  initialState: {
    currencySelectorExpanded: false,
    selectedCurrency: null
  },
  reducers: {
    expandCurrencySelector(state) {
      state.currencySelectorExpanded = true;
    },
    retractCurrencySelector(state) {
      state.currencySelectorExpanded = false
    },
  }
})

export const {expandCurrencySelector, retractCurrencySelector} = slice.actions;

export default slice.reducer;