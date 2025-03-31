
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  const handlePreloaderComplete = () => {
    setLoading(false);
  };
  
  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyber-dark to-cyber-charcoal p-8 transition-opacity duration-1000 ease-in-out">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="text-cyber-neon">Synapse</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore the next generation cyberpunk digital experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-black/30 border border-cyber-neon/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-cyber-neon">Neural Networks</h2>
              <p className="text-gray-300">
                Advanced AI interfaces with cutting-edge neural mapping technology.
              </p>
            </div>
            
            <div className="bg-black/30 border border-cyber-neon/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-cyber-electric">Digital Constructs</h2>
              <p className="text-gray-300">
                Explore virtual environments built with next-gen rendering engines.
              </p>
            </div>
            
            <div className="bg-black/30 border border-cyber-neon/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-cyber-purple">Quantum Systems</h2>
              <p className="text-gray-300">
                Harnessing quantum computing for unprecedented processing power.
              </p>
            </div>
            
            <div className="bg-black/30 border border-cyber-neon/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-cyber-neon">Cybernetic Integration</h2>
              <p className="text-gray-300">
                Seamless human-machine interfaces that redefine digital interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
