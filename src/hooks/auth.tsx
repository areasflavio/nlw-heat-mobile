import React, { createContext, useCallback, useContext, useState } from 'react';
import * as AuthSessions from 'expo-auth-session';

import { api } from '../services/api';

const CLIENT_ID = 'c305a0cdc51d49ce732b';
const SCOPE = 'read:user';

type User = {
  id: string;
  name: string;
  avatar_url: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthResponse = {
  token: string;
  user: User;
};

type HTTPAuthorizationResponse = {
  params: {
    code?: string;
  };
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const signIn = async () => {
    try {
      setIsSigningIn(true);

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

      const { params } = (await AuthSessions.startAsync({
        authUrl,
      })) as HTTPAuthorizationResponse;

      if (params && params.code) {
        const authResponse = await api.post('/authenticate', {
          code: params.code,
        });

        const { user, token } = authResponse.data as AuthResponse;

        console.log({ user, token });
      }

      setIsSigningIn(false);
    } catch (error) {
      console.log(error);
      setIsSigningIn(false);
    }
  };

  const signOut = async () => {
    //
  };

  return (
    <AuthContext.Provider
      value={{
        isSigningIn,
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuth, AuthProvider };
