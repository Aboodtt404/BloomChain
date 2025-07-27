import React, { useState, useEffect } from 'react';

interface GardenFlowerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'rose' | 'sunflower' | 'lavender' | 'tulip';
  position?: { x: number; y: number };
  className?: string;
  animated?: boolean;
}

export const GardenFlower: React.FC<GardenFlowerProps> = ({
  size = 'medium',
  color = 'rose',
  position,
  className = '',
  animated = true
}) => {
  const [isBloom, setIsBloom] = useState(false);
  const [swayAngle, setSwayAngle] = useState(0);

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const colorSchemes = {
    rose: {
      petals: 'fill-pink-400',
      center: 'fill-yellow-300',
      stem: 'stroke-green-500'
    },
    sunflower: {
      petals: 'fill-yellow-400',
      center: 'fill-yellow-700',
      stem: 'stroke-green-600'
    },
    lavender: {
      petals: 'fill-purple-400',
      center: 'fill-purple-600',
      stem: 'stroke-green-500'
    },
    tulip: {
      petals: 'fill-red-400',
      center: 'fill-red-600',
      stem: 'stroke-green-500'
    }
  };

  useEffect(() => {
    if (animated) {
      // Bloom animation
      const bloomTimer = setTimeout(() => setIsBloom(true), Math.random() * 2000);
      
      // Gentle sway animation
      const swayInterval = setInterval(() => {
        setSwayAngle(Math.sin(Date.now() * 0.001) * 5);
      }, 100);

      return () => {
        clearTimeout(bloomTimer);
        clearInterval(swayInterval);
      };
    }
  }, [animated]);

  const positionStyle = position 
    ? { position: 'absolute' as const, left: position.x, top: position.y }
    : {};

  return (
    <div 
      className={`${className} transition-all duration-1000 ${isBloom ? 'scale-100 opacity-100' : 'scale-50 opacity-70'}`}
      style={{
        ...positionStyle,
        transform: `rotate(${swayAngle}deg) ${isBloom ? 'scale(1)' : 'scale(0.5)'}`,
        transformOrigin: 'bottom center'
      }}
    >
      <svg className={sizeClasses[size]} viewBox="0 0 100 100">
        {/* Flower petals */}
        <g className={`${colorSchemes[color].petals} transition-all duration-1000`}>
          {/* Top petal */}
          <ellipse cx="50" cy="25" rx="8" ry="15" className="animate-pulse" />
          {/* Right petal */}
          <ellipse cx="75" cy="50" rx="15" ry="8" className="animate-pulse" style={{animationDelay: '0.2s'}} />
          {/* Bottom petal */}
          <ellipse cx="50" cy="75" rx="8" ry="15" className="animate-pulse" style={{animationDelay: '0.4s'}} />
          {/* Left petal */}
          <ellipse cx="25" cy="50" rx="15" ry="8" className="animate-pulse" style={{animationDelay: '0.6s'}} />
          {/* Diagonal petals */}
          <ellipse cx="65" cy="35" rx="12" ry="6" transform="rotate(45 65 35)" className="animate-pulse" style={{animationDelay: '0.8s'}} />
          <ellipse cx="35" cy="35" rx="12" ry="6" transform="rotate(-45 35 35)" className="animate-pulse" style={{animationDelay: '1s'}} />
          <ellipse cx="65" cy="65" rx="12" ry="6" transform="rotate(-45 65 65)" className="animate-pulse" style={{animationDelay: '1.2s'}} />
          <ellipse cx="35" cy="65" rx="12" ry="6" transform="rotate(45 35 65)" className="animate-pulse" style={{animationDelay: '1.4s'}} />
        </g>
        
        {/* Flower center */}
        <circle cx="50" cy="50" r="8" className={colorSchemes[color].center} />
        
        {/* Tiny details in center */}
        <circle cx="47" cy="47" r="1.5" className="fill-white opacity-60" />
        <circle cx="53" cy="47" r="1" className="fill-white opacity-40" />
        <circle cx="50" cy="53" r="1" className="fill-white opacity-50" />
      </svg>
      
      {/* Stem (positioned below the flower) */}
      <div className="flex justify-center">
        <svg width="4" height="20" className="mt-1">
          <line x1="2" y1="0" x2="2" y2="20" strokeWidth="3" className={colorSchemes[color].stem} />
        </svg>
      </div>
      
      {/* Leaves */}
      <div className="flex justify-center space-x-2 mt-1">
        <svg width="8" height="12" className="transform -rotate-12">
          <ellipse cx="4" cy="6" rx="3" ry="6" className="fill-green-400" />
        </svg>
        <svg width="8" height="12" className="transform rotate-12">
          <ellipse cx="4" cy="6" rx="3" ry="6" className="fill-green-400" />
        </svg>
      </div>
    </div>
  );
}; 