import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { AuthButton } from './AuthButton'
import { useAuth } from '../contexts/AuthContext'

interface NavigationProps {
  onShowProfile: () => void;
  currentView?: 'landing' | 'profile';
}

const Navigation: React.FC<NavigationProps> = ({ onShowProfile, currentView = 'landing' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Features', href: '#features', isActive: false },
    { label: 'Gameplay', href: '#gameplay', isActive: false },
    { label: 'Web3', href: '#web3', isActive: false },
    { label: 'Roadmap', href: '#roadmap', isActive: false },
    { label: 'Team', href: '#team', isActive: false },
  ]

  const scrollToSection = (href: string) => {
    // For other sections, scroll if on landing page
    if (currentView === 'landing') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // For other sections, scroll if on landing page
    if (currentView === 'landing') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {currentView === 'landing' && (
              <div>
                <h1 className="text-2xl font-bold text-gradient-green">
                  BloomChain
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Web3 Gardening</p>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-200 font-medium ${item.isActive
                    ? 'text-green-400 font-semibold'
                    : 'text-gray-300 hover:text-earth-400'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Authentication & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">

            <AuthButton showPrincipal={user?.isAuthenticated} />
            {user?.isAuthenticated && currentView !== 'profile' && (
              <button
                onClick={onShowProfile}
                className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors border border-emerald-400/30 rounded-lg px-3 py-1 hover:bg-emerald-400/10 transition-all"
              >
                Profile
              </button>
            )}
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
            <div className="mt-4 space-y-3">
              <AuthButton className="w-full justify-center" />
              {user?.isAuthenticated && currentView !== 'profile' && (
                <button
                  onClick={onShowProfile}
                  className="w-full text-emerald-400 hover:text-emerald-300 text-sm font-medium border border-emerald-400/30 rounded-lg px-3 py-2 hover:bg-emerald-400/10 transition-all"
                >
                  Profile
                </button>
              )}
              {user?.isAuthenticated && (
                <div className="text-center">
                  <span className="text-emerald-400 text-sm font-medium">
                    ✓ Connected to ICP
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation 