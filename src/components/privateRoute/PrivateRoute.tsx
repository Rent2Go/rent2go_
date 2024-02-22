import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

 // Auth context'inizi burada sağladığınızı varsayıyorum

interface PrivateRouteProps {
  path: string;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const auth = useAuth(); 
  if (!auth.authInformation.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;