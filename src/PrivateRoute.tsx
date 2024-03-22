import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "./Hook";

const PrivateRoute = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.loginUser.isAuthenticated
  );

  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
