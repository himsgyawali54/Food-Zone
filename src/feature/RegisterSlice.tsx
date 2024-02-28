// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender?: string | null;
  phonenumber?: string | null;
  address?: string | null;
  password: string;
  terms: boolean;
}
interface RForm {
  user: RegisterFormInputs;
}
const initialState: RForm = {
  user: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    phonenumber: "",
    address: "",
    password: "",
    terms: false,
  },
};

export const registerSlice = createSlice({
  initialState,
  name: "register",
  reducers: {
    setRegisterUser: (state, action) => {
      state.user = action.payload;
    },
    // logout: (state) => {
    //   state.isAuthenticated = false;
    // },
  },
});

export const { setRegisterUser } = registerSlice.actions;
// export const selectUser = (state: RootState) => state.register.user;
// export const selectIsAuthenticated = (state: RootState) =>
//   state.register.isAuthenticated;

export default registerSlice.reducer;
