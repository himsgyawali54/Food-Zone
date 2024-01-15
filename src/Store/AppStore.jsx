import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import foodItemsReducer from "../feature/AppReducer";

const store = configureStore({
  reducer: {
    foodItems: foodItemsReducer,
  },
});

export default store;
