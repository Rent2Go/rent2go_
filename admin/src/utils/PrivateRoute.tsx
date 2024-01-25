import React from 'react'

import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';


type Props = {
    role:string,
    element:any


}

const PrivateRoute = (props: Props) => {
    const auth = useAuth();

    return auth.authInformation.isAuthenticated ? (
    props.element
    ) : (
      <Navigate to="/login" />
    );
  };
  


export default PrivateRoute