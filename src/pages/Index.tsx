
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import { Sparkles, Shield, Star, Rocket, Award, Zap, Circle, Square } from 'lucide-react';

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
        className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-marvel-dark-blue to-marvel-black p-8 transition-all duration-1000 ease-in-out ${
          contentVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Hero background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMC41IiBmaWxsPSIjQzBDMEMwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-40"></div>
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-marvel-dark-blue/70 to-transparent"></div>
        </div>
        
        {/* Marvel Logo Shield */}
        <div className="relative mb-10 animate-hero-entrance" style={{ animationDelay: '0.3s' }}>
          <Shield 
            className="h-20 w-20 text-marvel-red stroke-1 drop-shadow-lg"
            strokeWidth={0.5}
            fill="#ED1D24"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Star
              className="h-10 w-10 text-marvel-silver stroke-1"
              fill="#C0C0C0"
            />
          </div>
        </div>
        
        <div className="text-center max-w-3xl relative z-10">
          {/* Main heading with enhanced effects */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white relative inline-block animate-hero-entrance"
              style={{ 
                fontFamily: 'Impact, sans-serif',
                letterSpacing: '2px',
                animationDelay: '0.5s',
                textShadow: '0 0 15px rgba(237, 29, 36, 0.5)'
              }}>
            Welcome to the{' '}
            <span className="relative inline-block">
              <span className="text-marvel-red relative z-10">MARVEL</span>
              <span className="absolute inset-0 bg-gradient-to-r from-marvel-red/0 via-marvel-red/30 to-marvel-red/0 blur-xl -z-0"></span>
            </span>
            {' '}Universe
            
            {/* Sparkle icon */}
            <Sparkles 
              className="absolute -top-8 -right-8 text-marvel-gold opacity-70 animate-pulse-glow" 
              size={32}
            />
          </h1>
          
          <p className="text-xl text-marvel-silver mb-12 max-w-lg mx-auto animate-hero-entrance"
             style={{ animationDelay: '0.7s' }}>
            Explore the legendary universe of heroes, villains, and cosmic wonders that define the Marvel experience
          </p>
          
          {/* Feature cards with enhanced animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Avengers Initiative",
                description: "Join Earth's mightiest heroes in their quest to protect the planet from extraordinary threats.",
                color: "text-marvel-red",
                icon: Shield,
                delay: 0
              },
              {
                title: "Cosmic Powers",
                description: "Harness energy from across the universe, from the Quantum Realm to the far reaches of space.",
                color: "text-marvel-energy",
                icon: Star,
                delay: 0.1
              },
              {
                title: "Super Soldier Program",
                description: "Enhanced strength, agility, and tactical thinking beyond human limitations.",
                color: "text-marvel-light-blue",
                icon: Award,
                delay: 0.2
              },
              {
                title: "Stark Technology",
                description: "Cutting-edge innovations that push the boundaries of what's possible in science and engineering.",
                color: "text-marvel-gold",
                icon: Rocket,
                delay: 0.3
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-marvel-dark-blue/60 border border-marvel-light-blue/20 rounded-lg p-6 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:border-marvel-light-blue/40 hover:bg-marvel-dark-blue/70 hover:shadow-[0_0_15px_rgba(81,140,202,0.25)]"
                style={{ 
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${0.8 + feature.delay}s`,
                  animation: contentVisible ? 'avengers-assemble 1.2s ease-out forwards' : 'none',
                  animationDelay: `${0.8 + feature.delay}s`
                }}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-2.5 rounded-full mr-4 ${feature.color === 'text-marvel-red' ? 'bg-marvel-red/10' : feature.color === 'text-marvel-energy' ? 'bg-marvel-energy/10' : feature.color === 'text-marvel-light-blue' ? 'bg-marvel-light-blue/10' : 'bg-marvel-gold/10'}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${feature.color}`}>
                    {feature.title}
                  </h2>
                </div>
                <p className="text-gray-300 ml-16">
                  {feature.description}
                </p>
                
                {/* Energy signature effect */}
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-marvel-energy/40 to-transparent mt-4 mx-auto"></div>
              </div>
            ))}
          </div>
          
          {/* Infinity Stones */}
          <div className="flex justify-center gap-6 mt-16">
            {['#ED1D24', '#F0E6AA', '#60CDFF', '#8B5CF6', '#00FF00', '#FF8000'].map((color, i) => (
              <div 
                key={i}
                className="w-5 h-5 rounded-full animate-infinity-glow"
                style={{
                  backgroundColor: color,
                  animationDelay: `${i * 0.3}s`,
                  boxShadow: `0 0 10px ${color}`
                }}
              />
            ))}
          </div>
          
          {/* Marvel Universe Footer */}
          <div className="mt-20 text-center text-marvel-silver opacity-70 text-sm">
            <p>© 2023 MARVEL UNIVERSE • ALL RIGHTS RESERVED</p>
          </div>
        </div>
        
        {/* Energy Field Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Circle
                className="text-marvel-energy/20 animate-pulse-glow"
                size={20 + Math.random() * 40}
                style={{ animationDelay: `${i * 0.5}s` }}
                fill="rgba(96, 205, 255, 0.05)"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
