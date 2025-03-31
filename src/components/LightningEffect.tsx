
import React, { useEffect, useState } from 'react';
import { Zap, Sparkles } from 'lucide-react';

interface LightningBolt {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  delay: number;
  duration: number;
}

const LightningEffect: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [bolts, setBolts] = useState<LightningBolt[]>([]);
  
  useEffect(() => {
    // Generate random lightning bolts
    const generatedBolts: LightningBolt[] = [];
    const numBolts = Math.floor(Math.random() * 8) + 15; // 15-23 bolts for more intensity
    
    for (let i = 0; i < numBolts; i++) {
      generatedBolts.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 8 + 1, // Wider bolts
        height: Math.random() * 50 + 20, // Longer bolts
        rotation: Math.random() * 90 - 45, // More varied rotation
        delay: Math.random() * 1.2, // Slightly quicker delays
        duration: Math.random() * 0.6 + 0.1 // Faster transitions
      });
    }
    
    setBolts(generatedBolts);
    
    // More dynamic lightning animation sequence
    const timer1 = setTimeout(() => {
      setPhase(1); // Start initial lightning
    }, 200); // Start faster
    
    const timer2 = setTimeout(() => {
      setPhase(2); // Intensify
    }, 1200);
    
    const timer3 = setTimeout(() => {
      setPhase(3); // Final surge
    }, 2000);
    
    const timer4 = setTimeout(() => {
      setPhase(4); // Start fadeout
    }, 2800);
    
    const timer5 = setTimeout(() => {
      onComplete(); // Animation complete
    }, 3500); // Complete faster
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {/* Enhanced background lightning bolts */}
      {bolts.map((bolt) => (
        <div 
          key={bolt.id}
          className="absolute bg-cyber-electric opacity-0"
          style={{
            left: `${bolt.x}%`,
            top: `${bolt.y}%`,
            width: `${bolt.width}px`,
            height: `${bolt.height}px`,
            transform: `rotate(${bolt.rotation}deg)`,
            boxShadow: '0 0 20px #33C3F0, 0 0 35px #33C3F0, 0 0 45px #33C3F0',
            opacity: phase >= 1 ? 0.9 : 0,
            filter: phase >= 2 ? 'blur(0.8px) brightness(1.2)' : 'blur(1.5px)',
            transition: `opacity ${bolt.duration}s ease-in-out, filter 0.3s ease`,
            transitionDelay: `${bolt.delay}s`,
            zIndex: 1
          }}
        />
      ))}
      
      {/* Multiple central lightning bolts with enhanced animation */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 lightning-bolt ${phase >= 1 ? 'animate-electric-bolt' : ''}`} 
           style={{ filter: 'brightness(1.3) drop-shadow(0 0 8px #33C3F0)' }} />
      <div className={`absolute top-0 left-[42%] -translate-x-1/2 h-full w-1 lightning-bolt ${phase >= 2 ? 'animate-electric-bolt' : ''}`} 
           style={{ animationDelay: '0.15s', opacity: 0.8 }} />
      <div className={`absolute top-0 left-[58%] -translate-x-1/2 h-full w-1 lightning-bolt ${phase >= 2 ? 'animate-electric-bolt' : ''}`} 
           style={{ animationDelay: '0.25s', opacity: 0.8 }} />
      
      {/* Enhanced lightning branches with animation */}
      {phase >= 2 && (
        <>
          <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-cyber-electric animate-pulse-glow"
            style={{ 
              transform: 'translate(-50%, -50%) rotate(45deg)',
              boxShadow: '0 0 15px #33C3F0, 0 0 30px #33C3F0, 0 0 40px #33C3F0',
              opacity: phase >= 4 ? 0 : (phase === 3 ? 1 : 0.8),
              transition: 'opacity 0.5s ease-in-out'
            }} 
          />
          <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-cyber-electric animate-pulse-glow"
            style={{ 
              transform: 'translate(-50%, -50%) rotate(-45deg)',
              boxShadow: '0 0 15px #33C3F0, 0 0 30px #33C3F0, 0 0 40px #33C3F0',
              opacity: phase >= 4 ? 0 : (phase === 3 ? 1 : 0.8),
              transition: 'opacity 0.5s ease-in-out',
              animationDelay: '0.2s'
            }} 
          />
          <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-cyber-electric animate-pulse-glow"
            style={{ 
              transform: 'translate(-50%, -50%) rotate(90deg)',
              boxShadow: '0 0 15px #33C3F0, 0 0 30px #33C3F0, 0 0 40px #33C3F0',
              opacity: phase >= 4 ? 0 : (phase === 3 ? 0.9 : 0.7),
              transition: 'opacity 0.5s ease-in-out',
              animationDelay: '0.1s'
            }} 
          />
          <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-cyber-electric animate-pulse-glow"
            style={{ 
              transform: 'translate(-50%, -50%) rotate(0deg)',
              boxShadow: '0 0 15px #33C3F0, 0 0 30px #33C3F0, 0 0 40px #33C3F0',
              opacity: phase >= 4 ? 0 : (phase === 3 ? 0.9 : 0.7),
              transition: 'opacity 0.5s ease-in-out',
              animationDelay: '0.3s'
            }} 
          />
        </>
      )}
      
      {/* Enhanced lightning flash overlay with improved animation */}
      {phase >= 2 && (
        <div 
          className={`absolute inset-0 ${phase >= 3 ? 'animate-lightning-flash' : ''}`}
          style={{
            background: 'radial-gradient(circle at center, rgba(51, 195, 240, 0.7) 0%, rgba(30, 174, 219, 0.4) 40%, rgba(0, 0, 0, 0) 70%)',
            opacity: phase === 4 ? 0 : (phase === 3 ? 1 : 0.8),
            transition: 'opacity 0.5s ease-in-out',
            backdropFilter: phase >= 3 ? 'blur(3px)' : 'none',
          }}
        />
      )}
      
      {/* Enhanced central zap icons with sparkles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {phase >= 1 && (
          <>
            <Zap 
              className="text-cyber-electric absolute animate-pulse-glow" 
              size={phase >= 3 ? 160 : (phase >= 2 ? 120 : 80)}
              strokeWidth={2}
              style={{
                filter: `drop-shadow(0 0 15px #33C3F0) drop-shadow(0 0 30px #33C3F0) ${phase >= 3 ? 'brightness(1.7)' : ''}`,
                transition: 'all 0.5s ease-in-out',
                opacity: phase === 4 ? 0 : 1
              }}
            />
            {phase >= 2 && (
              <Zap 
                className="text-white absolute animate-pulse-glow" 
                size={phase >= 3 ? 140 : 100}
                strokeWidth={1.5}
                style={{
                  filter: 'drop-shadow(0 0 20px #33C3F0)',
                  transition: 'all 0.5s ease-in-out',
                  opacity: phase === 4 ? 0 : 0.8,
                  transform: 'rotate(180deg)'
                }}
              />
            )}
            {phase >= 3 && (
              <Sparkles
                className="text-cyber-neon absolute animate-pulse-glow"
                size={180}
                strokeWidth={1}
                style={{
                  filter: 'drop-shadow(0 0 25px #33C3F0)',
                  opacity: phase === 4 ? 0 : 0.9,
                  transition: 'all 0.5s ease-in-out',
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LightningEffect;
