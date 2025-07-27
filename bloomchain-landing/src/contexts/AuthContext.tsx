import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Principal } from '@dfinity/principal';
import { AuthClient } from '@dfinity/auth-client';
import * as auth from '../lib/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  identity: any;
  principal: Principal | null;
  authClient: AuthClient | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [identity, setIdentity] = useState<any>(null);
  const [principal, setPrincipal] = useState<Principal | null>(null);
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const initAuth = async () => {
    try {
      setIsLoading(true);
      const client = await auth.getAuthClient();
      setAuthClient(client);
      
      const authenticated = await auth.isAuthenticated();
      setIsAuthenticated(authenticated);

      if (authenticated) {
        const userIdentity = await auth.getIdentity();
        const userPrincipal = await auth.getPrincipal();
        setIdentity(userIdentity);
        setPrincipal(userPrincipal);
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async () => {
    try {
      setIsLoading(true);
      const success = await auth.login();
      
      if (success) {
        const userIdentity = await auth.getIdentity();
        const userPrincipal = await auth.getPrincipal();
        setIdentity(userIdentity);
        setPrincipal(userPrincipal);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await auth.logout();
      setIsAuthenticated(false);
      setIdentity(null);
      setPrincipal(null);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const value: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    identity,
    principal,
    authClient,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 