
import React, { useEffect, useState } from 'react';
import { Zap, Lightning, Circuit } from 'lucide-react';

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
    const numBolts = Math.floor(Math.random() * 5) + 8; // 8-12 bolts
    
    for (let i = 0; i < numBolts; i++) {
      generatedBolts.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 5 + 1,
        height: Math.random() * 30 + 20,
        rotation: Math.random() * 60 - 30,
        delay: Math.random() * 1.5,
        duration: Math.random() * 0.5 + 0.2
      });
    }
    
    setBolts(generatedBolts);
    
    // Lightning animation sequence with more dynamic timing
    const timer1 = setTimeout(() => {
      setPhase(1); // Start initial lightning
    }, 300);
    
    const timer2 = setTimeout(() => {
      setPhase(2); // Intensify
    }, 1800);
    
    const timer3 = setTimeout(() => {
      setPhase(3); // Final surge
    }, 2800);
    
    const timer4 = setTimeout(() => {
      setPhase(4); // Start fadeout
    }, 3800);
    
    const timer5 = setTimeout(() => {
      onComplete(); // Animation complete
    }, 4500);
    
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
      {/* Background lightning bolts */}
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
            boxShadow: '0 0 15px #33C3F0, 0 0 25px #33C3F0',
            opacity: phase >= 1 ? 0.8 : 0,
            filter: 'blur(1px)',
            transition: `opacity ${bolt.duration}s ease-in-out`,
            transitionDelay: `${bolt.delay}s`,
            zIndex: 1
          }}
        />
      ))}
      
      {/* Multiple central lightning bolts */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 lightning-bolt ${phase >= 1 ? 'animate-electric-bolt' : ''}`} />
      <div className={`absolute top-0 left-[45%] -translate-x-1/2 h-full w-0.5 lightning-bolt ${phase >= 2 ? 'animate-electric-bolt' : ''}`} 
        style={{ animationDelay: '0.2s', opacity: 0.8 }} />
      <div className={`absolute top-0 left-[55%] -translate-x-1/2 h-full w-0.5 lightning-bolt ${phase >= 2 ? 'animate-electric-bolt' : ''}`} 
        style={{ animationDelay: '0.3s', opacity: 0.8 }} />
      
      {/* Lightning branches */}
      {phase >= 2 && (
        <>
          <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-cyber-electric"
            style={{ 
              transform: 'translate(-50%, -50%) rotate(45deg)',
              boxShadow: '0 0 10px #33C3F0, 0 0 20px #33C3F0',
              opacity: phase >= 4 ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }} 
          />
          <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-cyber-electric"
            style={{ 
              transform: 'translate(-50%, -50%) rotate(-45deg)',
              boxShadow: '0 0 10px #33C3F0, 0 0 20px #33C3F0',
              opacity: phase >= 4 ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }} 
          />
        </>
      )}
      
      {/* Lightning flash overlay with improved animation */}
      {phase >= 2 && (
        <div 
          className={`absolute inset-0 ${phase >= 3 ? 'animate-lightning-flash' : ''}`}
          style={{
            background: 'radial-gradient(circle at center, rgba(51, 195, 240, 0.5) 0%, rgba(30, 174, 219, 0.3) 40%, rgba(0, 0, 0, 0) 70%)',
            opacity: phase === 4 ? 0 : (phase === 3 ? 1 : 0.7),
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      )}
      
      {/* Main central zap icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {phase >= 1 && (
          <>
            <Zap 
              className="text-cyber-electric absolute animate-pulse-glow" 
              size={phase >= 3 ? 140 : (phase >= 2 ? 100 : 60)}
              strokeWidth={2}
              style={{
                filter: `drop-shadow(0 0 10px #33C3F0) ${phase >= 3 ? 'brightness(1.5)' : ''}`,
                transition: 'all 0.5s ease-in-out',
                opacity: phase === 4 ? 0 : 1
              }}
            />
            {phase >= 2 && (
              <Zap 
                className="text-white absolute animate-pulse-glow" 
                size={phase >= 3 ? 120 : 80}
                strokeWidth={1.5}
                style={{
                  filter: 'drop-shadow(0 0 15px #33C3F0)',
                  transition: 'all 0.5s ease-in-out',
                  opacity: phase === 4 ? 0 : 0.7,
                  transform: 'rotate(180deg)'
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
