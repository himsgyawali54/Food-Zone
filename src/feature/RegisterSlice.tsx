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
  user: RegisterFormInputs[] | null;
  isAuthenticated: boolean;
}
const initialState: RForm = {
  user: [],
  isAuthenticated: false,
};
export const registerSlice = createSlice({
  initialState,
  name: "register",
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setUser, logout } = registerSlice.actions;

// export const selectUser = (state) => state.register.user;
// export const selectIsAuthenticated = (state) => state.register.isAuthenticated;

export default registerSlice.reducer;
