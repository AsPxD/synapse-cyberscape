
import React, { useEffect, useState } from 'react';

const MatrixCode: React.FC = () => {
  const [columns, setColumns] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const generateColumns = () => {
      const numColumns = Math.floor(window.innerWidth / 20);
      const generatedColumns: JSX.Element[] = [];
      
      for (let i = 0; i < numColumns; i++) {
        const chars = generateRandomChars();
        const speed = Math.random() * 3 + 1;
        const delay = Math.random() * 2;
        const opacity = Math.random() * 0.5 + 0.2;
        
        generatedColumns.push(
          <div
            key={i}
            className="matrix-code absolute top-0 text-xs animate-matrix-fall"
            style={{
              left: `${(i / numColumns) * 100}%`,
              animationDuration: `${speed}s`,
              animationDelay: `${delay}s`,
              animationIterationCount: 'infinite',
              opacity
            }}
          >
            {chars}
          </div>
        );
      }
      
      setColumns(generatedColumns);
    };
    
    generateColumns();
    
    const handleResize = () => {
      generateColumns();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const generateRandomChars = () => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const length = Math.floor(Math.random() * 15) + 5;
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {columns}
    </div>
  );
};

export default MatrixCode;
