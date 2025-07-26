export interface User {
  id: string;
  discordId: string;
  username: string;
  discriminator: string;
  avatar?: string;
  createdAt: Date;
}

export interface Tournament {
  id: string;
  name: string;
  description?: string;
  organizerId: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  maxParticipants?: number;
  participants: string[];
  createdAt: Date;
  startDate?: Date;
}

export interface Match {
  id: string;
  tournamentId: string;
  player1Id: string;
  player2Id: string;
  winnerId?: string;
  status: 'pending' | 'active' | 'completed';
  round: number;
  createdAt: Date;
}

export interface TournamentEvent {
  type: 'tournament_created' | 'tournament_updated' | 'match_completed' | 'user_joined';
  tournamentId: string;
  data: any;
  timestamp: Date;
}
