export interface Game {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'discord' | 'hybrid';
  playerCount: number;
  rating: number;
  status: 'available' | 'coming-soon';
  thumbnail: string;
  tags: string[];
}

export interface ActivityItem {
  id: string;
  type: 'game_started' | 'tournament_won' | 'achievement';
  user: string;
  game: string;
  timestamp: Date;
  description: string;
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface GameStats {
  totalGames: number;
  activePlayers: number;
  tournaments: number;
  onlineNow: number;
}