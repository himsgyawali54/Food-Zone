import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  FoodItems: [],
  error: null,
};
export const foodItemsDetails = createAsyncThunk(
  "foodItemsDetail",
  async () => {
    await axios.get("http://localhost:3031/foodItems").then((response) => {
      return response.data;
    });
  }
);

export const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState,
  extraReducers: {
    [foodItemsDetails.pending]: (state) => {
      state.loading = true;
    },
    [foodItemsDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.FoodItems = action.payload;
      state.error = "";
    },
    [foodItemsDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default foodItemsSlice.reducer;
