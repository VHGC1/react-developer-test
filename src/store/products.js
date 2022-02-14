import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },

  reducers: {
    fetchStarted(state) {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchProducts = (query) => async (dispatch) => {
  dispatch(fetchStarted());
  try {
    const response = await fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: query }),
    });
    const data = await response.json();
    if (data.errors) throw new Error(JSON.stringify(data.errors[0].message));
    const { products } = data.data.category;
    return dispatch(fetchSuccess(products));
  } catch (error) {
    return dispatch(fetchError(error.message));
  }
};

export default slice.reducer;
