import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Loader2, LogIn, LogOut, User } from 'lucide-react';

interface AuthButtonProps {
  className?: string;
  showPrincipal?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ 
  className = '',
  showPrincipal = false 
}) => {
  const { isAuthenticated, login, logout, principal, isLoading } = useAuth();

  const handleAuth = async () => {
    if (isAuthenticated) {
      await logout();
    } else {
      await login();
    }
  };

  const formatPrincipal = (principal: any) => {
    if (!principal) return '';
    const principalStr = principal.toString();
    return `${principalStr.slice(0, 5)}...${principalStr.slice(-5)}`;
  };

  if (isLoading) {
    return (
      <button 
        disabled
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed ${className}`}
      >
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading...
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {isAuthenticated && showPrincipal && (
        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg text-sm">
          <User className="w-4 h-4 text-blue-600" />
          <span className="text-blue-800 font-mono">
            {formatPrincipal(principal)}
          </span>
        </div>
      )}
      
      <button
        onClick={handleAuth}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
          ${isAuthenticated 
            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
          } ${className}`}
      >
        {isAuthenticated ? (
          <>
            <LogOut className="w-4 h-4" />
            Logout
          </>
        ) : (
          <>
            <LogIn className="w-4 h-4" />
            Login with Internet Identity
          </>
        )}
      </button>
    </div>
  );
}; 