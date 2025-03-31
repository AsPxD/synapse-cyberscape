
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const LightningEffect: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    // Lightning animation sequence
    const timer1 = setTimeout(() => {
      setPhase(1); // Start initial lightning
    }, 500);
    
    const timer2 = setTimeout(() => {
      setPhase(2); // Final surge
    }, 3000);
    
    const timer3 = setTimeout(() => {
      setPhase(3); // Start fadeout
    }, 4000);
    
    const timer4 = setTimeout(() => {
      onComplete(); // Animation complete
    }, 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {/* Center lightning bolt */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 lightning-bolt ${phase >= 1 ? 'animate-electric-bolt' : ''}`} />
      
      {/* Lightning flash overlay */}
      {phase >= 2 && (
        <div className="absolute inset-0 bg-cyber-electric opacity-0 animate-lightning-flash" />
      )}
      
      {/* Lightning zap icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {phase >= 1 && (
          <Zap 
            className="text-cyber-electric animate-pulse-glow" 
            size={phase >= 2 ? 120 : 60}
            strokeWidth={2}
            style={{
              filter: `drop-shadow(0 0 10px #33C3F0) ${phase >= 2 ? 'brightness(1.5)' : ''}`,
              transition: 'all 0.5s ease-in-out',
              opacity: phase === 3 ? 0 : 1
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LightningEffect;
