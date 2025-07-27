import React, { type ReactNode } from 'react';
import { GardenFlower } from './GardenFlower';
import { GrowingVine } from './GrowingVine';

interface GardenSectionProps {
  children: ReactNode;
  className?: string;
  theme?: 'spring' | 'summer' | 'autumn' | 'mystical';
  intensity?: 'subtle' | 'medium' | 'lush';
  showVines?: boolean;
  showFlowers?: boolean;
  showBorder?: boolean;
}

export const GardenSection: React.FC<GardenSectionProps> = ({
  children,
  className = '',
  theme = 'spring',
  intensity = 'medium',
  showVines = true,
  showFlowers = true,
  showBorder = false
}) => {
  const themeConfig = {
    spring: {
      bgGradient: 'from-green-50/10 to-emerald-50/5',
      borderColor: 'border-green-200/20',
      flowerColors: ['rose', 'tulip'] as const,
      vineColor: '#22c55e'
    },
    summer: {
      bgGradient: 'from-yellow-50/10 to-green-50/10',
      borderColor: 'border-yellow-200/20',
      flowerColors: ['sunflower', 'rose'] as const,
      vineColor: '#16a34a'
    },
    autumn: {
      bgGradient: 'from-orange-50/10 to-red-50/5',
      borderColor: 'border-orange-200/20',
      flowerColors: ['sunflower', 'rose'] as const,
      vineColor: '#ca8a04'
    },
    mystical: {
      bgGradient: 'from-purple-50/10 to-blue-50/5',
      borderColor: 'border-purple-200/20',
      flowerColors: ['lavender', 'rose'] as const,
      vineColor: '#7c3aed'
    }
  };

  const intensityConfig = {
    subtle: { flowerCount: 2, vineLength: 60, opacity: 'opacity-40' },
    medium: { flowerCount: 4, vineLength: 80, opacity: 'opacity-60' },
    lush: { flowerCount: 6, vineLength: 100, opacity: 'opacity-80' }
  };

  const config = themeConfig[theme];
  const intensitySettings = intensityConfig[intensity];

  // Generate random flower positions
  const flowers = Array.from({ length: intensitySettings.flowerCount }, (_, i) => ({
    id: i,
    size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)] as 'small' | 'medium' | 'large',
    color: config.flowerColors[Math.floor(Math.random() * config.flowerColors.length)],
    position: {
      x: Math.random() * 90 + 5, // 5% to 95% from left
      y: Math.random() * 80 + 10  // 10% to 90% from top
    }
  }));

  return (
    <div className={`relative ${className}`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} pointer-events-none`} />
      
      {/* Border decoration */}
      {showBorder && (
        <div className={`absolute inset-0 border-2 ${config.borderColor} rounded-3xl pointer-events-none`} />
      )}
      
      {/* Corner vines */}
      {showVines && (
        <>
          {/* Top left vine */}
          <div className={`absolute top-0 left-0 ${intensitySettings.opacity} pointer-events-none`}>
            <GrowingVine 
              direction="down" 
              length={intensitySettings.vineLength} 
              withLeaves={true}
              withFlowers={theme !== 'autumn'}
            />
          </div>
          
          {/* Top right vine */}
          <div className={`absolute top-0 right-0 ${intensitySettings.opacity} pointer-events-none transform scale-x-[-1]`}>
            <GrowingVine 
              direction="down" 
              length={intensitySettings.vineLength} 
              withLeaves={true}
              withFlowers={theme !== 'autumn'}
            />
          </div>
          
          {/* Bottom left vine (less prominent) */}
          <div className={`absolute bottom-0 left-4 ${intensitySettings.opacity} opacity-50 pointer-events-none transform rotate-180`}>
            <GrowingVine 
              direction="up" 
              length={intensitySettings.vineLength * 0.6} 
              withLeaves={true}
              animated={false}
            />
          </div>
          
          {/* Bottom right vine (less prominent) */}
          <div className={`absolute bottom-0 right-4 ${intensitySettings.opacity} opacity-50 pointer-events-none transform rotate-180 scale-x-[-1]`}>
            <GrowingVine 
              direction="up" 
              length={intensitySettings.vineLength * 0.6} 
              withLeaves={true}
              animated={false}
            />
          </div>
        </>
      )}
      
      {/* Scattered flowers */}
      {showFlowers && (
        <div className="absolute inset-0 pointer-events-none">
          {flowers.map((flower) => (
            <div
              key={flower.id}
              className={`absolute ${intensitySettings.opacity}`}
              style={{
                left: `${flower.position.x}%`,
                top: `${flower.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <GardenFlower
                size={flower.size}
                color={flower.color}
                animated={true}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Floating garden particles overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`w-full h-full ${intensitySettings.opacity}`}>
          {/* Small floating elements */}
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 