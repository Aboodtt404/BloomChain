import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import GameMechanics from './components/GameMechanics'
import Web3Features from './components/Web3Features'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import GlobalBackground from './components/GlobalBackground'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Global Three.js Background */}
      <GlobalBackground />
      
      {/* Navigation */}
      <div className="relative z-50">
        <Navigation />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with 3D Garden */}
        <Hero />
        
        {/* Features Overview */}
        <Features />
        
        {/* Game Mechanics */}
        <GameMechanics />
        
        {/* Web3 & NFT Features */}
        <Web3Features />
        
        {/* Roadmap */}
        <Roadmap />
        
        {/* Team */}
        <Team />
        
        {/* Newsletter Signup */}
        <Newsletter />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App
