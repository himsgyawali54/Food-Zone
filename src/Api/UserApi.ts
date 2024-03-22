import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Helper function to get the stored token
const getToken = () => localStorage.getItem("token");

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
    prepareHeaders: (headers) => {
      // Add authorization header with JWT token if available
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
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
  }),
});

export const { useCreateUserMutation } = userAuthApi;
