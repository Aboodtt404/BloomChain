import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Settings, Gamepad2, Trophy, Wallet, LogOut, ArrowLeft } from 'lucide-react';
import { GardenSection } from './GardenSection';

interface ProfilePageProps {
  onBackToLanding: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBackToLanding }) => {
  const { user, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      onBackToLanding();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const formatPrincipal = (principal: string) => {
    return `${principal.slice(0, 8)}...${principal.slice(-8)}`;
  };

  return (
    <GardenSection theme="spring" intensity="medium" showBorder={true} showFlowers={true}>
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBackToLanding}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Landing</span>
            </button>
            <h1 className="text-3xl font-bold text-gradient-green">Player Profile</h1>
          </div>

          {/* Profile Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 shadow-2xl">
            {/* User Info */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">BloomChain Player</h2>
                <p className="text-gray-400 font-mono text-sm">
                  {user?.principal ? formatPrincipal(user.principal) : 'Unknown'}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Online</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-700/50 rounded-xl p-6 text-center border border-gray-600/30">
                <div className="w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-golden-400" />
                </div>
                <div className="text-2xl font-bold text-golden-400">0</div>
                <div className="text-gray-400 text-sm">Games Won</div>
              </div>

              <div className="bg-gray-700/50 rounded-xl p-6 text-center border border-gray-600/30">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-emerald-400">0</div>
                <div className="text-gray-400 text-sm">Games Played</div>
              </div>

              <div className="bg-gray-700/50 rounded-xl p-6 text-center border border-gray-600/30">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">0</div>
                <div className="text-gray-400 text-sm">ICP Earned</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button className="bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-xl p-4 text-left transition-all hover:scale-105">
                <div className="flex items-center space-x-3">
                  <Settings className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="font-semibold text-white">Game Settings</div>
                    <div className="text-sm text-gray-400">Customize your experience</div>
                  </div>
                </div>
              </button>

              <button className="bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-xl p-4 text-left transition-all hover:scale-105">
                <div className="flex items-center space-x-3">
                  <Wallet className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="font-semibold text-white">Wallet</div>
                    <div className="text-sm text-gray-400">Manage your assets</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Logout Button */}
            <div className="border-t border-gray-600/30 pt-6">
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-xl p-4 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-3">
                  <LogOut className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold">
                    {isLoggingOut ? 'Logging Out...' : 'Logout'}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GardenSection>
  );
};

export default ProfilePage;
