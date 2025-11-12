import React from 'react';

const BottomBar = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/30 border-t border-blue-600/30 flex items-center justify-between px-8 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-700 rounded text-white text-sm font-semibold">X</span>
          <span className="text-gray-300 text-sm">SELECT</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-700 rounded text-white text-sm font-semibold">L3</span>
          <span className="text-gray-300 text-sm">AUTO EQUIP</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-700 rounded text-white text-sm font-semibold">△</span>
          <span className="text-gray-300 text-sm">STATS HELP</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-700 rounded text-white text-sm font-semibold">O</span>
          <span className="text-gray-300 text-sm">EXIT</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-700 rounded text-white text-sm font-semibold">R2</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;

