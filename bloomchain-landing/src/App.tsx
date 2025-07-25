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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
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
  )
}

export default App
