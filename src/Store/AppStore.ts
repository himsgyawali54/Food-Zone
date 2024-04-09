import { configureStore, combineReducers } from "@reduxjs/toolkit";
import foodItemsReducer from "../feature/AppReducer";
import { userApi } from "../Api/UserApi";
import loginuserReducer from "../feature/UserSlice";
import registerReducer from "../feature/RegisterSlice";

const rootReducer = combineReducers({
  foodItems: foodItemsReducer,
  loginUser: loginuserReducer,
  register: registerReducer,

  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
