
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  
  const handlePreloaderComplete = () => {
    setLoading(false);
    // Short delay before showing content with animation
    setTimeout(() => {
      setContentVisible(true);
    }, 300);
  };
  
  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <div 
        className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyber-dark to-cyber-charcoal p-8 transition-all duration-1000 ease-in-out ${
          contentVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-2xl relative">
          {/* Main heading with enhanced effects */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white relative inline-block">
            Welcome to{' '}
            <span className="relative inline-block">
              <span className="text-cyber-neon relative z-10">Synapse</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-neon/0 via-cyber-neon/30 to-cyber-neon/0 blur-xl -z-0"></span>
            </span>
            
            {/* Sparkle icon */}
            <Sparkles 
              className="absolute -top-8 -right-8 text-cyber-electric opacity-70 animate-pulse-glow" 
              size={32}
            />
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-lg mx-auto">
            Explore the next generation cyberpunk digital experience with cutting-edge technology
          </p>
          
          {/* Feature cards with enhanced animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: "Neural Networks",
                description: "Advanced AI interfaces with cutting-edge neural mapping technology.",
                color: "text-cyber-neon",
                delay: 0
              },
              {
                title: "Digital Constructs",
                description: "Explore virtual environments built with next-gen rendering engines.",
                color: "text-cyber-electric",
                delay: 0.1
              },
              {
                title: "Quantum Systems",
                description: "Harnessing quantum computing for unprecedented processing power.",
                color: "text-cyber-purple",
                delay: 0.2
              },
              {
                title: "Cybernetic Integration",
                description: "Seamless human-machine interfaces that redefine digital interaction.",
                color: "text-cyber-neon",
                delay: 0.3
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-black/30 border border-cyber-neon/20 rounded-lg p-6 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:border-cyber-neon/40 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(51,195,240,0.15)]"
                style={{ 
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${0.5 + feature.delay}s`
                }}
              >
                <h2 className={`text-2xl font-bold mb-3 ${feature.color} flex items-center`}>
                  {feature.title}
                </h2>
                <p className="text-gray-300">
                  {feature.description}
                </p>
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-cyber-electric/30 to-transparent mt-4 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
