import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { TokenUser } from '../models/token/TokenUser';
import { UserAuthModel } from '../models/user/UserAuth';
import TokenService from '../services/TokenService';

interface AuthContextProps {
  authInformation: UserAuthModel;
  hasPermission: (role: string) => boolean;
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const getInitialUser = (): UserAuthModel => {
    const token = TokenService.getToken()
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
        console.log('Invalid token', error);
      }
    }
    return {
      isAuthenticated: false,
      user: {
        firstname:'',
        phoneNumber: '',
        lastname: '',

      },
      role: '',
    };
  };
  const [authInformation, setAuthInformation] = useState<UserAuthModel>(getInitialUser());

  const hasPermission = (role: string): boolean => {
    return authInformation.role === role;
  };

  const refreshUser = (): void => {
    const user = getInitialUser();
    setAuthInformation(user);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const contextValue: AuthContextProps = {
    authInformation,
    hasPermission,
    refreshUser,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
