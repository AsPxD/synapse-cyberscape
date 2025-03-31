
import React, { useEffect, useState } from 'react';
import { Shield, Star, Zap } from 'lucide-react';
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
  
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        handleAnimationComplete();
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [progress]);
  
  return (
    <div 
      className={`fixed inset-0 bg-marvel-dark-blue flex flex-col items-center justify-center overflow-hidden transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ 
        zIndex: 9999,
        transition: 'opacity 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)' 
      }}
    >
      {/* Background grid with stars */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMC41IiBmaWxsPSIjNjBDREZGIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-60" />
      
      {/* Starfield effect */}
      <div className="absolute inset-0 pointer-events-none">
        {loaded && Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-star-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>
      
      {loaded && (
        <>
          {/* Shield background effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 
                         bg-marvel-red rounded-full opacity-10 animate-shield-pulse"></div>
          
          {/* Main Shield Icon */}
          <div className="relative z-40 mb-12">
            <Shield 
              className="h-32 w-32 text-marvel-red stroke-2 drop-shadow-lg animate-shield-pulse"
              strokeWidth={0.5}
              fill="#ED1D24"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Star
                className="h-16 w-16 text-marvel-silver stroke-1"
                fill="#C0C0C0"
              />
            </div>
          </div>
          
          {/* Marvel Text */}
          <div className="relative z-40 flex flex-col items-center space-y-8 mb-12">
            <h1 className="text-6xl font-extrabold tracking-wide text-marvel-red drop-shadow-lg" 
                style={{ 
                  fontFamily: 'Impact, sans-serif',
                  letterSpacing: '1px',
                  textShadow: '0 0 10px rgba(237, 29, 36, 0.7)'
                }}>
              MARVEL
            </h1>
            
            {/* Progress indicator */}
            <div className="w-64 space-y-2">
              <Progress 
                value={progress} 
                className="h-2 bg-marvel-dark-blue overflow-hidden border border-marvel-red/30 rounded-sm" 
              />
              <div className="flex justify-between text-xs text-marvel-silver font-mono tracking-wider px-1">
                <span>ASSEMBLING</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
            </div>
          </div>
          
          {/* Energy Pulse Effect */}
          <div className="absolute bottom-0 w-full h-32 overflow-hidden z-10">
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-marvel-energy/30 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-marvel-energy/20 animate-pulse-glow"></div>
          </div>
          
          {/* System status messages */}
          <div className="absolute bottom-8 left-8 z-40 text-marvel-silver text-xs font-mono">
            <div className={`transition-opacity duration-500 ${progress > 15 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Shield systems online
            </div>
            <div className={`transition-opacity duration-500 ${progress > 40 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Quantum realm stabilized
            </div>
            <div className={`transition-opacity duration-500 ${progress > 65 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Avengers database connected
            </div>
            <div className={`transition-opacity duration-500 ${progress > 85 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Infinity stones calibrated
            </div>
          </div>
          
          {/* Power Surges */}
          {progress > 20 && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Zap
                    className="text-marvel-energy animate-pulse-glow"
                    size={24 + Math.random() * 16}
                    style={{ animationDelay: `${i * 0.7}s` }}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Preloader;
