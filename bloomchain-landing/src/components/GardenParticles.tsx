import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  type: 'leaf' | 'seed' | 'pollen' | 'sparkle';
  color: string;
}

export const GardenParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const colors = {
    leaf: ['#22c55e', '#16a34a', '#15803d', '#166534'],
    seed: ['#a16207', '#ca8a04', '#eab308'],
    pollen: ['#fbbf24', '#f59e0b', '#d97706'],
    sparkle: ['#10b981', '#059669', '#047857', '#22c55e']
  };

  const createParticle = (): Particle => {
    const types: Particle['type'][] = ['leaf', 'seed', 'pollen', 'sparkle'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    return {
      x: Math.random() * window.innerWidth,
      y: -20,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 2 + 1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4,
      size: Math.random() * 6 + 3,
      opacity: Math.random() * 0.7 + 0.3,
      type,
      color: colors[type][Math.floor(Math.random() * colors[type].length)]
    };
  };

  const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate((particle.rotation * Math.PI) / 180);
    ctx.globalAlpha = particle.opacity;

    switch (particle.type) {
      case 'leaf':
        // Draw leaf shape
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, particle.size, particle.size * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        // Leaf vein
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, -particle.size * 1.5);
        ctx.lineTo(0, particle.size * 1.5);
        ctx.stroke();
        break;
        
      case 'seed':
        // Draw seed
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, particle.size * 0.6, particle.size, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'pollen':
        // Draw pollen (small circles)
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(0, 0, particle.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'sparkle':
        // Draw sparkle (star shape)
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          const radius = i % 2 === 0 ? particle.size : particle.size * 0.4;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.fill();
        break;
    }
    
    ctx.restore();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;

      // Add some drift
      particle.vx += (Math.random() - 0.5) * 0.1;
      particle.vy += Math.random() * 0.05;

      // Draw particle
      drawParticle(ctx, particle);

      // Remove if off screen
      return particle.y < canvas.height + 50 && particle.x > -50 && particle.x < canvas.width + 50;
    });

    // Add new particles occasionally
    if (Math.random() < 0.05) {
      particlesRef.current.push(createParticle());
    }

    // Keep particle count reasonable
    if (particlesRef.current.length > 50) {
      particlesRef.current = particlesRef.current.slice(-50);
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize some particles
    for (let i = 0; i < 10; i++) {
      particlesRef.current.push({
        ...createParticle(),
        y: Math.random() * window.innerHeight
      });
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
}; 