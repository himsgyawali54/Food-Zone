import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FoodItems: [],
};

export const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    setFoodItems: (state, action) => {
      state.FoodItems = action.payload;
    },
  },
});
export const { setFoodItems } = foodItemsSlice.actions;
export default foodItemsSlice.reducer;
