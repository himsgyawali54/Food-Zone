// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export interface RegisterFormInputs {
  firstName: string;
  lastName: string;

  email: string;

  password: string;
  confirmPassword: string;
  terms: boolean;
}
export interface RForm {
  user: RegisterFormInputs;
}
const initialState: RForm = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
