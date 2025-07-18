import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCampers, getCampersBySearchParams } from "./operations";

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
  reducers: {
    clearState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.items;
        state.total = payload.total;
      })
      .addCase(getCampersBySearchParams.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.paginated = payload.items;

        const newItems = payload.items.filter(
          (camper) => !state.items.some((existing) => existing.id === camper.id)
        );
        state.items.push(...newItems);

        state.total = payload.total;
      })

      .addMatcher(
        isAnyOf(getAllCampers.pending, getCampersBySearchParams.pending),
        (state) => {
          state.isError = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getAllCampers.rejected, getCampersBySearchParams.rejected),
        (state) => {
          state.isError = true;
          state.isLoading = false;
        }
      );
  },
});

export const { clearState } = slice.actions;
export const campersReducer = slice.reducer;
