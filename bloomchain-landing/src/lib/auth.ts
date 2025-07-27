import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';

// Canister IDs - these will be set from environment variables
const INTERNET_IDENTITY_URL = import.meta.env.MODE === 'development' 
  ? `http://localhost:4943/?canisterId=${import.meta.env.VITE_INTERNET_IDENTITY_CANISTER_ID || 'rdmx6-jaaaa-aaaaa-aaadq-cai'}`
  : 'https://identity.ic0.app';

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  identity: any;
  principal: Principal | null;
  authClient: AuthClient | null;
  isLoading: boolean;
}

let authClient: AuthClient | null = null;

export const getAuthClient = async (): Promise<AuthClient> => {
  if (!authClient) {
    authClient = await AuthClient.create({
      idleOptions: {
        idleTimeout: 1000 * 60 * 30, // 30 minutes
        disableDefaultIdleCallback: true,
      },
    });
  }
  return authClient;
};

export const login = async (): Promise<boolean> => {
  const client = await getAuthClient();
  
  return new Promise((resolve) => {
    client.login({
      identityProvider: INTERNET_IDENTITY_URL,
      onSuccess: () => resolve(true),
      onError: (error) => {
        console.error('Login error:', error);
        resolve(false);
      },
    });
  });
};

export const logout = async (): Promise<void> => {
  const client = await getAuthClient();
  await client.logout();
};

export const isAuthenticated = async (): Promise<boolean> => {
  const client = await getAuthClient();
  return await client.isAuthenticated();
};

export const getIdentity = async () => {
  const client = await getAuthClient();
  return client.getIdentity();
};

export const getPrincipal = async (): Promise<Principal> => {
  const identity = await getIdentity();
  return identity.getPrincipal();
};

// Create an actor for the backend canister
export const createActor = async (canisterId: string, idlFactory: any) => {
  const identity = await getIdentity();
  const agent = new HttpAgent({
    host: import.meta.env.MODE === 'development' ? 'http://localhost:4943' : 'https://ic0.app',
    identity,
  });

  // Fetch root key for certificate validation during development
  if (import.meta.env.MODE === 'development') {
    agent.fetchRootKey().catch(console.error);
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
}; 