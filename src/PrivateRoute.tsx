import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { UserState } from "./feature/UserSlice";

const PrivateRoute = () => {
  console.log("hello");
  const isAuthenticated = useSelector(
    (state: any) => state.userAuth.isAuthenticated
  );

  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
