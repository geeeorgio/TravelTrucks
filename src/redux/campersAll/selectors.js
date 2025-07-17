export const selectAllCampersList = (state) => state.campers.items;
export const selectPaginatedCampers = (state) => state.campers.paginated;
export const selectTotalCampersNumber = (state) => state.campers.total;
export const selectCampersIsLoading = (state) => state.campers.isLoading;
