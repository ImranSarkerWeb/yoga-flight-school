/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
