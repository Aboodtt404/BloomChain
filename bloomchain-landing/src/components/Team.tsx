import React from 'react'
import { Github, Linkedin, Code, Cpu } from 'lucide-react'

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Unity Master',
      role: 'Game Developer & UI/UX Designer',
      description: 'Expert in Unity 2D development, pixel art creation, and player experience design. Specializes in creating engaging gameplay mechanics and beautiful visual interfaces.',
      skills: ['Unity 2D', 'C# Development', 'Pixel Art', 'Game Design', 'UI/UX'],
      icon: <Code className="w-8 h-8" />,
      color: 'earth',
      social: {
        github: 'https://github.com/Kidzantso',
        linkedin: 'https://www.linkedin.com/in/nader-maged/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      }
    },
    {
      name: 'ICP Blockchain Pro',
      role: 'Blockchain Developer & Smart Contracts',
      description: 'Internet Computer Protocol specialist with deep expertise in Rust, Motoko, and decentralized systems. Architecting the Web3 infrastructure for BloomChain.',
      skills: ['Rust', 'Motoko', 'ICP Canisters', 'Smart Contracts', 'Web3'],
      icon: <Cpu className="w-8 h-8" />,
      color: 'web3',
      social: {
        github: 'https://github.com/Aboodtt404',
        linkedin: 'https://www.linkedin.com/in/abdelrahman-emad-a06aa5268/'
      }
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'earth':
        return {
          icon: 'text-earth-400',
          bg: 'from-earth-500/10 to-earth-600/5',
          border: 'border-earth-500/20',
          hover: 'hover:border-earth-500/40'
        }
      case 'web3':
        return {
          icon: 'text-web3-400',
          bg: 'from-web3-500/10 to-web3-600/5',
          border: 'border-web3-500/20',
          hover: 'hover:border-web3-500/40'
        }
      default:
        return {
          icon: 'text-gray-400',
          bg: 'from-gray-500/10 to-gray-600/5',
          border: 'border-gray-500/20',
          hover: 'hover:border-gray-500/40'
        }
    }
  }

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-500/20 border border-accent-500/30 rounded-full px-4 py-2 text-sm font-medium text-accent-300">
            <Code className="w-4 h-4" />
            <span>Meet the Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-green">Two Developers,</span>{' '}
            <span className="text-white">One Vision</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            BloomChain is built by a passionate duo combining gaming expertise with cutting-edge blockchain technology. 
            Together, we're pioneering the future of Web3 gaming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => {
            const colors = getColorClasses(member.color)
            
            return (
              <div
                key={index}
                className={`
                  relative bg-gradient-to-br ${colors.bg} 
                  border ${colors.border} ${colors.hover}
                  rounded-3xl p-8 transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl
                  backdrop-blur-sm group
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-current blur-3xl" />
                  <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-current blur-2xl" />
                </div>

                <div className="relative space-y-6">
                  {/* Avatar & Icon */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.icon}`}>
                      {member.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className={`text-lg font-medium ${colors.icon}`}>{member.role}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 text-sm rounded-full border ${colors.border} ${colors.icon} bg-black/20`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 pt-4 border-t border-gray-700">
                    <a
                      href={member.social.github}
                      className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Team Stats */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-earth-400">5+</div>
              <div className="text-gray-400">Years Combined Gaming Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-web3-400">3+</div>
              <div className="text-gray-400">Years Blockchain Development</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-golden-400">100%</div>
              <div className="text-gray-400">Dedicated to Web3 Gaming</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Our Mission: Democratize Gaming
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We believe gaming should be truly owned by players, not corporations. 
            BloomChain represents our commitment to creating a gaming ecosystem where 
            players have real ownership, voice, and economic opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Team 