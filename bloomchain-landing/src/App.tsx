
import Hero from './components/Hero'
import Features from './components/Features'
import GameMechanics from './components/GameMechanics'
import Web3Features from './components/Web3Features'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import { Newsletter } from './components/Newsletter'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import GlobalBackground from './components/GlobalBackground'
import { GardenSection } from './components/GardenSection'

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
        {/* Hero Section with Garden Theme */}
        <GardenSection theme="spring" intensity="lush" showBorder={false} showFlowers={false}>
          <Hero />
        </GardenSection>
        
        {/* Features Overview with Summer Theme */}
        <GardenSection theme="summer" intensity="medium" showVines={true} showFlowers={true}>
          <Features />
        </GardenSection>
        
        {/* Game Mechanics with Mystical Theme */}
        <GardenSection theme="mystical" intensity="subtle" showBorder={true} showVines={true}>
          <GameMechanics />
        </GardenSection>
        
        {/* Web3 & NFT Features with Spring Theme */}
        <GardenSection theme="spring" intensity="medium" showVines={true}>
          <Web3Features />
        </GardenSection>
        
        {/* Roadmap with Autumn Theme */}
        <GardenSection theme="autumn" intensity="medium" showFlowers={true} showVines={true}>
          <Roadmap />
        </GardenSection>
        
        {/* Team with Summer Theme */}
        <GardenSection theme="summer" intensity="subtle" showVines={true}>
          <Team />
        </GardenSection>
        
        {/* Newsletter Signup with Mystical Theme */}
        <GardenSection theme="mystical" intensity="lush" showBorder={true} showVines={true}>
          <Newsletter />
        </GardenSection>
        
        {/* Footer with Spring Theme */}
        <GardenSection theme="spring" intensity="subtle" showVines={true}>
          <Footer />
        </GardenSection>
      </div>
    </div>
  )
}

export default App
