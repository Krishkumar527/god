import React from 'react';
import { restOfPlayers } from '../data/leaderboard';
const LeftPanel = () => {
  return (
    <div className="w-80 border-r border-blue-600/20 flex flex-col h-full relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/700 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header *

        {/* Players List */}
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-3">
          <h2 className="text-3xl font-bold text-white mb-6">Positions 6-20</h2>
            {restOfPlayers.map((player, index) => (
              <div
                key={player.rank}
                className="px-2 py-3 rounded-lg border border-blue-600/30 bg-blue-900/20 hover:bg-blue-900/40 transition-all flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  {/* Position Number (Simpler & Cleaner) */}
                  <span className="text-sm font-bold text-white opacity-80 w-6 text-right">
                    {player.rank}  
                  </span>

                  {/* Team Name */}
                  <span className="text-base font-semibold text-white">
                    {player.name}
                  </span>
                </div>

                {/* Score */}
                <span className="text-sm font-bold text-white">
                  {player.score.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
