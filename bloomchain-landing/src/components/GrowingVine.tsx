import React, { useEffect, useRef, useState } from 'react';

interface GrowingVineProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  length?: number;
  thickness?: number;
  className?: string;
  animated?: boolean;
  withLeaves?: boolean;
}

export const GrowingVine: React.FC<GrowingVineProps> = ({
  direction = 'up',
  length = 100,
  thickness = 3,
  className = '',
  animated = true,
  withLeaves = true,
}) => {
  const [growthProgress, setGrowthProgress] = useState(0);
  const [leafPositions, setLeafPositions] = useState<number[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (animated) {
      const duration = 3000; // 3 seconds
      const startTime = Date.now();
      
      const animateGrowth = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setGrowthProgress(easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateGrowth);
        }
      };
      
      requestAnimationFrame(animateGrowth);
    } else {
      setGrowthProgress(1);
    }

    // Generate random leaf positions
    if (withLeaves) {
      const positions = [];
      for (let i = 0.2; i < 1; i += 0.2 + Math.random() * 0.1) {
        positions.push(i);
      }
      setLeafPositions(positions);
    }
  }, [animated, withLeaves]);

  const getVinePath = () => {
    const segments = 20;
    const amplitude = 5; // How much the vine curves
    let path = '';
    
    for (let i = 0; i <= segments; i++) {
      const progress = i / segments;
      const currentProgress = Math.min(progress / growthProgress, 1);
      
      if (currentProgress > 1) break;
      
      let x, y;
      
      switch (direction) {
        case 'up':
          x = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
          y = 100 - (currentProgress * length);
          break;
        case 'down':
          x = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
          y = currentProgress * length;
          break;
        case 'left':
          x = 100 - (currentProgress * length);
          y = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
          break;
        case 'right':
          x = currentProgress * length;
          y = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
          break;
        default:
          x = 50;
          y = 100 - (currentProgress * length);
      }
      
      path += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    
    return path;
  };

  const getLeafPosition = (progress: number) => {
    const amplitude = 5;
    let x, y;
    
    switch (direction) {
      case 'up':
        x = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
        y = 100 - (progress * length);
        break;
      case 'down':
        x = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
        y = progress * length;
        break;
      case 'left':
        x = 100 - (progress * length);
        y = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
        break;
      case 'right':
        x = progress * length;
        y = 50 + Math.sin(progress * Math.PI * 3) * amplitude;
        break;
      default:
        x = 50;
        y = 100 - (progress * length);
    }
    
    return { x, y };
  };

  const svgWidth = direction === 'left' || direction === 'right' ? length + 50 : 100;
  const svgHeight = direction === 'up' || direction === 'down' ? length + 50 : 100;

  return (
    <div className={className}>
      <svg
        ref={svgRef}
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="overflow-visible"
      >
        {/* Main vine path */}
        <path
          d={getVinePath()}
          stroke="#22c55e"
          strokeWidth={thickness}
          fill="none"
          strokeLinecap="round"
          className="filter drop-shadow-sm"
        />
        
        {/* Leaves */}
        {withLeaves && leafPositions.map((position, index) => {
          if (position > growthProgress) return null;
          
          const leafPos = getLeafPosition(position);
          const leafSize = 4 + Math.random() * 3;
          const rotation = (Math.random() - 0.5) * 60;
          const side = index % 2 === 0 ? -1 : 1;
          
          return (
            <g key={index}>
              <ellipse
                cx={leafPos.x + (side * 8)}
                cy={leafPos.y}
                rx={leafSize}
                ry={leafSize * 1.5}
                fill="#16a34a"
                transform={`rotate(${rotation + (side * 30)} ${leafPos.x + (side * 8)} ${leafPos.y})`}
                className="animate-pulse"
                style={{ animationDelay: `${position * 2}s`, animationDuration: '3s' }}
              />
              {/* Leaf vein */}
              <line
                x1={leafPos.x + (side * 8)}
                y1={leafPos.y - leafSize * 1.5}
                x2={leafPos.x + (side * 8)}
                y2={leafPos.y + leafSize * 1.5}
                stroke="#059669"
                strokeWidth="0.5"
                transform={`rotate(${rotation + (side * 30)} ${leafPos.x + (side * 8)} ${leafPos.y})`}
              />
            </g>
          );
        })}
        
        {/* Small flowers along the vine */}
        {leafPositions.slice(0, 2).map((position, index) => {
          if (position > growthProgress) return null;
          
          const flowerPos = getLeafPosition(position);
          const colors = ['#ec4899', '#f59e0b', '#8b5cf6', '#ef4444'];
          const color = colors[index % colors.length];
          
          return (
            <g key={`flower-${index}`}>
              <circle
                cx={flowerPos.x}
                cy={flowerPos.y}
                r="3"
                fill={color}
                className="animate-pulse"
                style={{ animationDelay: `${position * 2 + 1}s` }}
              />
              <circle
                cx={flowerPos.x}
                cy={flowerPos.y}
                r="1.5"
                fill="#fbbf24"
              />
            </g>
          );
        })}
        
        {/* Vine tip with a small bud */}
        {growthProgress > 0.8 && (
          <circle
            cx={getLeafPosition(growthProgress).x}
            cy={getLeafPosition(growthProgress).y}
            r="2"
            fill="#84cc16"
            className="animate-pulse"
          />
        )}
      </svg>
    </div>
  );
}; 