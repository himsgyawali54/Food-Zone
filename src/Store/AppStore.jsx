import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { fooditemsApi } from "../Api/Api";
import foodItemsReducer from "../feature/AppReducer";
import { userAuthApi } from "../Api/UserApi";
import loginuserReducer from "../feature/UserSlice";

// const rootReducer = combineReducers({
//   foodItems: foodItemsReducer,
//   loginUser: loginuserReducer,
// });

export const store = configureStore({
  reducer: {
    // rootReducer,
    // [fooditemsApi.reducerPath]: fooditemsApi.reducer,
    // [userAuthApi.reducerPath]: userAuthApi.reducer,
    foodItems: foodItemsReducer,
    [fooditemsApi.reducerPath]: fooditemsApi.reducer,
    loginUser: loginuserReducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      fooditemsApi.middleware,
      userAuthApi.middleware
    ),
});
