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

  const getRankGradient = (rank) => {
    switch (rank) {
      case 1:
        return 'from-amber-500 via-orange-600 to-red-700 border-amber-400';
      case 2:
        return 'from-gray-400 via-gray-500 to-gray-700 border-gray-300';
      case 3:
        return 'from-blue-600 via-indigo-700 to-purple-800 border-blue-500';
      case 4:
        return 'from-emerald-600 via-green-700 to-teal-800 border-green-500';
      case 5:
        return 'from-sky-500 via-blue-600 to-blue-800 border-sky-400';
      default:
        return 'from-gray-700 to-gray-900 border-gray-600';
    }
  };

  return (
    <div className="flex-1 p-8 flex flex-col overflow-y-auto relative">
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 flex flex-col">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">TOP 5 TEAMS</h2>
          <p className="text-lg text-white-400">Leaderboard Summary</p>
        </div>

        <div className="space-y-5">
          {topFive.map((player) => (
            <div
              key={player.rank}
              className={`bg-gradient-to-r ${getRankGradient(player.rank)} rounded-xl p-6 border-2 shadow-xl backdrop-blur-sm hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between">
                
                {/* Left Side */}
                <div className="flex items-center gap-5 flex-1">
                  {/* Rank Emoji + Badge */}
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{getRankEmoji(player.rank)}</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/3000 text-white font-bold text-lg shadow-md">
                      {player.rank}
                    </div>
                  </div>

                  {/* Team Name */}
                  <div>
                    <div className="text-2xl font-extrabold text-white">
                      {player.name}
                    </div>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right">
                  <div className="text-3xl font-bold text-white mb-1">
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
