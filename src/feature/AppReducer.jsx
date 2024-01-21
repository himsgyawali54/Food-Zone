import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FoodItems: [],
  isLoading: false,
};

export const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setFoodItems: (state, action) => {
      state.FoodItems = action.payload;
      state.isLoading = false;
    },
  },
});
export const { startLoading, setFoodItems } = foodItemsSlice.actions;
export default foodItemsSlice.reducer;
