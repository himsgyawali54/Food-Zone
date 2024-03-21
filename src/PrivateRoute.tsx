import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { UserState } from "./feature/UserSlice";

const PrivateRoute = () => {
  console.log("hello");
  const Authenticated = useSelector(
    (state: { userAuth: UserState }) => state.userAuth.isAuthenticated
  );

  console.log(Authenticated);

  return Authenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
