import { configureStore } from "@reduxjs/toolkit";
import { fooditemsApi } from "../Api/Api";

export const store = configureStore({
  reducer: {
    [fooditemsApi.reducerPath]: fooditemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fooditemsApi.middleware),
});
