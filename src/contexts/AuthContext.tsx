
import { jwtDecode } from 'jwt-decode';
import React, {  useState, useEffect, createContext } from 'react';
import { TokenUser } from '../models/token/TokenUser';

const AuthContext = createContext({})

type Props = {
  children:any
}
export const AuthProvider = (props: Props) => {
  const getInitialUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<TokenUser>(token);
        return {
          isAuthenticated: true,
          user: {
            firstname: decoded.firstname,
            phoneNumber: decoded.phoneNumber,
            lastname: decoded.lastname,
          },
          role: decoded.role,
        };
      } catch (error) {
        console.error('Invalid token', error);
      }
    }
    return {
      isAuthenticated: false,
      user: null,
      role: '',
    };
  };
  const [authInformation, setAuthInformation] = useState(getInitialUser());


  /*const hasPermission = (role: string) => {
    return authInformation.role === role;
  };*/

  const refreshUser = () => {
    const user = getInitialUser();
    setAuthInformation(user);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authInformation,refreshUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};






















// import { createContext, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = (props: any) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;