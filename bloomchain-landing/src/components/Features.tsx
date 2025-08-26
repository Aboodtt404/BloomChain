import React from 'react'
import { Sparkles, Coins, Clock, Trophy, Fish, Droplets, Package } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Multi-Type Seed System",
      description: "Plant various seed types with different growth rates and crop values. Each seed has unique characteristics and pricing for strategic farming.",
      color: "earth",
      stats: "MVP Ready",
      status: "implemented"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Management System",
      description: "Water your plants strategically to maintain optimal growth rates. Monitor water levels and timing for maximum crop yields.",
      color: "web3",
      stats: "MVP Ready",
      status: "implemented"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Comprehensive Inventory",
      description: "Manage your seeds, tools, and items in a well-organized inventory system. Track your resources and equipment efficiently.",
      color: "golden",
      stats: "MVP Ready",
      status: "implemented"
    },
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Fishing Minigames",
      description: "Catch different fish types with varying difficulty levels. Each fish has unique selling points and contributes to your economy.",
      color: "accent",
      stats: "MVP Ready",
      status: "implemented"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Merchant Trading System",
      description: "Call merchants to your island for trading. Expand your island, buy seeds, and sell crops, fish, and other products.",
      color: "golden",
      stats: "MVP Ready",
      status: "implemented"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Coin Economy",
      description: "Earn and spend coins through farming, fishing, and trading. Build your wealth to expand your island and purchase upgrades.",
      color: "earth",
      stats: "MVP Ready",
      status: "implemented"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'earth':
        return {
          icon: 'text-earth-400',
          bg: 'from-earth-500/10 to-earth-600/5',
          border: 'border-earth-500/20',
          hover: 'hover:border-earth-500/40'
        }
      case 'golden':
        return {
          icon: 'text-golden-400',
          bg: 'from-golden-500/10 to-golden-600/5',
          border: 'border-golden-500/20',
          hover: 'hover:border-golden-500/40'
        }
      case 'web3':
        return {
          icon: 'text-web3-400',
          bg: 'from-web3-500/10 to-web3-600/5',
          border: 'border-web3-500/20',
          hover: 'hover:border-web3-500/40'
        }
      case 'accent':
        return {
          icon: 'text-accent-400',
          bg: 'from-accent-500/10 to-accent-600/5',
          border: 'border-accent-500/20',
          hover: 'hover:border-accent-500/40'
        }
      default:
        return {
          icon: 'text-gray-400',
          bg: 'from-gray-500/10 to-gray-600/5',
          border: 'border-gray-500/20',
          hover: 'hover:border-gray-500/40'
        }
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-earth-500/20 border border-earth-500/30 rounded-full px-4 py-2 text-sm font-medium text-earth-300">
            <Sparkles className="w-4 h-4" />
            <span>MVP Features - August 2025</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-earth">Core Gameplay</span>{' '}
            <span className="text-white">Ready to Play</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the foundation of BloomChain with these fully implemented features. More advanced features coming in future updates!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color)
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 ${colors.bg} ${colors.border} ${colors.hover}`}
              >
                {/* Status Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${feature.status === 'implemented'
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                    : 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                    }`}>
                    {feature.status === 'implemented' ? '✓ Ready' : 'Coming Soon'}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={colors.icon}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className={`text-sm font-semibold ${colors.icon}`}>
                    {feature.stats}
                  </div>
                  {feature.status === 'implemented' && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs">Live</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-web3-500/20 border border-web3-500/30 rounded-full px-4 py-2 text-sm font-medium text-web3-300 mb-6">
            <Clock className="w-4 h-4" />
            <span>Future Updates</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Advanced Features in Development
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            After the MVP launch, we'll be adding NFT ownership, puzzle mechanics, DAO governance, and competitive events to expand the BloomChain experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-2xl mb-2">🎮</div>
              <div className="text-sm text-gray-400">Puzzle Mechanics</div>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-2xl mb-2">🏛️</div>
              <div className="text-sm text-gray-400">DAO Governance</div>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm text-gray-400">Competitive Events</div>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-2xl mb-2">💎</div>
              <div className="text-sm text-gray-400">NFT Ownership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 