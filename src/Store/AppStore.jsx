import { configureStore } from "@reduxjs/toolkit";
import { fooditemsApi } from "../Api/Api";
import foodItemsReducer from "../feature/AppReducer";

export const store = configureStore({
  reducer: {
    foodItems: foodItemsReducer,

    [fooditemsApi.reducerPath]: fooditemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fooditemsApi.middleware),
});
