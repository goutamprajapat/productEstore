//https://api.pujakaitem.com/api/Products
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.pujakaitem.com/api" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/Products`,
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
