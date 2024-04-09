import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Assets
import { BASE_URL } from "../constants/endpoint";
// Store
// import { logOut } from "../features/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const writerUserInfo = localStorage.getItem("writerUserInfo");
    const token = writerUserInfo
      ? JSON.parse(writerUserInfo ?? "")?.token
      : null;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    // Log out the user
    // api.dispatch(logOut());
    // Optionally, clear local storage
    localStorage.clear();
  }

  return result;
};

export const apiSlice = createApi({
  tagTypes: ["userInfo"],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
