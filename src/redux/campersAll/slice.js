import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCampers, getLimitedListOfCampers } from "./operations";

const initialState = {
  items: [],
  paginated: [],
  total: null,
  isLoading: false,
  isError: false,
  page: 1,
  limit: 4,
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
        state.items.push(...state.paginated);
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

export const { setPage } = slice.actions;
export const campersReducer = slice.reducer;
