import React from 'react'
import { Play, ArrowDown, Sparkles, Coins, Users, Leaf, Flower2, Zap } from 'lucide-react'
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
           <GrowingVine direction="down" length={120} withLeaves={true}/>
         </div>
         <div className="absolute top-0 right-1/3 opacity-20 transform scale-x-[-1]">
           <GrowingVine direction="down" length={140} withLeaves={true}/>
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-green">Grow.</span>{' '}
                <span className="text-gradient-gold">Earn.</span>{' '}
                <span className="text-gradient-web3">Own.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                The first Web3 gardening game where you truly own your digital garden
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Plant magical crops, solve puzzles, mint NFTs, and earn ICP tokens in BloomChain - 
              where traditional farming meets blockchain innovation. Built on the Internet Computer Protocol.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-golden-400">$125</div>
                <div className="text-sm text-gray-400">Weekly Earning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-400">100%</div>
                <div className="text-sm text-gray-400">True Ownership</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-web3-400">∞</div>
                <div className="text-sm text-gray-400">Play Forever</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToNewsletter}
                className="btn-golden text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Join Wishlist</span>
                <ArrowDown className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#gameplay')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Learn Gameplay</span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Coins className="w-4 h-4 text-golden-400" />
                <span>Play-to-Earn</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-earth-400" />
                <span>NFT Crops</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-web3-400" />
                <span>DAO Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Right Column - Game Preview */}
          <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Flower2 className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-green-300 mb-3">Coming August 2025</h3>
                  <p className="text-gray-400 mb-6">Experience the future of Web3 gardening</p>
                </div>
                
                <div className="space-y-4 text-left max-w-sm">
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">4x4 Grid Garden System</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Flower2 className="w-4 h-4 text-pink-400" />
                    <span className="text-gray-300">NFT Crops & Assets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coins className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">Play-to-Earn Mechanics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Built on Internet Computer</span>
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-green-600/50 mt-8">
                  <div className="text-sm text-gray-300">
                    <div className="font-semibold text-green-300 mb-1">Garden Growth Progress</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">25% Bloomed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <button 
            onClick={scrollToFeatures}
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero 