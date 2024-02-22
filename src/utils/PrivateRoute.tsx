import React, { ReactElement } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type Props = {
  element: ReactElement;
};

const PrivateRoute = (props: Props & RouteProps) => {
  const auth = useAuth();

  return auth.authInformation.isAuthenticated ? (
    props.element
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default PrivateRoute;
