import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { AuthClient } from '@dfinity/auth-client';

interface User {
  principal: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const authClient = await AuthClient.create();

      if (await authClient.isAuthenticated()) {
        const identity = authClient.getIdentity();
        setUser({
          principal: identity.getPrincipal().toString(),
          isAuthenticated: true,
        });
      }
    } catch (error) {
      console.error('Failed to initialize auth:', error);
    } finally {
      setIsLoading(false);
      setIsInitialized(true);
    }
  };

  const login = async () => {
    try {
      setIsLoading(true);
      const authClient = await AuthClient.create();

      await new Promise<void>((resolve, reject) => {
        authClient.login({
          identityProvider: import.meta.env.PROD
            ? 'https://identity.ic0.app'
            : 'http://127.0.0.1:4943/?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai',
          onSuccess: () => resolve(),
          onError: reject,
        });
      });

      const identity = authClient.getIdentity();
      setUser({
        principal: identity.getPrincipal().toString(),
        isAuthenticated: true,
      });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      const authClient = await AuthClient.create();
      await authClient.logout();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading,
    isInitialized,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 