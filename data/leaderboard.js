export const leaderboardData = [
  { rank: 1, name: 'KRATOS', score: 125000, level: 50, kills: 3420, deaths: 89 },
  { rank: 2, name: 'THOR', score: 118500, level: 48, kills: 3150, deaths: 120 },
  { rank: 3, name: 'ODIN', score: 112000, level: 47, kills: 2980, deaths: 95 },
  { rank: 4, name: 'FREYA', score: 105500, level: 45, kills: 2750, deaths: 150 },
  { rank: 5, name: 'ATREUS', score: 98000, level: 42, kills: 2450, deaths: 180 },
  { rank: 6, name: 'BROK', score: 92500, level: 40, kills: 2300, deaths: 200 },
  { rank: 7, name: 'SINDRI', score: 88000, level: 39, kills: 2180, deaths: 210 },
  { rank: 8, name: 'MIMIR', score: 83500, level: 38, kills: 2050, deaths: 225 },
  { rank: 9, name: 'ANGRBODA', score: 79000, level: 37, kills: 1920, deaths: 240 },
  { rank: 10, name: 'THRUD', score: 74500, level: 36, kills: 1800, deaths: 255 },
  { rank: 11, name: 'HEIMDALL', score: 70000, level: 35, kills: 1680, deaths: 270 },
  { rank: 12, name: 'SURTR', score: 65500, level: 34, kills: 1550, deaths: 285 },
  { rank: 13, name: 'FENRIR', score: 61000, level: 33, kills: 1420, deaths: 300 },
  { rank: 14, name: 'JORMUNGANDR', score: 56500, level: 32, kills: 1300, deaths: 315 },
  { rank: 15, name: 'VALKYRIE', score: 52000, level: 31, kills: 1180, deaths: 330 },
  { rank: 16, name: 'BALDUR', score: 47500, level: 30, kills: 1050, deaths: 345 },
  { rank: 17, name: 'MAGNI', score: 43000, level: 29, kills: 920, deaths: 360 },
  { rank: 18, name: 'MODI', score: 38500, level: 28, kills: 800, deaths: 375 },
  { rank: 19, name: 'HRAESVELGR', score: 34000, level: 27, kills: 680, deaths: 390 },
  { rank: 20, name: 'RATATOSKR', score: 29500, level: 26, kills: 560, deaths: 405 }
];

export const topFive = leaderboardData.slice(0, 5);
export const restOfPlayers = leaderboardData.slice(5);

