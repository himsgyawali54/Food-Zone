import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { fooditemsApi } from "../Api/Api";
import foodItemsReducer from "../feature/AppReducer";
import { userAuthApi } from "../Api/UserApi";
import loginuserReducer from "../feature/UserSlice";

const rootReducer = combineReducers({
  foodItems: foodItemsReducer,
  loginUser: loginuserReducer,
  [fooditemsApi.reducerPath]: fooditemsApi.reducer,
  [userAuthApi.reducerPath]: userAuthApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      fooditemsApi.middleware,
      userAuthApi.middleware
    ),
});
