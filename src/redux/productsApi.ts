import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DummyResponse, Product } from "../types/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (build) => ({
    getProducts: build.query<DummyResponse, { limit?: number }>({
      query: ({ limit }) => `products/category/smartphones?limit=${limit || import.meta.env.VITE_LIMIT}&select=title,price,rating,thumbnail`,
    }),
    getProductById: build.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetProductsQuery } = productsApi;
