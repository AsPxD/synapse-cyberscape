
import React, { useEffect, useState } from 'react';
import CircuitLines from './CircuitLines';
import MatrixCode from './MatrixCode';
import SynapseText from './SynapseText';
import HolographicInterface from './HolographicInterface';
import LightningEffect from './LightningEffect';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loaded, setLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    // Simulate loading - faster initial load
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAnimationComplete = () => {
    setFadeOut(true);
    
    const timer = setTimeout(() => {
      onComplete();
    }, 800); // Faster transition
    
    return () => clearTimeout(timer);
  };
  
  return (
    <div 
      className={`fixed inset-0 bg-cyber-dark flex items-center justify-center overflow-hidden transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ zIndex: 9999 }}
    >
      <div className="cyber-grid absolute inset-0" />
      
      {loaded && (
        <>
          <MatrixCode />
          <CircuitLines />
          <HolographicInterface />
          <div className="relative z-40 flex flex-col items-center">
            <SynapseText />
          </div>
          <LightningEffect onComplete={handleAnimationComplete} />
        </>
      )}
    </div>
  );
};

export default Preloader;
