import { Tournament, Participant, Match } from '../models/Tournament';

// Simple in-memory database for now
export class TournamentDatabase {
  private tournaments: Map<string, Tournament> = new Map();
  private matches: Map<string, Match> = new Map();

  // Fix: Make participants and matches optional in the input type
  createTournament(
    tournament: Omit<Tournament, 'id' | 'createdAt' | 'participants' | 'matches'>
  ): Tournament {
    const newTournament: Tournament = {
      ...tournament,
      id: Date.now().toString(),
      createdAt: new Date(),
      participants: [],  // Initialize as empty array
      matches: []        // Initialize as empty array
    };
    
    this.tournaments.set(newTournament.id, newTournament);
    return newTournament;
  }

  getTournament(id: string): Tournament | undefined {
    return this.tournaments.get(id);
  }

  getAllTournaments(): Tournament[] {
    return Array.from(this.tournaments.values());
  }

  joinTournament(tournamentId: string, participant: Omit<Participant, 'joinedAt'>): boolean {
    const tournament = this.tournaments.get(tournamentId);
    if (!tournament) return false;

    if (tournament.participants.some(p => p.userId === participant.userId)) {
      return false; // Already joined
    }

    tournament.participants.push({
      ...participant,
      joinedAt: new Date(),
      isActive: true
    });

    return true;
  }

  // Match methods
  createMatch(match: Omit<Match, 'id'>): Match {
    const newMatch: Match = {
      ...match,
      id: Date.now().toString()
    };
    
    this.matches.set(newMatch.id, newMatch);
    
    // Add to tournament
    const tournament = this.tournaments.get(match.tournamentId);
    if (tournament) {
      tournament.matches.push(newMatch);
    }
    
    return newMatch;
  }

  updateMatchWinner(matchId: string, winnerId: string): boolean {
    const match = this.matches.get(matchId);
    if (!match) return false;

    match.winnerId = winnerId;
    match.status = 'completed';
    match.completedAt = new Date();
    
    return true;
  }
}

export const tournamentDB = new TournamentDatabase();
