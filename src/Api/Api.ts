import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fooditemsApi = createApi({
  reducerPath: "fooditemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3031/" }),
  endpoints: (builder) => ({
    getFoodItems: builder.query({
      query: () => "foodItems",
    }),
  }),
});

export const { useGetFoodItemsQuery } = fooditemsApi;
