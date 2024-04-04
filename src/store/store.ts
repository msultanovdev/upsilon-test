import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productSlice";
import { productsAPI } from "../services/ProductService";
import { dbReducer } from "./reducers/dbSlice";

const rootReducer = combineReducers({
  productReducer,
  dbReducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productsAPI.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
