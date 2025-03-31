
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const CircuitLines: React.FC = () => {
  const [paths, setPaths] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const generatedPaths: JSX.Element[] = [];
    const numPaths = 12;
    
    for (let i = 0; i < numPaths; i++) {
      const delay = i * 0.2;
      const pathLength = Math.random() * 100 + 100;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      // Generate random path
      const path = `M${startX},${startY} ` + 
                   `L${startX + Math.random() * 40 - 20},${startY + Math.random() * 40} ` +
                   `L${startX + Math.random() * 80 - 40},${startY + Math.random() * 80} ` +
                   `L${startX + Math.random() * 100 - 50},${startY + Math.random() * 100}`;
      
      generatedPaths.push(
        <path 
          key={i}
          d={path}
          className="circuit-path"
          stroke="#33C3F0"
          strokeWidth="1"
          fill="none"
          style={{
            animationDelay: `${delay}s`,
            opacity: 0.1,
            filter: `blur(${Math.random() * 1}px)`,
          }}
        />
      );
      
      if (i % 3 === 0) {
        generatedPaths.push(
          <circle
            key={`circle-${i}`}
            cx={startX + Math.random() * 50 - 25}
            cy={startY + Math.random() * 50 - 25}
            r={Math.random() * 3 + 1}
            fill="#33C3F0"
            className="animate-pulse-glow"
            style={{
              animationDelay: `${delay + 0.1}s`,
              opacity: 0.8,
              filter: 'blur(1px)',
            }}
          />
        );
      }
    }
    
    setPaths(generatedPaths);
    
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="animate-circuit-pulse"
      >
        {paths}
      </svg>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Zap 
          className="text-cyber-electric animate-pulse-glow" 
          size={30}
          strokeWidth={2}
        />
      </div>
    </div>
  );
};

export default CircuitLines;
