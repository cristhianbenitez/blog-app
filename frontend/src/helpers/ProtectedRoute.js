import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user.token) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
