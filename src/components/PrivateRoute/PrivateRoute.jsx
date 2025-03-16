import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedUserIn = useSelector(selectIsLoggedIn);

  return isLoggedUserIn ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
