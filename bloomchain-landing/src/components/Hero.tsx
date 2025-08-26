import React from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import { GrowingVine } from './GrowingVine'

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.querySelector('#features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToNewsletter = () => {
    const element = document.querySelector('#newsletter')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Garden Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-teal-900/20" />

      {/* Garden Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative Vines */}
        <div className="absolute top-0 left-1/4 opacity-30">
          <GrowingVine direction="down" length={120} withLeaves={true} />
        </div>
        <div className="absolute top-0 right-1/3 opacity-20 transform scale-x-[-1]">
          <GrowingVine direction="down" length={140} withLeaves={true} />
        </div>

        {/* Floating Garden Particles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-emerald-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-lime-400/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />

        {/* Magical Sparkles */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-300 rounded-full animate-pulse garden-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* MVP Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-sm font-medium text-green-300 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>MVP Ready - August 2025</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-green">Grow.</span>{' '}
              <span className="text-gradient-gold">Trade.</span>{' '}
              <span className="text-gradient-web3">Expand.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-medium">
              The first Web3 gardening game with core gameplay ready to play
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Plant multiple seed types, manage water systems, fish for rewards, and trade with merchants in BloomChain -
            where strategic farming meets blockchain innovation. Built on the Internet Computer Protocol.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-golden-400">6</div>
              <div className="text-sm text-gray-400">Core Features</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-earth-400">MVP</div>
              <div className="text-sm text-gray-400">Ready to Play</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-web3-400">∞</div>
              <div className="text-sm text-gray-400">Future Growth</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={scrollToFeatures}
              className="btn-golden text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <span>Explore Features</span>
              <ArrowDown className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToNewsletter}
              className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <span>Join Waitlist</span>
              <Sparkles className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Core Gameplay Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>More Features Coming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 