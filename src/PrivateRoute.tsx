import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { UserState } from "./feature/UserSlice";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(
    (state: { userAuth: UserState }) => state.userAuth.isAuthenticated
  );

  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
