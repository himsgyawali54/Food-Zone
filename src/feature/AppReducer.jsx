import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  FoodItems: [],
};
const foodItemsDetails = createAsyncThunk();

const foodItemsSlice = createSlice({
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
