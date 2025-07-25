import React from 'react'
import { Calendar, CheckCircle, Clock, Zap } from 'lucide-react'

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      quarter: 'August 2025',
      title: 'MVP Development',
      status: 'in-progress',
      items: [
        '4x4 Garden Grid System',
        'Basic NFT Crop Minting',
        'Core Game Mechanics',
        'User Interface Development'
      ]
    },
    {
      quarter: 'September 2025',
      title: 'Beta Launch',
      status: 'planned',
      items: [
        'Play-to-Earn System',
        'Puzzle Mechanics',
        'ICP Token Integration',
        'Community Testing'
      ]
    },
    {
      quarter: 'October 2025',
      title: 'Public Release',
      status: 'planned',
      items: [
        'Full Game Launch',
        'NFT Marketplace',
        'DAO Implementation',
        'Performance Optimization'
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-earth-400 bg-earth-500/20 border-earth-500/30'
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
            <span className="text-gradient-gold">The Journey</span>{' '}
            <span className="text-white">Ahead</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our roadmap to revolutionizing Web3 gaming and expanding into a full ecosystem.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-golden-400 via-earth-400 to-web3-400 hidden lg:block" />

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
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className={`inline-flex items-center space-x-2 rounded-full px-3 py-1 text-sm font-semibold border ${getStatusColor(item.status)}`}>
                          {getStatusIcon(item.status)}
                          <span>{item.quarter}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mt-3">{item.title}</h3>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {item.items.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status).split(' ')[1]}`} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Be part of the journey
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our wishlist to get early access to BloomChain. DAO governance will be available 
            at launch, allowing BCT holders to shape the future of the game.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#newsletter')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-golden"
          >
            Join Wishlist
          </button>
        </div>
      </div>
    </section>
  )
}

export default Roadmap 