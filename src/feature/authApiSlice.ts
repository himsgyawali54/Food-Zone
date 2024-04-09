import {
  LOGIN_URL,
  LOGIN_WITH_GOOGLE,
  MEMBER_PASSWORD,
  REGISTER_URL,
  VERIFY_CODE,
} from "../constants/endpoint";
import { apiSlice } from "../Api/Api";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: REGISTER_URL,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApiSlice;
