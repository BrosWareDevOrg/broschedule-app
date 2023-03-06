import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  //This conditional should be from authentication prop or validation block
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRoute;
