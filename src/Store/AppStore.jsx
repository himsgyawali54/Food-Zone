import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import foodItemsReducer from "../feature/AppReducer.jsx"

const store = configureStore({
  reducer: foodItemsReducer,
});

export default store;
