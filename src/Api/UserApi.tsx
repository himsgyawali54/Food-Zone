import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.query({
      query: ({ username, password }) => ({
        url: `users?username=${username}&password=${password}`, // Assuming your API endpoint returns user data if authenticated
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateUserMutation, useLoginUserQuery } = userAuthApi;
