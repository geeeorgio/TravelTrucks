import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCampers, getLimitedListOfCampers } from "./operations";

const initialState = {
  items: [],
  paginated: [],
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
      .addCase(getLimitedListOfCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.paginated = payload.items;

        const newItems = payload.items.filter(
          (camper) => !state.items.some((existing) => existing.id === camper.id)
        );
        state.items.push(...newItems);

        state.total = payload.total;
      })

      .addMatcher(
        isAnyOf(getAllCampers.pending, getLimitedListOfCampers.pending),
        (state) => {
          state.isError = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getAllCampers.rejected, getLimitedListOfCampers.rejected),
        (state) => {
          state.isError = true;
          state.isLoading = false;
        }
      );
  },
});

export const campersReducer = slice.reducer;
