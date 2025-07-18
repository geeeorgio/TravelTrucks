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

const campersPersistConfig = {
  key: "campers",
  storage,
};

const detailsPersistConfig = {
  key: "details",
  storage,
};

const persistedAllCampersReducer = persistReducer(
  campersPersistConfig,
  campersReducer
);
const persistedSelectedCampersReducer = persistReducer(
  detailsPersistConfig,
  detailsReducer
);

const store = configureStore({
  reducer: {
    campers: persistedAllCampersReducer,
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
