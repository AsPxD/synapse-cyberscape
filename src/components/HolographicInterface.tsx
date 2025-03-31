
import React, { useEffect, useState } from 'react';

interface Module {
  id: number;
  size: number;
  x: number;
  y: number;
  rotation: number;
  speed: number;
}

const HolographicInterface: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    // Generate modules
    const generatedModules: Module[] = [];
    for (let i = 0; i < 5; i++) {
      generatedModules.push({
        id: i,
        size: Math.random() * 50 + 30,
        x: 50 + (Math.random() * 40 - 20),
        y: 50 + (Math.random() * 40 - 20),
        rotation: Math.random() * 360,
        speed: (Math.random() * 0.5) + 0.2
      });
    }
    setModules(generatedModules);
    
    // Generate particles
    const generatedParticles: JSX.Element[] = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 3 + 1;
      const animationDuration = Math.random() * 4 + 2;
      generatedParticles.push(
        <div
          key={i}
          className="energy-particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float ${animationDuration}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      );
    }
    setParticles(generatedParticles);
  }, []);
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <div className="relative w-full h-full">
        {modules.map(module => (
          <div
            key={module.id}
            className="holo-interface absolute rounded-md animate-float"
            style={{
              width: `${module.size}px`,
              height: `${module.size}px`,
              left: `calc(${module.x}% - ${module.size / 2}px)`,
              top: `calc(${module.y}% - ${module.size / 2}px)`,
              transform: `rotate(${module.rotation}deg)`,
              animationDuration: `${5 / module.speed}s`,
              animationDelay: `${module.id * 0.5}s`
            }}
          >
            <div className="w-full h-full p-2 flex items-center justify-center">
              <div className="w-full h-full border border-cyber-electric opacity-30"></div>
            </div>
          </div>
        ))}
        
        {particles}
      </div>
    </div>
  );
};

export default HolographicInterface;
