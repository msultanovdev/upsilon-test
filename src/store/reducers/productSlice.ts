import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";
type productSliceType = {
  products: IProduct[];
};

const initialState: productSliceType = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state = { ...state, products: action.payload };
      return state;
    },
  },
});

export const { actions: productActions, reducer: productReducer } =
  productSlice;
export default productReducer;
