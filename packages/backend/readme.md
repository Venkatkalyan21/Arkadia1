
# 🔧 GameForge Backend

Express.js API server powering the GameForge gaming community platform with real-time features and game management.

## 🚀 Overview

The backend provides a robust API for game management, user authentication, tournament systems, and real-time multiplayer communication. Built with Node.js, Express, and Socket.io for scalable gaming experiences.

## 🛠️ Tech Stack

- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL (development), In-memory (current)
- **Real-time**: Socket.io for WebSocket communication
- **Authentication**: JWT tokens (planned)
- **API Documentation**: OpenAPI/Swagger (planned)
- **Testing**: Jest (planned)

## 📁 Project Structure

```
src/
├── core/                    # Core infrastructure
│   ├── database/           # Database connection and utilities
│   ├── middleware/         # Express middleware
│   └── websockets/         # Socket.io configuration
├── games/                  # Game-specific modules
│   ├── trivia/            # Trivia game logic and API
│   ├── tournament/        # Tournament management
│   └── template/          # Template for new games
├── routes/                # API route definitions
├── models/                # Data models and types
├── services/              # Business logic services
└── utils/                 # Utility functions
```

## 🎮 Current Features

- **Game Management API**: CRUD operations for games and tournaments
- **Real-time Communication**: WebSocket events for live gameplay
- **Tournament System**: Bracket generation and match tracking
- **Player Statistics**: Score tracking and leaderboards
- **Cross-platform Sync**: Discord ↔ Web real-time updates

## 🚀 Development Setup

### Prerequisites
- Node.js 18+
- pnpm (recommended)
- PostgreSQL (for production setup)

### Installation
```
# From project root
cd packages/backend

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Start development server
pnpm dev

# Start production server
pnpm start
```

### Environment Variables
```
PORT=3001
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/gameforge
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret
```

## 📡 API Endpoints

### Game Management
```
GET    /api/games              # List all games
POST   /api/games              # Create new game
GET    /api/games/:id          # Get game details
PUT    /api/games/:id          # Update game
DELETE /api/games/:id          # Delete game
```

### Tournament System
```
GET    /api/tournaments        # List tournaments
POST   /api/tournaments        # Create tournament
GET    /api/tournaments/:id    # Get tournament details
POST   /api/tournaments/:id/join # Join tournament
PUT    /api/tournaments/:id/start # Start tournament
```

### Player Statistics
```
GET    /api/players/:id/stats  # Get player statistics
POST   /api/players/:id/score  # Update player score
GET    /api/leaderboards       # Get leaderboards
```

## ⚡ WebSocket Events

### Client → Server
```
// Join game room
socket.emit('join_game', { gameId, playerId });

// Make game move
socket.emit('game_move', { gameId, move, playerId });

// Join tournament
socket.emit('join_tournament', { tournamentId, playerId });
```

### Server → Client
```
// Game state update
socket.emit('game_update', { gameId, gameState });

// Player joined
socket.emit('player_joined', { gameId, player });

// Tournament bracket update
socket.emit('tournament_update', { tournamentId, bracket });
```

## 🎯 Contributing

### 🟢 Beginner Tasks
- **API Endpoints**: Simple CRUD operations
- **Data Validation**: Request validation middleware
- **Error Handling**: Consistent error responses
- **Documentation**: API endpoint documentation

### 🟡 Intermediate Tasks
- **Game Logic**: Implement specific game rules
- **Tournament Brackets**: Bracket generation algorithms
- **Real-time Events**: Socket.io event handlers
- **Database Integration**: PostgreSQL schema and queries

### 🔴 Advanced Tasks
- **Authentication System**: JWT implementation
- **Performance Optimization**: Caching, database optimization
- **Scalability**: Load balancing, microservices architecture
- **Security**: Rate limiting, input sanitization

## 🗄️ Database Schema

### Current (In-Memory)
```
interface Game {
  id: string;
  name: string;
  type: 'web' | 'discord' | 'hybrid';
  players: Player[];
  status: 'waiting' | 'active' | 'completed';
  createdAt: Date;
}

interface Tournament {
  id: string;
  name: string;
  gameType: string;
  participants: Participant[];
  bracket: Match[];
  status: 'upcoming' | 'active' | 'completed';
}
```

### Planned (PostgreSQL)
- Users table with authentication
- Games table with metadata
- Matches table with game states
- Tournaments table with bracket data
- Statistics table with player metrics

## 📋 Available Scripts

```
pnpm dev          # Start development server with hot reload
pnpm start        # Start production server
pnpm build        # Build TypeScript to JavaScript
pnpm test         # Run test suite (when implemented)
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks
```

## 🔐 Security Considerations

- **Input Validation**: All inputs validated and sanitized
- **Rate Limiting**: API endpoints protected from abuse
- **CORS**: Configured for secure cross-origin requests
- **Authentication**: JWT-based user authentication (planned)
- **Database Security**: Parameterized queries, connection pooling

## 📊 Performance Features

- **Caching**: Redis for session and game state caching (planned)
- **Connection Pooling**: Database connection optimization
- **Compression**: Gzip compression for API responses
- **WebSocket Optimization**: Efficient room-based communication

## 🧪 Testing Strategy

```
# Unit tests for game logic
pnpm test:unit

# Integration tests for API endpoints
pnpm test:integration

# Load testing for WebSocket performance
pnpm test:load
```

## 🚀 Deployment

### Development
```
pnpm dev  # Runs on http://localhost:3001
```

### Production
```
pnpm build
pnpm start
```

### Docker (Planned)
```
FROM node:18-alpine
# Container setup for production deployment
```

## 📈 Monitoring & Logging

- **Health Checks**: `/health` endpoint for monitoring
- **Request Logging**: Morgan middleware for HTTP requests
- **Error Tracking**: Structured error logging
- **Performance Metrics**: Response time and throughput tracking

---


**Need help?** Check our [Bot Commands Guide](../docs/bot-commands.md) or join our [Discord](https://discord.gg/gameforge)!
```
