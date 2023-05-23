import { Navigate } from "react-router-dom";

import { useStateContext } from "./ContextProvider";

const RequireAuth = ({ children }) => {
  const { user } = useStateContext();

  if (!user) {
    return <Navigate to="/login " />;
  }
  return children;
};

export default RequireAuth;
