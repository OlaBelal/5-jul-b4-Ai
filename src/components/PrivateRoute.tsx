
import { Navigate, useLocation } from "react-router-dom";
import { authService } from "../services/authService";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
