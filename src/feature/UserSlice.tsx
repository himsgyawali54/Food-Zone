import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Users: [],
  isLoggedIn: false,
};
export const userAuthSlice = createSlice({
  name: "loginuser",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutsuccess: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const { loginSuccess, logoutsuccess } = userAuthSlice.actions;
export default userAuthSlice.reducer;
