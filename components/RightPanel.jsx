import React from 'react';

const RightPanel = () => {
  return (
    <div 
      className="w-105 relative overflow-hidden rounded-lg pt-10"
    >
      {/* Background Overlay - Very transparent so overall background shows */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Character Display Area */}
      <div className="h-full flex items-center justify-center relative z-20">
        {/* Character Image */}
        <div className="relative flex items-center justify-center p-4">
          <img
            src="src/06f0b4b4fc75c46809f1020e314486cd-removebg-preview.png"
            alt="Character"
            className="w-[600px] h-auto max-h-[100vh] object-contain rounded-2xl shadow-2xl bg-black/30 "
            style={{ 
              filter: 'brightness(1) contrast(1.1)',
              display: 'block'
            }}
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

