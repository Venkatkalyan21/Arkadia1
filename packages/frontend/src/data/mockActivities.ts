import { ActivityItem } from '../types';

export const mockActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'game_started',
    user: 'ProGamer_2024',
    game: 'Brain Buster Trivia',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    description: 'Started a new trivia session'
  },
  {
    id: '2',
    type: 'tournament_won',
    user: 'ChessQueen',
    game: 'Royal Chess',
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    description: 'Won the Weekly Chess Tournament'
  },
  {
    id: '3',
    type: 'achievement',
    user: 'SpeedRacer',
    game: 'Neon Racing',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    description: 'Unlocked "Speed Demon" achievement'
  },
  {
    id: '4',
    type: 'game_started',
    user: 'WordMaster',
    game: 'Word Chain Masters',
    timestamp: new Date(Date.now() - 45 * 60 * 1000),
    description: 'Created a new word chain lobby'
  },
  {
    id: '5',
    type: 'achievement',
    user: 'ArtistPlayer',
    game: 'Sketch Battle',
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    description: 'Earned "Picasso of Gaming" badge'
  },
  {
    id: '6',
    type: 'tournament_won',
    user: 'TriviaKing',
    game: 'Brain Buster Trivia',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    description: 'Dominated the Evening Trivia Championship'
  }
];