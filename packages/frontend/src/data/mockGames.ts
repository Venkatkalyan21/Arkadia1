import { Game } from '../types';

export const mockGames: Game[] = [
  {
    id: 'trivia',
    title: 'Brain Buster Trivia',
    description: 'Test your knowledge against friends in this fast-paced trivia challenge!',
    category: 'web',
    playerCount: 1247,
    rating: 4.8,
    status: 'available',
    thumbnail: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['multiplayer', 'trivia', 'competitive']
  },
  {
    id: 'tic-tac-toe',
    title: 'Ultimate Tic-Tac-Toe',
    description: 'Classic game with a modern twist and multiple boards!',
    category: 'web',
    playerCount: 892,
    rating: 4.6,
    status: 'coming-soon',
    thumbnail: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['strategy', '2-player', 'classic']
  },
  {
    id: 'racing',
    title: 'Neon Racing',
    description: 'High-speed racing with customizable cars in futuristic tracks!',
    category: 'web',
    playerCount: 2156,
    rating: 4.9,
    status: 'coming-soon',
    thumbnail: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['racing', 'multiplayer', 'action']
  },
  {
    id: 'word-chain',
    title: 'Word Chain Masters',
    description: 'Build word chains with friends in this vocabulary challenge!',
    category: 'discord',
    playerCount: 654,
    rating: 4.5,
    status: 'coming-soon',
    thumbnail: 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['word-game', 'social', 'educational']
  },
  {
    id: 'drawing',
    title: 'Sketch Battle',
    description: 'Draw and guess in this hilarious multiplayer drawing game!',
    category: 'web',
    playerCount: 1098,
    rating: 4.7,
    status: 'coming-soon',
    thumbnail: 'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['drawing', 'party', 'creative']
  },
  {
    id: 'chess',
    title: 'Royal Chess',
    description: 'Classic chess with tournaments, ratings, and analysis tools!',
    category: 'web',
    playerCount: 3421,
    rating: 4.8,
    status: 'coming-soon',
    thumbnail: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['strategy', 'classic', 'competitive']
  },
  {
    id: 'tower-defense',
    title: 'Cyber Defense',
    description: 'Defend your base with futuristic towers and upgrades!',
    category: 'web',
    playerCount: 1876,
    rating: 4.6,
    status: 'coming-soon',
    thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['strategy', 'tower-defense', 'single-player']
  },
  {
    id: 'battle-royale',
    title: 'Mini Battle Royale',
    description: 'Fast-paced battle royale matches in compact arenas!',
    category: 'web',
    playerCount: 4532,
    rating: 4.9,
    status: 'coming-soon',
    thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['battle-royale', 'action', 'multiplayer']
  }
];