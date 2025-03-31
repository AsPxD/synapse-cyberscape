
import React, { useEffect, useState } from 'react';
import CircuitLines from './CircuitLines';
import MatrixCode from './MatrixCode';
import SynapseText from './SynapseText';
import HolographicInterface from './HolographicInterface';
import LightningEffect from './LightningEffect';
import { Progress } from '@/components/ui/progress';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loaded, setLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Start loading animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200);
    
    // Simulate progress loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Non-linear progress to make it feel more dynamic
        const increment = Math.random() * 8 + (prev < 50 ? 5 : (prev < 80 ? 3 : 1));
        return Math.min(prev + increment, 100);
      });
    }, 150);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);
  
  // When animation completes
  const handleAnimationComplete = () => {
    setFadeOut(true);
    
    const timer = setTimeout(() => {
      onComplete();
    }, 700);
    
    return () => clearTimeout(timer);
  };
  
  return (
    <div 
      className={`fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center overflow-hidden transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ 
        zIndex: 9999,
        transition: 'opacity 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)' 
      }}
    >
      <div className="cyber-grid absolute inset-0" />
      
      {loaded && (
        <>
          <MatrixCode />
          <CircuitLines />
          <HolographicInterface />
          <div className="relative z-40 flex flex-col items-center space-y-16">
            <SynapseText />
            
            {/* Progress indicator */}
            <div className="w-64 space-y-2">
              <Progress 
                value={progress} 
                className="h-2 bg-cyber-dark overflow-hidden border border-cyber-electric/30 rounded-sm" 
              />
              <div className="flex justify-between text-xs text-cyber-electric/70 font-mono tracking-wider px-1">
                <span>INITIALIZING</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
            </div>
          </div>
          <LightningEffect onComplete={handleAnimationComplete} />
          
          {/* System status messages */}
          <div className="absolute bottom-8 left-8 z-40 text-cyber-electric/60 text-xs font-mono">
            <div className={`transition-opacity duration-500 ${progress > 15 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Neural interface connected
            </div>
            <div className={`transition-opacity duration-500 ${progress > 40 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Quantum systems online
            </div>
            <div className={`transition-opacity duration-500 ${progress > 65 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Digital constructs initialized
            </div>
            <div className={`transition-opacity duration-500 ${progress > 85 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Cybernetic integration complete
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Preloader;
