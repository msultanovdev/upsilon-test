import { createSlice } from "@reduxjs/toolkit";
import { IDBProduct } from "../../types/types";
import { getLocal, setLocal } from "../../utils/helpers";
type productSliceType = {
  products: IDBProduct[];
};

const initialState: productSliceType = {
  products: getLocal("products") ?? [],
};

export const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {
    addProduct(state, action) {
      state = { ...state, products: [...state.products, action.payload] };
      setLocal("products", JSON.stringify(state.products));
      return state;
    },
    updateProducts(state, action) {
      state = { ...state, products: action.payload };
      setLocal("products", JSON.stringify(state.products));
      return state;
    },
    removeProductById(state, action) {
      const confirmed = window.confirm("Are you sure to remove this product?");
      if (confirmed) {
        const updatedProducts = state.products.filter(
          (product) => product.id !== action.payload,
        );
        setLocal("products", JSON.stringify(updatedProducts));
        state = { ...state, products: updatedProducts };
      }
      return state;
    },
  },
});

export const { actions: dbActions, reducer: dbReducer } = dbSlice;
export default dbReducer;
