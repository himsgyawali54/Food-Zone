// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userAuthApi = createApi({
//   reducerPath: "userAuthApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
//   endpoints: (builder) => ({
//     createUser: builder.mutation({
//       query: (newUser) => ({
//         url: "users",
//         method: "POST",
//         body: newUser,
//       }),
//     }),
//   }),
// });
// export const { useCreateUserMutation } = userAuthApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Helper function to get the stored token
const getToken = () => localStorage.getItem("token");

export const userAuthApi = createApi({
  reducerPath: "userAuthApi", // Ensure this matches where you intend to mount the reducer in your Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
    prepareHeaders: (headers) => {
      // Add authorization header with JWT token if available
      const token = getToken();
      if (token) {
        return {
          ...headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ username, password }) => ({
        url: "login",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userAuthApi;
