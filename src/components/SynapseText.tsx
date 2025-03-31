
import React, { useEffect, useState } from 'react';

const SynapseText: React.FC = () => {
  const [assembled, setAssembled] = useState(false);
  const [glitching, setGlitching] = useState(false);
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
      
      return () => clearInterval(glitchInterval);
    }, 1500);
    
    return () => clearTimeout(assembleTimer);
  }, []);
  
  return (
    <div className="relative flex justify-center items-center h-24">
      {assembled ? (
        <h1 
          className={`text-6xl font-bold tracking-wider text-white cyber-text ${glitching ? 'animate-glitch' : ''}`}
          style={{
            textShadow: glitching 
              ? '0 0 10px #33C3F0, 0 0 20px #33C3F0, 2px 2px 2px rgba(206,0,255,0.7), -2px -2px 2px rgba(0,255,255,0.7)'
              : '0 0 10px #33C3F0, 0 0 20px #33C3F0'
          }}
        >
          {text}
          <span className="sr-only">SYNAPSE</span>
        </h1>
      ) : (
        <div className="relative h-24 w-64">
          {fragments.map((fragment) => (
            <span
              key={fragment.index}
              className={`synapse-fragment text-6xl font-bold text-cyber-neon absolute opacity-0 animate-assemble`}
              style={{
                left: `${fragment.index * 35}px`,
                top: '0',
                animationDelay: `${(fragment.index * 0.2) + 0.5}s`,
                textShadow: '0 0 10px #33C3F0, 0 0 20px #33C3F0, 0 0 30px #33C3F0'
              }}
            >
              {fragment.char}
            </span>
          ))}
        </div>
      )}
      
      {/* Tech circuit decoration */}
      {assembled && (
        <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-electric to-transparent opacity-80" />
      )}
    </div>
  );
};

export default SynapseText;
