import { GET_USER_INFO } from "../constants/endpoint";
// import { AuthInfoResponse } from "utils/types/api-response";
// Slice
import { apiSlice } from "./Api";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => GET_USER_INFO,
      providesTags: ["userInfo"],
    }),
  }),
});
export const { useGetMeQuery } = userApi;
