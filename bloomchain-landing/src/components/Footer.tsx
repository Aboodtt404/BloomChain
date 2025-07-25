import React from 'react'
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Gameplay', href: '#gameplay' },
    { label: 'Web3', href: '#web3' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
  ]



  const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-earth-500 animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-8 h-8 text-earth-500 opacity-30" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-green">
                  BloomChain
                </h3>
                <p className="text-xs text-gray-400 -mt-1">Web3 Gardening Game</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed max-w-md">
              The first Web3 gardening game where you truly own your digital garden. 
              Plant magical crops, solve puzzles, mint NFTs, and earn ICP tokens on the Internet Computer Protocol.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-web3-400" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-earth-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-earth-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} BloomChain. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> BloomChain is currently in development. 
              All features, tokenomics, and earning estimates are subject to change. 
              Cryptocurrency investments carry risk. Please do your own research before participating in any play-to-earn activities.
              NFTs and tokens have no guaranteed value and may lose value.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 