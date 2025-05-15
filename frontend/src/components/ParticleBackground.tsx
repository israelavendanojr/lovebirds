import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  star?: boolean;
};

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);
      }
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles with a celestial theme
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 4000);
      
      // Celestial colors - deep blues and purples with some white stars
      const colors = [
        'rgba(138, 180, 248, 0.9)',  // Soft blue
        'rgba(191, 148, 228, 0.9)',  // Soft purple
        'rgba(255, 255, 255, 0.95)',  // White for stars
        'rgba(255, 219, 172, 0.9)',   // Soft gold for stars
      ];

      for (let i = 0; i < particleCount; i++) {
        const isStar = Math.random() > 0.8; // 20% chance to be a star
        const size = isStar ? 
          (Math.random() * 1.5 + 0.5) :  // Smaller stars
          (Math.random() * 0.8 + 0.2);   // Tiny particles
          
        const alpha = isStar ? 
          (Math.random() * 0.5 + 0.5) :  // Brighter stars
          (Math.random() * 0.3 + 0.1);   // Dimmer particles
          
        const color = isStar ? 
          (Math.random() > 0.5 ? colors[2] : colors[3]) : // White or gold for stars
          (Math.random() > 0.5 ? colors[0] : colors[1]);  // Blue or purple for particles
        
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: size,
          speedX: (Math.random() - 0.5) * 0.3, // Slower movement
          speedY: (Math.random() - 0.5) * 0.3,
          color: color,
          alpha: alpha,
          star: isStar
        });
      }

      // Add some larger stars
      for (let i = 0; i < 10; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          speedX: 0,
          speedY: 0,
          color: 'rgba(255, 255, 255, 0.9)',
          alpha: 0.8,
          star: true
        });
      }

      particlesRef.current = particles;
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Create a dark blue overlay for trail effect
      ctx.fillStyle = 'rgba(8, 10, 30, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Add subtle twinkling effect for stars
        if (p.star) {
          p.alpha = 0.5 + Math.sin(time + i) * 0.35;
        }
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Draw particle
        ctx.beginPath();
        
        if (p.star) {
          // Draw star shape for stars
          const spikes = 5;
          const outerRadius = p.size;
          const innerRadius = p.size * 0.4;
          let rot = Math.PI / 2 * 3;
          let x = p.x;
          let y = p.y;
          const step = Math.PI / spikes;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y - outerRadius);
          
          for (let i = 0; i < spikes; i++) {
            x = p.x + Math.cos(rot) * outerRadius;
            y = p.y + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = p.x + Math.cos(rot) * innerRadius;
            y = p.y + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
          }
          
          ctx.lineTo(p.x, p.y - outerRadius);
          ctx.closePath();
          
          // Add glow effect for stars
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.size * 2
          );
          
          gradient.addColorStop(0, p.color);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
        } else {
          // Draw circle for regular particles
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
        }
        
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    };

    createParticles();
    
    // Start animation loop
    const animateLoop = () => {
      animate();
      animationFrameId.current = window.requestAnimationFrame(animateLoop);
    };
    
    animationFrameId.current = window.requestAnimationFrame(animateLoop);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current !== null) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#0a0c24] via-[#1a1b3a] to-[#2d1b50]">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-70"
      />
      {/* Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/10" />
    </div>
  );
}