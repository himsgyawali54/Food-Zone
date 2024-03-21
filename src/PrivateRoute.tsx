import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { UserState } from "./feature/UserSlice";

const PrivateRoute = () => {
  console.log("hello");
  const { userAuth } = useSelector((state: any) => state);
  const { isAuthenticated } = userAuth;

  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
