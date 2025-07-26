export interface Tournament {
  id: string;
  name: string;
  description?: string;
  organizerId: string;
  guildId: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  maxParticipants?: number;
  participants: Participant[];
  matches: Match[];
  createdAt: Date;
  startDate?: Date;
  endDate?: Date;
}

// Helper type for tournament creation
export type TournamentInput = Omit<Tournament, 'id' | 'createdAt' | 'participants' | 'matches'> & {
  participants?: Participant[];
  matches?: Match[];
};

export interface Participant {
  userId: string;
  username: string;
  joinedAt: Date;
  isActive: boolean;
}

export interface Match {
  id: string;
  tournamentId: string;
  player1Id: string;
  player2Id: string;
  winnerId?: string;
  status: 'scheduled' | 'active' | 'completed' | 'cancelled';
  round: number;
  scheduledAt?: Date;
  completedAt?: Date;
}
