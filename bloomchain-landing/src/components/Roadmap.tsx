import React from 'react'
import { Calendar, CheckCircle, Clock, Zap, Star } from 'lucide-react'

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      quarter: 'August 2025',
      title: 'MVP Launch',
      status: 'completed',
      items: [
        'Multi-Type Seed System',
        'Water Management System',
        'Comprehensive Inventory',
        'Fishing Minigames',
        'Merchant Trading System',
        'Coin Economy'
      ],
      description: 'Core gameplay features fully implemented and ready for players'
    },
    {
      quarter: 'September 2025',
      title: 'Enhanced Gameplay',
      status: 'in-progress',
      items: [
        'Advanced Crop Mutations',
        'Puzzle Mechanics',
        'Seasonal Events',
        'Player Achievements',
        'Social Features',
        'Performance Optimization'
      ],
      description: 'Expanding the core experience with advanced mechanics and social elements'
    },
    {
      quarter: 'October 2025',
      title: 'Web3 Integration',
      status: 'planned',
      items: [
        'NFT Ownership System',
        'ICP Token Integration',
        'DAO Governance',
        'Marketplace Launch',
        'Staking Mechanisms',
        'Cross-Chain Features'
      ],
      description: 'Full blockchain integration and community governance implementation'
    },
    {
      quarter: 'Q4 2025',
      title: 'Ecosystem Expansion',
      status: 'planned',
      items: [
        'Mobile App Launch',
        'Competitive Tournaments',
        'Creator Tools',
        'API for Developers',
        'Partnership Integrations',
        'Global Expansion'
      ],
      description: 'Growing beyond gaming into a comprehensive Web3 ecosystem'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'in-progress':
        return 'text-golden-400 bg-golden-500/20 border-golden-500/30'
      case 'planned':
        return 'text-web3-400 bg-web3-500/20 border-web3-500/30'
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" />
      case 'in-progress':
        return <Zap className="w-5 h-5" />
      case 'planned':
        return <Clock className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden-500/20 border border-golden-500/30 rounded-full px-4 py-2 text-sm font-medium text-golden-300">
            <Calendar className="w-4 h-4" />
            <span>Development Roadmap</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-gold">From MVP to</span>{' '}
            <span className="text-white">Full Ecosystem</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our journey from core gameplay to a comprehensive Web3 gaming ecosystem.
          </p>
        </div>

        {/* MVP Achievement Banner */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-2xl px-6 py-4 text-green-300 mb-6">
            <Star className="w-5 h-5" />
            <span className="font-semibold">🎉 MVP Successfully Completed! 🎉</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Core Gameplay Ready for Players
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto">
            All six core features have been implemented and tested. Players can now experience the full foundation of BloomChain with farming, fishing, trading, and inventory management.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-golden-400 to-web3-400 hidden lg:block" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline Dot */}
                <div className="hidden lg:flex flex-shrink-0 w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-700 items-center justify-center">
                  <div className={`w-6 h-6 rounded-full ${getStatusColor(item.status).split(' ')[1]}`} />
                </div>

                {/* Content Card */}
                <div className="flex-1 lg:ml-0 ml-0">
                  <div className={`border rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${getStatusColor(item.status).replace('text-', 'border-').replace('/20', '/30')}`}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getStatusColor(item.status).split(' ')[1]}`}>
                          <div className={getStatusColor(item.status).split(' ')[0]}>
                            {getStatusIcon(item.status)}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-400">{item.quarter}</div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                        {item.status === 'completed' ? '✓ Completed' :
                          item.status === 'in-progress' ? '⚡ In Progress' :
                            '🕐 Planned'}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6">{item.description}</p>

                    {/* Feature List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.items.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${item.status === 'completed' ? 'bg-green-400' :
                              item.status === 'in-progress' ? 'bg-golden-400' :
                                'bg-web3-400'
                            }`} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator for In-Progress */}
                    {item.status === 'in-progress' && (
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>Development Progress</span>
                          <span>25%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-golden-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-web3-500/20 border border-web3-500/30 rounded-full px-4 py-2 text-sm font-medium text-web3-300 mb-6">
            <Zap className="w-4 h-4" />
            <span>Ready to Experience the MVP?</span>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            The core BloomChain experience is ready for players. Join our community and be part of the journey as we expand into advanced features and Web3 integration.
          </p>

          <button
            onClick={() => {
              const element = document.querySelector('#newsletter')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  )
}

export default Roadmap 