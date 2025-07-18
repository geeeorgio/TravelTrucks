import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { selectCamperById } from "./operations";

const initialState = {
  item: null,
  favorite: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      const isFavorite = state.favorite.some(
        (camper) => camper.id === payload.id
      );
      if (!isFavorite) {
        state.favorite.push(payload);
      }
    },
    removeFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter((camper) => camper.id !== payload);
    },
  },
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

export const { addFavorite, removeFavorite } = slice.actions;
export const detailsReducer = slice.reducer;
