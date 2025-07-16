import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersAll/slice";
import { detailsReducer } from "./camperSelected/slice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    details: detailsReducer,
  },
});

export { store };
