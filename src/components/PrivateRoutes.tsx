import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";
import { LocalRoutes } from "../utils";

function PrivateRoute({ isAuthRoute }: { isAuthRoute?: Boolean }) {
  const location = useLocation();
  const { token } = useAuth();
  if (isAuthRoute)
    return token ? <Navigate to={LocalRoutes.PROFILE} /> : <Outlet />;
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={LocalRoutes.LOGIN} state={{ from: location }} replace />
  );
}

export { PrivateRoute };
