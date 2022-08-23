import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "loader",
  initialState: {
    isShowLoader: false,
  },
  reducers: {
    showLoader: (state) => {
      state.isShowLoader = true;
    },
    hideLoader: (state) => {
      state.isShowLoader = false;
    },
  },
});

export const loaderActions = slice.actions;
export const loaderReducers = slice.reducer;
