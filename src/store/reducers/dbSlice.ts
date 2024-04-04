import { createSlice } from "@reduxjs/toolkit";
import { IDBProduct } from "../../types/types";
type productSliceType = {
  products: IDBProduct[];
};

const initialState: productSliceType = {
  products: [],
};

export const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {
    addProduct(state, action) {
      state = { ...state, products: [...state.products, action.payload] };
      return state;
    },
    removeProductById(state, action) {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload,
      );
      state = { ...state, products: updatedProducts };
      return state;
    },
  },
});

export default dbSlice.reducer;
