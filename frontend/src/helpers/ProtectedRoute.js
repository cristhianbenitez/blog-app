import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (user.token === 'undefined') {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
