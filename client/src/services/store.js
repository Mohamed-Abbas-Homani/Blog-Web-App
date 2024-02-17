import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE, 
  PERSIST,
  PURGE
} from "redux-persist";
import { appSlice } from "./state";

const persistConfig = {key: 'root', storage, version: 1};
const persistedReducer = persistReducer(persistConfig, appSlice);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE]
      },
    })
  
});

export default store