import React, { useState } from 'react'
import { Gamepad, Trophy, Users, Sparkles, CheckCircle, Clock, Lock, LogIn } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const GameSection: React.FC = () => {
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
            <section id="game" className="relative py-20 overflow-hidden">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-400 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading...</p>
                </div>
            </section>
        );
    }

    if (!user?.isAuthenticated) {
        return (
            <section id="game" className="relative py-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-green-900/10 to-gray-900" />

                {/* Floating Game Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-3/4 right-1/6 w-48 h-48 bg-emerald-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-lime-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />

                    {/* Game-themed Sparkles */}
                    {Array.from({ length: 8 }, (_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-emerald-300 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/20">
                            <Gamepad className="w-10 h-10 text-white" />
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            <span className="text-gradient-green">Test</span>{' '}
                            <span className="text-gradient-gold">BloomChain</span>
                        </h2>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                            Experience the foundation of Web3 gaming with our immersive Unity-powered gardening adventure.
                            Test the core gameplay mechanics that are ready now, with advanced features coming soon.
                        </p>

                        <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-sm font-medium text-green-300">
                            <CheckCircle className="w-4 h-4" />
                            <span>Core Gameplay Ready - Test Now!</span>
                        </div>
                    </div>

                    {/* Game Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-700/30 hover:border-green-700/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                                <Trophy className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-green-300 mb-3">Core Gameplay</h3>
                            <p className="text-gray-400 mb-3">
                                Plant seeds, manage water, fish for rewards, and trade with merchants. Experience the foundation of BloomChain.
                            </p>
                            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 text-xs font-semibold text-green-300">
                                <CheckCircle className="w-3 h-3" />
                                <span>Ready Now</span>
                            </div>
                        </div>

                        <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-700/30 hover:border-blue-700/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-300 mb-3">Multiplayer Ready</h3>
                            <p className="text-gray-400 mb-3">
                                Connect with other gardeners, trade resources, and compete in seasonal events.
                            </p>
                            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1 text-xs font-semibold text-blue-300">
                                <Clock className="w-3 h-3" />
                                <span>Coming Soon</span>
                            </div>
                        </div>

                        <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 hover:border-purple-700/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                                <div className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-300 mb-3">NFT Integration</h3>
                            <p className="text-gray-400 mb-3">
                                True ownership of your digital assets. Every crop, tool, and decoration will be a unique NFT.
                            </p>
                            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-xs font-semibold text-purple-300">
                                <Clock className="w-3 h-3" />
                                <span>Coming Soon</span>
                            </div>
                        </div>
                    </div>

                    {/* Game Locked Message */}
                    <div className="text-center mb-16">
                        <div className="max-w-md mx-auto">
                            {/* Lock Icon */}
                            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Lock className="w-12 h-12 text-red-400" />
                            </div>

                            {/* Message */}
                            <h3 className="text-2xl font-bold text-white mb-4">Game Locked</h3>
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

                    {/* Game Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                            <div className="text-3xl font-bold text-green-400 mb-2">4x4</div>
                            <div className="text-sm text-gray-400">Garden Grid</div>
                        </div>

                        <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                            <div className="text-3xl font-bold text-emerald-400 mb-2">Multiple</div>
                            <div className="text-sm text-gray-400">Seed Types</div>
                        </div>

                        <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                            <div className="text-3xl font-bold text-golden-400 mb-2">Water</div>
                            <div className="text-sm text-gray-400">Management</div>
                        </div>

                        <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                            <div className="text-3xl font-bold text-blue-400">
                                <div className="text-3xl font-bold text-blue-400 mb-2">Fishing</div>
                                <div className="text-sm text-gray-400">Minigames</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // User is authenticated - show the game
    return (
        <section id="game" className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-green-900/10 to-gray-900" />

            {/* Floating Game Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-3/4 right-1/6 w-48 h-48 bg-emerald-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-lime-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />

                {/* Game-themed Sparkles */}
                {Array.from({ length: 8 }, (_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-300 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/20">
                        <Gamepad className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        <span className="text-gradient-green">Test</span>{' '}
                        <span className="text-gradient-gold">BloomChain</span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        Experience the foundation of Web3 gaming with our immersive Unity-powered gardening adventure.
                        Test the core gameplay mechanics that are ready now, with advanced features coming soon.
                    </p>

                    <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-sm font-medium text-green-300">
                        <CheckCircle className="w-4 h-4" />
                        <span>Core Gameplay Ready - Test Now!</span>
                    </div>
                </div>

                {/* Game Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-700/30 hover:border-green-600/50 transition-all duration-300">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                            <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-green-300 mb-3">Core Gameplay</h3>
                        <p className="text-gray-400 mb-3">
                            Plant seeds, manage water, fish for rewards, and trade with merchants. Experience the foundation of BloomChain.
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 text-xs font-semibold text-green-300">
                            <CheckCircle className="w-3 h-3" />
                            <span>Ready Now</span>
                        </div>
                    </div>

                    <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-700/30 hover:border-blue-600/50 transition-all duration-300">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-300 mb-3">Multiplayer Ready</h3>
                        <p className="text-gray-400 mb-3">
                            Connect with other gardeners, trade resources, and compete in seasonal events.
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1 text-xs font-semibold text-blue-300">
                            <Clock className="w-3 h-3" />
                            <span>Coming Soon</span>
                        </div>
                    </div>

                    <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-300 mb-3">NFT Integration</h3>
                        <p className="text-gray-400 mb-3">
                            True ownership of your digital assets. Every crop, tool, and decoration will be a unique NFT.
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-xs font-semibold text-purple-300">
                            <Clock className="w-3 h-3" />
                            <span>Coming Soon</span>
                        </div>
                    </div>
                </div>

                {/* Unity Game Container - Authenticated User */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/20 shadow-2xl overflow-hidden mb-16">
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
                <div className="flex justify-center space-x-4 mb-16">
                    <button className="bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-xl px-6 py-3 transition-all hover:scale-105">
                        <span className="text-green-400 font-semibold">Fullscreen</span>
                    </button>
                    <button className="bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-xl px-6 py-3 transition-all hover:scale-105">
                        <span className="text-blue-400 font-semibold">Save Progress</span>
                    </button>
                </div>

                {/* Game Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                        <div className="text-3xl font-bold text-green-400 mb-2">4x4</div>
                        <div className="text-sm text-gray-400">Garden Grid</div>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                        <div className="text-3xl font-bold text-emerald-400 mb-2">Multiple</div>
                        <div className="text-sm text-gray-400">Seed Types</div>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                        <div className="text-3xl font-bold text-golden-400 mb-2">Water</div>
                        <div className="text-sm text-gray-400">Management</div>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded-xl border border-green-700/20">
                        <div className="text-3xl font-bold text-blue-400 mb-2">Fishing</div>
                        <div className="text-sm text-gray-400">Minigames</div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 text-sm">
                        Experience the foundation of BloomChain with our Unity-powered gardening mechanics
                    </p>
                </div>
            </div>
        </section>
    )
}

export default GameSection
