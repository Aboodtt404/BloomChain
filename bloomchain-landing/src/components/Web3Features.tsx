import React from 'react'
import { Shield, Coins, Users, Wallet } from 'lucide-react'

const Web3Features: React.FC = () => {
  return (
    <section id="web3" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-web3-500/20 border border-web3-500/30 rounded-full px-4 py-2 text-sm font-medium text-web3-300">
            <Shield className="w-4 h-4" />
            <span>Web3 Integration</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-web3">True Ownership</span>{' '}
            <span className="text-white">Meets Gaming</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built on the Internet Computer Protocol, BloomChain delivers the next generation of gaming 
            where players truly own their digital assets and have a voice in the game's future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-earth-500/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-earth-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">NFT Assets</h3>
            <p className="text-gray-400">Every crop, garden, and tool is a tradeable NFT</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-golden-500/20 rounded-2xl flex items-center justify-center">
              <Coins className="w-8 h-8 text-golden-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Play-to-Earn</h3>
            <p className="text-gray-400">Convert gems to ICP tokens and stake BCT</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-web3-500/20 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-web3-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">DAO Governance</h3>
            <p className="text-gray-400">Vote on updates using BCT tokens</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent-500/20 rounded-2xl flex items-center justify-center">
              <Wallet className="w-8 h-8 text-accent-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Internet Identity</h3>
            <p className="text-gray-400">Secure, guest-mode blockchain access</p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                <span className="text-gradient-web3">Powered by</span> Internet Computer Protocol
              </h3>
              <p className="text-lg text-gray-400">
                Experience the future of gaming with ICP's revolutionary blockchain technology. 
                Enjoy fast transactions, low costs, and true decentralization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-web3-400 animate-pulse" />
                  <span className="text-gray-300">11,500+ transactions per second</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-earth-400 animate-pulse" />
                  <span className="text-gray-300">Eco-friendly blockchain technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-golden-400 animate-pulse" />
                  <span className="text-gray-300">Guest mode - no wallet required to start</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-web3-500/20 to-accent-500/20 rounded-2xl p-8 border border-web3-500/30">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-web3-400">$0.001</div>
                <div className="text-gray-300">Average transaction cost</div>
                <div className="text-sm text-gray-400">
                  Compared to $50+ on Ethereum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Web3Features 