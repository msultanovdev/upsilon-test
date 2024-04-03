import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./reducers/productSlice";
import { productsAPI } from "../services/ProductService";

const rootReducer = combineReducers({
  productSlice,
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
