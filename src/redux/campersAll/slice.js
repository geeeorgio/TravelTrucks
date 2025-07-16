import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";

const initialState = {
  items: [],
  total: null,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.items;
        state.total = payload.total;
      })

      .addMatcher(
        isAnyOf(getAllCampers.pending, (state) => {
          state.isError = false;
          state.isLoading = true;
        })
      )

      .addMatcher(
        isAnyOf(getAllCampers.rejected, (state) => {
          state.isError = true;
          state.isLoading = false;
        })
      );
  },
});

export const campersReducer = slice.reducer;
