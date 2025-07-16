import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { selectCamperById } from "./operations";

const initialState = {
  item: null,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "details",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(selectCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })

      .addMatcher(
        isAnyOf(selectCamperById.pending, (state) => {
          state.isError = false;
          state.isLoading = true;
        })
      )

      .addMatcher(
        isAnyOf(selectCamperById.rejected, (state) => {
          state.isError = true;
          state.isLoading = false;
        })
      );
  },
});

export const detailsReducer = slice.reducer;
