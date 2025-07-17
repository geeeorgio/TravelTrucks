// redux/campersAll/selectors.js
import { createSelector } from "@reduxjs/toolkit";

export const selectAllCampersList = (state) => state.campers.items;
export const selectPaginatedCampers = (state) => state.campers.paginated;
export const selectTotalCampersNumber = (state) => state.campers.total;
export const selectCampersPage = (state) => state.campers.page;
export const selectCampersLimit = (state) => state.campers.limit;
export const selectCampersIsLoading = (state) => state.campers.isLoading;

export const selectIsAbleToLoad = createSelector(
  [selectTotalCampersNumber, selectPaginatedCampers, selectCampersIsLoading],
  (total, paginatedItems, isLoading) => {
    if (total === null && !isLoading) {
      return true;
    }

    return paginatedItems.length < total && !isLoading;
  }
);
