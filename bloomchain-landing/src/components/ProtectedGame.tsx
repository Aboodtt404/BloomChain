import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Gamepad2, Lock, User, LogIn, ArrowLeft } from 'lucide-react';
import { GardenSection } from './GardenSection';

interface ProtectedGameProps {
  onShowProfile: () => void;
  onBackToLanding: () => void;
}

const ProtectedGame: React.FC<ProtectedGameProps> = ({ onShowProfile, onBackToLanding }) => {
  const { user, login, isLoading } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoggingIn(true);
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (isLoading) {
    return (
      <GardenSection theme="spring" intensity="medium" showBorder={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      </GardenSection>
    );
  }

  if (!user?.isAuthenticated) {
    return (
      <GardenSection theme="spring" intensity="medium" showBorder={true} showFlowers={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto text-center px-6">
            {/* Lock Icon */}
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-12 h-12 text-red-400" />
            </div>

            {/* Message */}
            <h2 className="text-3xl font-bold text-white mb-4">Game Locked</h2>
            <p className="text-gray-400 text-lg mb-8">
              You need to log in with Internet Identity to play BloomChain.
              This ensures secure gameplay and tracks your progress.
            </p>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              <div className="flex items-center justify-center space-x-3">
                <LogIn className="w-5 h-5" />
                <span>{isLoggingIn ? 'Connecting...' : 'Connect with Internet Identity'}</span>
              </div>
            </button>

            {/* Info */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/30">
              <p className="text-sm text-gray-400">
                <strong>Why login?</strong> Internet Identity provides secure,
                privacy-preserving authentication for Web3 applications.
              </p>
            </div>
          </div>
        </div>
      </GardenSection>
    );
  }

  // User is authenticated - show the game
  return (
    <GardenSection theme="spring" intensity="lush" showBorder={true} showFlowers={true}>
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Game Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">BloomChain Game</h1>
                <p className="text-gray-400">Welcome back, player!</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onBackToLanding}
                className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/30 rounded-xl px-4 py-2 transition-all hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">Back to Landing</span>
              </button>

              <button
                onClick={onShowProfile}
                className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/30 rounded-xl px-4 py-2 transition-all hover:scale-105"
              >
                <User className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">Profile</span>
              </button>
            </div>
          </div>

          {/* Game Container */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/20 shadow-2xl overflow-hidden">
            <div className="aspect-video bg-gray-900">
              {/* Unity Game embedded here */}
              <iframe
                src="/game/index.html"
                className="w-full h-full border-0"
                title="BloomChain Unity Game"
                allow="fullscreen"
              />
            </div>
          </div>

          {/* Game Controls */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-xl px-6 py-3 transition-all hover:scale-105">
              <span className="text-green-400 font-semibold">Fullscreen</span>
            </button>
            <button className="bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-xl px-6 py-3 transition-all hover:scale-105">
              <span className="text-blue-400 font-semibold">Save Progress</span>
            </button>
          </div>
        </div>
      </div>
    </GardenSection>
  );
};

export default ProtectedGame;
