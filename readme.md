# 🎮 Arkadia - Open Source Gaming Community Platform

[![GSSOC 2025](https://img.shields.io/badge/GSSOC-2025-blue)](https://gssoc.girlscript.tech/)
[![Contributors Welcome](https://img.shields.io/badge/contributors-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Discord](https://img.shields.io/badge/Discord-Community-7289DA)](https://discord.gg/SFJtzVsBj4)

**The ultimate platform where developers collaborate to build, share, and play open source games together.** Please join the discord server https://discord.gg/SFJtzVsBj4 before you start contributing if you have any queries and doubts

---

## 🌟 Vision

Instead of Discord servers needing dozens of different gaming bots, Akashic Archives provides an integrated ecosystem where communities can play games, host tournaments, and collaborate on game development - all in one platform.

## ✨ Features

- 🎮 **Multi-Platform Gaming** - Web games + Discord bot games in one ecosystem
- 🏆 **Tournament System** - Automated brackets, leaderboards, and competitions  
- 👥 **Real-Time Collaboration** - Live multiplayer experiences across platforms
- 🛠️ **Game Development Hub** - Tools for creating and sharing community games
- 🤖 **Smart Discord Integration** - Seamless bot commands and web dashboard sync
- 📊 **Analytics & Insights** - Track game performance and community engagement

## 🏗️ Architecture

```
Arkadia/
├── packages/
│   ├── frontend/      # React + Vite web dashboard
│   ├── backend/       # Express.js API server  
│   ├── bot/           # Discord.js gaming bot
│   ├── shared/        # Common TypeScript types
│   ├── assets/        # Game assets and media
│   └── docs/          # Documentation
├── games/             # Community-created games
└── CONTRIBUTING.md    # Contributor guidelines
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm
- Discord Application (for bot features)

### Installation
```
# Clone repository
git clone https://github.com/BhairabMahnta/Arkadia.git
cd Arkadia

# Install dependencies
pnpm install

# Setup environment
cp packages/backend/.env.example packages/backend/.env
cp packages/bot/.env.example packages/bot/.env
cp packages/frontend/.env.example packages/frontend/.env

# Add your Discord bot credentials to .env files

# Start development
pnpm dev
```

### Verification
- **Web Dashboard**: http://localhost:5173
- **API Health**: http://localhost:3001/health  
- **Discord Bot**: Type `/ping` in your test server

## 🎮 Current Games

**✅ Available:**
- Trivia Bot (Discord + Web)
- Tournament System
- Basic Leaderboards

**🚧 In Development:**
- Tic-Tac-Toe Multiplayer
- Racing Game
- Word Chain Game
- Drawing Competitions

## 🤝 Contributing to GSSOC 2025

We welcome contributors of all skill levels! Akashic Archives offers diverse learning opportunities:

### 🟢 Beginner (Good First Issues)
- React UI components
- Game asset creation
- Mini discord bot commands
- Documentation improvements

### 🟡 Intermediate (Help Wanted)  
- Discord bot games
- Game implementations
- API endpoint development
### 🔴 Advanced (Major Features)
- Real-time multiplayer features
- Tournament bracket systems
- Addition of new games / sustainable updates on existing games

### 🔴 Future (Will think later)
- Game engine architecture
- AI integration
- Performance optimization
- Cross-platform synchronization

**Getting Started:**
1. Read [CONTRIBUTING.md](CONTRIBUTING.md)
2. Check [Issues](https://github.com/yourusername/arkadia/issues) labeled with your skill level
3. Join our [Discord Community](https://discord.gg/SFJtzVsBj4)
4. Start with a `good-first-issue`!

## 📖 Documentation

- [Setup Guide](packages/docs/setup.md)
- [Game Development Guide](packages/docs/game-development.md)
- [API Documentation](packages/docs/api.md)
- [Discord Bot Commands](packages/docs/bot-commands.md)
- [Contributing Guidelines](CONTRIBUTING.md)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, Socket.io, PostgreSQL
- **Bot**: Discord.js v14, TypeScript
- **Real-time**: WebSocket (Socket.io)
- **Package Manager**: pnpm workspaces

## 📊 Project Status

- 🎯 **Phase**: Active GSSOC 2025 Development
- 👥 **Contributors**: Open for all skill levels
- 🎮 **Games**: 3 playable, 8+ in development
- 🏆 **Tournaments**: Basic system functional

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 GSSOC 2025

**Organization**: Akashic Archives Community  
**Mentor**: [Your Name]  
**Project Type**: Full-Stack Gaming Platform  
**Difficulty**: Beginner to Advanced  

Join us in building the future of open source gaming communities! 🚀

---
**Made with ❤️ by the Akashic Archives Community**
```

