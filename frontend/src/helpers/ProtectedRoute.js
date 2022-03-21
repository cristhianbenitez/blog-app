import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  const loggedUser = JSON.parse(localStorage.loggedUser);

  if (!user.token && !loggedUser.token) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
