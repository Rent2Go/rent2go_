import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router';


type Props = {
    role:string,
    element:any


}

const PrivateRoute = (props: Props) => {
    const auth = useAuth();

    return auth.authInformation.isAuthenticated ? (
    props.element
    ) : (
      <Navigate to="/sign-up" />
    );
  };
  


export default PrivateRoute