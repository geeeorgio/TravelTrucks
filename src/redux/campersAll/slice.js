import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCampers, getCampersBySearchParams } from "./operations";

const initialState = {
  items: [],
  total: null,
  isLoading: false,
  isError: false,
  searchParams: "",
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
    setReduxSearchParams: (state, { payload }) => {
      state.searchParams = payload.toString();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.items;
        state.total = payload.total;
      })
      .addCase(
        getCampersBySearchParams.fulfilled,
        (state, { payload, meta }) => {
          state.isLoading = false;
          const { page } = meta.arg;

          if (page === 1) {
            state.items = payload.items;
          } else {
            const newItems = payload.items.filter(
              (item) => !state.items.some((camper) => camper.id === item.id)
            );
            state.items.push(...newItems);
          }
          state.total = payload.total;
        }
      )

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

export const { clearState, setReduxSearchParams } = slice.actions;
export const campersReducer = slice.reducer;
