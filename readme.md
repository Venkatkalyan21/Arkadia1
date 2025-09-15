# 🎮 Arkadia - Open Source Gaming Community Platform

[![GSSOC 2025](https://img.shields.io/badge/GSSOC-2025-blue)](https://gssoc.girlscript.tech/)
[![Contributors Welcome](https://img.shields.io/badge/contributors-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Discord](https://img.shields.io/badge/Discord-Community-7289DA)](https://discord.gg/SFJtzVsBj4)

**The ultimate platform where developers collaborate to build, share, and play open source games together.** Please join the discord server https://discord.gg/SFJtzVsBj4 before you start contributing if you have any queries and doubts

---

## 🌟 Vision

Why rely on multiple bots when you can have it all in one?

**Akashic Archives** aims to be the all-in-one solution for Discord communities — a unified platform where users can:

- 🎮 Play a wide variety of games together  
- 🏆 Host and manage tournaments with ease  
- 🛠️ Collaborate on game development and modding  
- 🤝 Engage through interactive, community-driven features

Instead of juggling dozens of bots with fragmented features, **Akashic Archives** delivers a seamless ecosystem built for gamers, developers, and communities alike — **all under one roof.**


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
git clone https://github.com/BhairabMahanta/Arkadia.git
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

## 🚀 Getting Started

Ready to make your first contribution to **Akashic Archives** during **GSSOC 2025**? Follow these simple steps to get started:

1. 📄 **Read our [CONTRIBUTING.md](CONTRIBUTING.md)**  
   Familiarize yourself with the contribution guidelines, coding standards, and PR process.

2. 🔍 **Browse [Open Issues](https://github.com/yourusername/arkadia/issues)**  
   Look for issues labeled based on your experience level:
   - `good first issue` – Ideal for beginners  
   - `help wanted` – For intermediate contributors  
   - `enhancement` or `feature` – For advanced developers

3. 💬 **Join our [Discord Community](https://discord.gg/SFJtzVsBj4)**  
   Connect with mentors, ask questions, and collaborate with fellow contributors.

4. 🛠️ **Start with a `good first issue`**  
   Fork the repository, create a new branch, and begin your contribution. Don’t worry — we’re here to help you along the way!

---

🙌 **Tip:** Every expert was once a beginner. Ask questions, explore, and most importantly — have fun contributing!

## 📖 Documentation

- [Setup Guide](packages/docs/setup.md)
- [Game Development Guide](packages/docs/game-development.md)
- [API Documentation](packages/docs/api.md)
- [Discord Bot Commands](packages/docs/bot-commands.md)
- [Contributing Guidelines](CONTRIBUTING.md)
## 🛠️ Tech Stack

A modern and modular tech stack powers **Akashic Archives**, enabling performance, scalability, and developer productivity.

### 🌐 Frontend
- **React 18** – Component-based UI library for building dynamic interfaces  
- **TypeScript** – Static typing for safer and scalable JavaScript  
- **Vite** – Lightning-fast build tool and development server  
- **Tailwind CSS** – Utility-first CSS framework for responsive design

### 🧠 Backend
- **Node.js** – JavaScript runtime for building scalable server-side applications  
- **Express** – Minimalist framework for building RESTful APIs  
- **Socket.io** – Enables real-time, bidirectional communication  
- **PostgreSQL** – Powerful, open-source relational database system

### 🤖 Discord Bot
- **Discord.js v14** – Powerful library for building Discord bots  
- **TypeScript** – For type safety and maintainability

### 🔄 Real-Time Communication
- **WebSocket (via Socket.io)** – Ensures low-latency, real-time multiplayer and game interactions

### 📦 Package Management
- **pnpm Workspaces** – Fast, disk-efficient package manager with monorepo support


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

