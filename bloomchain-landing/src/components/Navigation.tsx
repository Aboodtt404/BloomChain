import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Gameplay', href: '#gameplay' },
    { label: 'Web3', href: '#web3' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-earth-500 animate-pulse" />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="w-8 h-8 text-earth-500 opacity-30" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient-green">
                BloomChain
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Web3 Gardening</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-earth-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#newsletter')}
              className="btn-golden text-sm"
            >
              Join Wishlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:text-earth-400 hover:bg-gray-800/50 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#newsletter')}
              className="w-full mt-4 btn-golden text-sm"
            >
              Join Wishlist
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation 