import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
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
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import landingActive from "./reducers/landingActive";
import userSlice from "./reducers/userSclice";

const persistConfig = {
  key: "root",
  // 어디에 저장할건지(로컬스토리지로 설정함)
  storage,
  // 어떤 reducer를 로컬스토리지에 저장할건지
  whiteList: ["landingActive", "userSlice"],
};

// const rootReducer = combineReducers({
//   landingInfo: landingActive.reducer,
//   userInfo: userSlice.reducer,
// });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck : false
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
