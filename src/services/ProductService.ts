import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/types";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], number>({
      query: (limit = 8) => ({
        url: "/products",
        params: {
          limit,
        },
      }),
    }),
    fetchOneProduct: build.query<IProduct, number | string>({
      query: (id: number | string) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});
