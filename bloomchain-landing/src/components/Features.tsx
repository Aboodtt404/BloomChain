import React from 'react'
import { Sparkles, Coins, Users, Puzzle, Clock, Trophy } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "NFT Crops & Gardens",
      description: "True ownership of your digital assets. Every crop, sprinkler, and garden plot is a unique NFT you can trade on the marketplace.",
      color: "earth",
      stats: "1000+ Unique NFTs"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Play-to-Earn Economy", 
      description: "Earn real ICP tokens by playing. Convert gems to cryptocurrency, stake BCT tokens, and participate in a sustainable economy.",
      color: "golden",
      stats: "$0.50-$125/week"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Strategic Puzzles",
      description: "Solve Mutation Matrix puzzles and Growth Sequences to optimize your garden. Smart play leads to better rewards.",
      color: "web3",
      stats: "50+ Puzzle Types"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "DAO Governance",
      description: "Vote on game updates, new features, and community events using BCT tokens. Your voice shapes the future of BloomChain.",
      color: "accent",
      stats: "Community Driven"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Offline Growth",
      description: "Your garden grows even when you're away. Check back every 2 hours to harvest gems and tend to your magical crops.",
      color: "earth",
      stats: "24/7 Growing"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitive Events",
      description: "Join seasonal events like Star Bloom Festival with your collective. Compete for exclusive rewards and recognition.",
      color: "golden",
      stats: "Weekly Events"
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
            <span>Game Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-green">Revolutionary</span>{' '}
            <span className="text-white">Gaming Experience</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            BloomChain combines the best of traditional gaming with cutting-edge Web3 technology, 
            creating an entirely new way to play, earn, and own your digital adventures.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color)
            
            return (
              <div
                key={index}
                className={`
                  relative bg-gradient-to-br ${colors.bg} 
                  border ${colors.border} ${colors.hover}
                  rounded-2xl p-8 transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl
                  backdrop-blur-sm
                  group cursor-pointer
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-current blur-3xl" />
                  <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-current blur-2xl" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-gray-100">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className={`inline-flex items-center space-x-2 ${colors.icon} text-sm font-semibold`}>
                    <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    <span>{feature.stats}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8 py-4">
              Start Playing Today
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            No downloads required • Play in your browser • Built on Internet Computer Protocol
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features 