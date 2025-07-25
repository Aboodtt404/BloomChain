import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { Play, ArrowDown, Sparkles, Coins, Users } from 'lucide-react'
import GardenScene from './3D/GardenScene'

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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
      
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

          {/* Right Column - 3D Garden Scene */}
          <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-earth-900/50 to-web3-900/50 border border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            
            {/* 3D Canvas */}
            <Canvas
              camera={{ position: [0, 8, 8], fov: 50 }}
              className="w-full h-full"
            >
              <Suspense fallback={null}>
                <Environment preset="sunset" />
                <OrbitControls 
                  enablePan={false} 
                  enableZoom={false} 
                  enableRotate={true}
                  autoRotate={true}
                  autoRotateSpeed={0.5}
                  minPolarAngle={Math.PI / 6}
                  maxPolarAngle={Math.PI / 2.5}
                />
                <GardenScene />
              </Suspense>
            </Canvas>

            {/* 3D Scene Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-gray-600">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-earth-300">
                    <span className="font-semibold">Live Garden</span>
                    <div className="text-xs text-gray-400">Interactive 3D Preview</div>
                  </div>
                  <div className="text-right">
                    <div className="text-golden-300 font-semibold">16 Crops Growing</div>
                    <div className="text-xs text-gray-400">+47 Gems/hour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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