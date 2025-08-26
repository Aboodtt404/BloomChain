import React from 'react'
import { Grid, Star, Droplets, Fish, Package, Coins } from 'lucide-react'

const GameMechanics: React.FC = () => {
  return (
    <section id="gameplay" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-web3-500/20 border border-web3-500/30 rounded-full px-4 py-2 text-sm font-medium text-web3-300">
            <Grid className="w-4 h-4" />
            <span>MVP Gameplay - August 2025</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-web3">Core Mechanics</span>{' '}
            <span className="text-white">Ready to Play</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the foundation of BloomChain with these fully implemented gameplay systems. More advanced mechanics coming in future updates!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Game Grid Visualization */}
          <div className="space-y-8">
            <div className="relative">
              <div className="grid grid-cols-4 gap-2 bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                {Array.from({ length: 16 }, (_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg border-2 flex items-center justify-center text-2xl ${[2, 5, 9, 14].includes(i)
                      ? 'bg-earth-500/20 border-earth-500/40 text-earth-400'
                      : [7, 10].includes(i)
                        ? 'bg-web3-500/20 border-web3-500/40 text-web3-400'
                        : 'bg-gray-700/50 border-gray-600'
                      }`}
                  >
                    {[2, 5, 9, 14].includes(i) ? '🌱' : [7, 10].includes(i) ? '💧' : ''}
                  </div>
                ))}
              </div>
              <div className="absolute -top-4 -right-4 bg-golden-500/20 border border-golden-500/30 rounded-full px-3 py-1 text-sm font-semibold text-golden-300">
                Garden Grid System
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-earth-400">16</div>
                <div className="text-sm text-gray-400">Plot Capacity</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-web3-400">Multiple</div>
                <div className="text-sm text-gray-400">Seed Types</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-golden-400">Coins</div>
                <div className="text-sm text-gray-400">Economy</div>
              </div>
            </div>
          </div>

          {/* Mechanics List */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-earth-500/20 rounded-xl flex items-center justify-center">
                  <Grid className="w-6 h-6 text-earth-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-Type Seed System</h3>
                  <p className="text-gray-400">
                    Plant various seed types with different growth rates and crop values. Each seed has unique characteristics and strategic pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-web3-500/20 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-web3-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Water Management</h3>
                  <p className="text-gray-400">
                    Water your plants strategically to maintain optimal growth rates. Monitor water levels and timing for maximum crop yields.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-golden-500/20 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-golden-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Inventory Management</h3>
                  <p className="text-gray-400">
                    Organize your seeds, tools, and items in a comprehensive inventory system. Track resources and equipment efficiently.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                  <Fish className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fishing Minigames</h3>
                  <p className="text-gray-400">
                    Catch different fish types with varying difficulty levels. Each fish has unique selling points and contributes to your economy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-earth-500/20 rounded-xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-earth-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Merchant Trading</h3>
                  <p className="text-gray-400">
                    Call merchants to your island for trading. Expand your island, buy seeds, and sell crops, fish, and other products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Mechanics Preview */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-golden-500/20 border border-golden-500/30 rounded-full px-4 py-2 text-sm font-medium text-golden-300 mb-6">
            <Star className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Advanced Gameplay Mechanics
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            After the MVP launch, we'll be adding puzzle mechanics, mutation systems, competitive events, and more advanced farming strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">🧩</div>
              <h4 className="text-lg font-semibold text-white mb-2">Puzzle Mechanics</h4>
              <p className="text-gray-400 text-sm">Strategic sprinkler placement and growth optimization puzzles</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Mutation System</h4>
              <p className="text-gray-400 text-sm">Rare crop mutations and special growth patterns</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="text-lg font-semibold text-white mb-2">Competitive Events</h4>
              <p className="text-gray-400 text-sm">Seasonal competitions and community challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameMechanics 