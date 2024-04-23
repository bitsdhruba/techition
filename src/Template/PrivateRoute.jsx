import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loggedin } = useContext(AppContext);

  if (loggedin) {
    return children;
  } else {
    <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
