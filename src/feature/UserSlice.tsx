import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Forminputs {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}
interface UserState {
  Users: Forminputs[];
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  Users: [],
  loading: false,
  error: null,
};
export const userAuthSlice = createSlice({
  name: "loginuser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Forminputs[]>) => {
      //yo reducer le jada naya user set hunxa taba state update garxa
      state.Users = action.payload; //payload ma vako data lai Users ma set garxa
      state.loading = false; // sets  loading property to false
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { setUser, setLoading, setError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
