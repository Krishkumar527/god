import React from 'react';
import { topFive } from '../data/leaderboard';

const MiddlePanel = () => {
  const getRankEmoji = (rank) => {
    switch (rank) {
      case 1: return '🪓';  // Kratos - Axe
      case 2: return '⚒️';  // Thor - Hammer
      case 3: return '🪃';  // Odin - Spear
      case 4: return '⚔️';  // Freya - Sword
      case 5: return '🏹';  // Atreus - Bow
      default: return '⚡';
    }
  };

  return (
    <div className="flex-1 p-8 flex flex-col overflow-y-auto relative">
      {/* Transparent background layer */}
      <div className="absolute inset-0 bg-transparent z-0"></div>

      <div className="relative z-10 flex flex-col">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">TOP 5 TEAMS</h2>
          <p className="text-lg text-gray-300">Leaderboard Summary</p>
        </div>

        <div className="space-y-5">
          {topFive.map((player) => (
            <div
              key={player.rank}
              className="rounded-2xl p-6 border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                
                {/* Left Side */}
                <div className="flex items-center gap-5 flex-1">
                  {/* Rank Emoji + Badge */}
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{getRankEmoji(player.rank)}</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/40 text-white font-bold text-lg shadow-md backdrop-blur-sm">
                      {player.rank}
                    </div>
                  </div>

                  {/* Team Name */}
                  <div>
                    <div className="text-2xl font-extrabold text-white drop-shadow-sm">
                      {player.name}
                    </div>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right">
                  <div className="text-3xl font-bold text-white mb-1 drop-shadow-sm">
                    {player.score.toLocaleString()}
                  </div>
                  <div className="text-sm text-white/80">Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
