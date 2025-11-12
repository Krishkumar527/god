import React from 'react';

const RightPanel = () => {
  return (
    <div 
      className="w-96 relative overflow-hidden"
    >
      {/* Background Overlay - Very transparent so overall background shows */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Character Display Area */}
      <div className="h-full flex items-center justify-center relative z-20">
        {/* Character Image */}
        <div className="relative flex items-center justify-center p-4">
          <img
            src="/db28eb58db7828789bf3a1b2c6f0fafc-removebg-preview.png"
            alt="Character"
            className="w-[600px] h-auto max-h-[100vh] object-contain rounded-lg shadow-2xl bg-gray-900/20 backdrop-blur-sm"
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

