import React, { useMemo } from 'react';

export default function NameParticles() {
  const nameParticles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${3 + Math.random() * 4}px`,
      delay: `${Math.random() * 0.35}s`,
      duration: `${0.6 + Math.random() * 0.7}s`,
      x: `${-30 + Math.random() * 60}px`,
      y: `${-25 + Math.random() * 50}px`,
    }));
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}>
        {nameParticles.map((particle) => (
          <span
            key={particle.id}
            style={{
              position: 'absolute',
              ...{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              },
              background: 'linear-gradient(135deg, #c188ff, #ff78db)',
              boxShadow: '0 0 12px rgba(193,136,255,0.45)',
              borderRadius: '2px',
              opacity: 0,
              animationName: 'pixelBurst',
              animationTimingFunction: 'ease-out',
              animationFillMode: 'forwards',
            }}
          />
        ))}
      </div>
    </div>
  );
}
