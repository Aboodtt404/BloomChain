import React from 'react'
import { Play, ArrowDown, Sparkles, Coins, Users } from 'lucide-react'

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
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-slate-900/40 to-gray-900/60" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-earth-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-web3-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-golden-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-earth-500/20 border border-earth-500/30 rounded-full px-4 py-2 text-sm font-medium text-earth-300">
              <Sparkles className="w-4 h-4" />
              <span>WCHL 2025 Finalist</span>
            </div>

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
                onClick={scrollToFeatures}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
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
                <span>DAO Governance</span>
              </div>
            </div>
          </div>

          {/* Right Column - Pixel Art Showcase */}
          <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-earth-900/50 to-web3-900/50 border border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            
            {/* Pixel Art Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-earth-800/20 to-web3-800/20">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `
                  linear-gradient(rgba(76, 175, 80, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(76, 175, 80, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px'
              }} />
              
              {/* Floating Pixel Elements */}
              <div className="absolute top-16 left-16 w-8 h-8 bg-earth-400 animate-float pixel-art opacity-80"></div>
              <div className="absolute top-32 right-20 w-6 h-6 bg-golden-400 animate-float pixel-art opacity-70" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-32 left-20 w-10 h-10 bg-web3-400 animate-float pixel-art opacity-60" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-20 right-16 w-4 h-4 bg-accent-400 animate-float pixel-art opacity-90" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Glowing Orbs */}
              <div className="absolute top-24 right-32 w-12 h-12 bg-earth-500/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute bottom-40 left-32 w-16 h-16 bg-golden-500/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Central Focus Area */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Main Gem */}
                  <div className="w-24 h-24 bg-gradient-to-br from-earth-400 to-earth-600 transform rotate-45 animate-glow pixel-art shadow-glow-green"></div>
                  
                  {/* Surrounding Elements */}
                  <div className="absolute -top-8 -left-8 w-6 h-6 bg-golden-400 pixel-art animate-bounce"></div>
                  <div className="absolute -top-8 -right-8 w-6 h-6 bg-web3-400 pixel-art animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-accent-400 pixel-art animate-bounce" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-8 -right-8 w-6 h-6 bg-earth-300 pixel-art animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Game Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-gray-600">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-earth-300">
                    <span className="font-semibold">Pixel Art Style</span>
                    <div className="text-xs text-gray-400">2D Top-Down Garden Game</div>
                  </div>
                  <div className="text-right">
                    <div className="text-golden-300 font-semibold">4x4 Grid System</div>
                    <div className="text-xs text-gray-400">64x64 Pixel Tiles</div>
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
            className="text-gray-400 hover:text-earth-400 transition-colors duration-200"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero 