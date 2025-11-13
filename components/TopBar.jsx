import React from 'react';

const TopBar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-15 bg-white/700 flex items-center justify-center z-50">
      <h1 
        className="text-5xl text-white tracking-wide"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: '500',
          letterSpacing: '0.15em',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
        }}
      >
        LEADERBOARD
      </h1>
    </div>
  );
};

export default TopBar;

