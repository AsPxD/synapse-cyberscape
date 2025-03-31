
import React, { useEffect, useState } from 'react';

const SynapseText: React.FC = () => {
  const [assembled, setAssembled] = useState(false);
  const text = "SYNAPSE";
  const fragments = text.split('').map((char, index) => ({ char, index }));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAssembled(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative flex justify-center items-center h-24">
      {assembled ? (
        <h1 
          className="text-6xl font-bold tracking-wider text-white cyber-text"
        >
          {text}
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
                textShadow: '0 0 10px #33C3F0, 0 0 20px #33C3F0'
              }}
            >
              {fragment.char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SynapseText;
