import React from 'react'
import { Grid, Zap, Clock, Star } from 'lucide-react'

const GameMechanics: React.FC = () => {
  return (
    <section id="gameplay" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-web3-500/20 border border-web3-500/30 rounded-full px-4 py-2 text-sm font-medium text-web3-300">
            <Grid className="w-4 h-4" />
            <span>Gameplay Mechanics</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-web3">Simple to Learn,</span>{' '}
            <span className="text-white">Deep to Master</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            BloomChain combines familiar farming mechanics with innovative puzzle-solving and strategic depth.
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
                    className={`aspect-square rounded-lg border-2 flex items-center justify-center text-2xl ${
                      [2, 5, 9, 14].includes(i)
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
                4x4 Garden Grid
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-earth-400">16</div>
                <div className="text-sm text-gray-400">Plot Capacity</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-web3-400">2hr</div>
                <div className="text-sm text-gray-400">Growth Cycles</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-golden-400">50</div>
                <div className="text-sm text-gray-400">Gems/Day</div>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Garden Management</h3>
                  <p className="text-gray-400">
                    Plant magical crops in your 4x4 garden grid. Each tile can hold different crop types with unique growth patterns and rewards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-web3-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-web3-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mutation Matrix Puzzles</h3>
                  <p className="text-gray-400">
                    Solve strategic sprinkler placement puzzles to optimize crop growth and unlock rare mutations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-golden-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-golden-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Offline Growth</h3>
                  <p className="text-gray-400">
                    Your garden continues growing while you're away. Return every 2 hours to harvest gems and plant new crops.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Star Bloom Events</h3>
                  <p className="text-gray-400">
                    Join weekly community events with your collective to earn exclusive rewards and rare NFTs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameMechanics 