
import React, { useEffect, useState } from 'react';

const SynapseText: React.FC = () => {
  const [assembled, setAssembled] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const [powerGlitch, setPowerGlitch] = useState(false);
  const text = "SYNAPSE";
  const fragments = text.split('').map((char, index) => ({ char, index }));
  
  useEffect(() => {
    // Initial assembly animation
    const assembleTimer = setTimeout(() => {
      setAssembled(true);
      
      // After assembly, trigger glitch effects at random intervals
      const glitchInterval = setInterval(() => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 150);
      }, 2000);
      
      // Add occasional power surge glitch effect
      const powerGlitchInterval = setInterval(() => {
        setPowerGlitch(true);
        setTimeout(() => setPowerGlitch(false), 300);
      }, 4000);
      
      return () => {
        clearInterval(glitchInterval);
        clearInterval(powerGlitchInterval);
      };
    }, 1000);
    
    return () => clearTimeout(assembleTimer);
  }, []);
  
  return (
    <div className="relative flex justify-center items-center h-24">
      {assembled ? (
        <div className="relative">
          <h1 
            className={`text-6xl md:text-7xl font-bold tracking-wider text-white cyber-text ${glitching ? 'animate-glitch' : ''} ${powerGlitch ? 'scale-110' : ''}`}
            style={{
              textShadow: powerGlitch 
                ? '0 0 20px #33C3F0, 0 0 30px #33C3F0, 3px 3px 3px rgba(206,0,255,0.8), -3px -3px 3px rgba(0,255,255,0.8)'
                : (glitching 
                  ? '0 0 10px #33C3F0, 0 0 20px #33C3F0, 2px 2px 2px rgba(206,0,255,0.7), -2px -2px 2px rgba(0,255,255,0.7)'
                  : '0 0 10px #33C3F0, 0 0 20px #33C3F0'),
              transition: 'transform 0.2s ease, text-shadow 0.2s ease',
              transform: powerGlitch ? 'translateY(-2px)' : 'none'
            }}
          >
            {text}
            <span className="sr-only">SYNAPSE</span>
          </h1>
          
          {/* Data stream animation */}
          <div className="absolute -top-3 left-0 w-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-cyber-electric to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Pixel distortion overlay */}
          {(glitching || powerGlitch) && (
            <div className="absolute inset-0 mix-blend-screen pointer-events-none opacity-70">
              <div className="w-full h-full bg-gradient-to-r from-[#FF00FF33] to-[#00FFFF33]" 
                style={{clipPath: 'polygon(0 25%, 100% 0%, 100% 75%, 0% 100%)'}}></div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-24 w-80">
          {fragments.map((fragment) => (
            <span
              key={fragment.index}
              className={`synapse-fragment text-6xl md:text-7xl font-bold text-cyber-neon absolute opacity-0 animate-assemble`}
              style={{
                left: `${fragment.index * 40}px`,
                top: '0',
                animationDelay: `${(fragment.index * 0.15) + 0.4}s`,
                textShadow: '0 0 10px #33C3F0, 0 0 20px #33C3F0, 0 0 30px #33C3F0'
              }}
            >
              {fragment.char}
            </span>
          ))}
        </div>
      )}
      
      {/* Tech circuit decoration with enhanced animation */}
      {assembled && (
        <>
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-electric to-transparent opacity-80" />
          <div className="absolute -bottom-8 left-0 w-full overflow-hidden">
            <div className="flex justify-center gap-1 opacity-70">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 rounded-full bg-cyber-electric animate-pulse-glow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SynapseText;
