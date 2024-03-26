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
export interface RForm {
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
  },
});

export const { setRegisterUser } = registerSlice.actions;

export default registerSlice.reducer;
