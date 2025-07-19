import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campersAll/slice";
import { detailsReducer } from "./camperSelected/slice";

const detailsPersistConfig = {
  key: "details",
  storage,
  whitelist: "favorite",
};

const persistedSelectedCampersReducer = persistReducer(
  detailsPersistConfig,
  detailsReducer
);

const store = configureStore({
  reducer: {
    campers: campersReducer,
    details: persistedSelectedCampersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
