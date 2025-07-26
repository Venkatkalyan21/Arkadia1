

## 🤖 Bot README.md


# 🤖 GameForge Discord Bot

Advanced Discord bot providing gaming features, tournaments, and seamless integration with the GameForge web platform.

## 🚀 Overview

The GameForge bot brings the gaming community platform directly into Discord servers with interactive games, tournament management, and real-time synchronization with the web dashboard.

## 🛠️ Tech Stack

- **Framework**: Discord.js v14 with TypeScript
- **Commands**: Slash commands + Message commands support
- **Real-time**: WebSocket integration with backend
- **Architecture**: Modular command system with auto-loading
- **Database**: Shared with backend for cross-platform sync

## 📁 Project Structure

```
src/
├── core/                   # Bot infrastructure
│   ├── client.ts          # Extended Discord client
│   ├── handlers/          # Command and event handlers
│   └── middleware/        # Bot middleware (permissions, cooldowns)
├── games/                 # Game-specific modules
│   ├── trivia/           # Trivia game commands and logic
│   ├── tournament/       # Tournament management commands
│   └── template/         # Template for new game modules
├── slashCommands/        # Slash command definitions
├── messageCommands/      # Message-based commands
├── events/               # Discord event handlers
└── utils/                # Utility functions and helpers
```

## 🎮 Bot Features

### Core Commands
- `/ping` - Test bot connectivity and latency
- `/help` - Display available commands and features
- `/info` - Bot information and statistics

### Game Commands
```
/trivia start              # Start trivia game in channel
/trivia join               # Join ongoing trivia game
/trivia stats              # View your trivia statistics
/tournament create   # Create new tournament
/tournament join       # Join existing tournament
/tournament list           # List active tournaments
```

### Management Commands
```
/game leaderboard          # Show server leaderboards
/game stats          # View player statistics
/settings prefix   # Change bot prefix (admins)
/settings features         # Enable/disable bot features
```

## 🚀 Development Setup

### Prerequisites
- Node.js 18+
- Discord Application with bot token
- pnpm (recommended)

### Bot Setup
1. **Create Discord Application**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create new application
   - Navigate to "Bot" section
   - Copy bot token

2. **Set Bot Permissions**
   - Send Messages
   - Use Slash Commands
   - Embed Links
   - Add Reactions
   - Read Message History

### Installation
```
# From project root
cd packages/bot

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Add your Discord bot token and IDs

# Start development
pnpm dev
```

### Environment Variables
```
DISCORD_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_bot_client_id
DISCORD_GUILD_ID=your_test_server_id
API_BASE_URL=http://localhost:3001
BOT_PREFIX=gf!
```

## 📋 Available Scripts

```
pnpm dev          # Start bot with hot reload
pnpm start        # Start production bot
pnpm build        # Build TypeScript
pnpm deploy       # Deploy slash commands to Discord
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript validation
```

## 🎯 Contributing

### 🟢 Beginner Tasks
- **Simple Commands**: Basic slash commands with embeds
- **Message Responses**: Interactive bot responses
- **Help Documentation**: Command help text and examples
- **Error Messages**: User-friendly error handling

### 🟡 Intermediate Tasks
- **Game Logic**: Complete game implementations
- **Tournament System**: Bracket management and progression
- **Event Handlers**: Discord event processing
- **Database Integration**: Player statistics and game data

### 🔴 Advanced Tasks
- **Advanced Permissions**: Role-based access control
- **Performance Optimization**: Command caching and rate limiting
- **Cross-Server Features**: Multi-guild tournament support
- **AI Integration**: Smart game recommendations and moderation

## 🎮 Game Development

### Adding New Games
1. **Copy Template**
   ```
   cp -r src/games/template src/games/your-game
   ```

2. **Implement Commands**
   ```
   // src/games/your-game/commands/start.ts
   export const startCommand = {
     data: new SlashCommandBuilder()
       .setName('your-game')
       .setDescription('Start your game'),
     
     async execute(client, interaction) {
       // Game logic here
     }
   };
   ```

3. **Auto-Registration**
   - Commands are automatically loaded and registered
   - No manual registration required

### Game Module Structure
```
src/games/your-game/
├── commands/          # Slash and message commands
├── events/           # Game-specific Discord events
├── logic/            # Core game logic
├── utils/            # Game utility functions
└── types.ts          # Game-specific TypeScript types
```

## 🔧 Command System

### Slash Commands
```
// Auto-loaded from slashCommands/ directory
export const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('example')
    .setDescription('Example command'),
  
  async execute(client, interaction) {
    await interaction.reply('Hello World!');
  }
};
```

### Message Commands
```
// Auto-loaded from messageCommands/ directory
export const command: MessageCommand = {
  name: 'example',
  description: 'Example message command',
  aliases: ['ex', 'test'],
  
  async execute(client, message, args) {
    await message.reply('Hello World!');
  }
};
```

## 🛡️ Security & Permissions

### Built-in Security
- **Rate Limiting**: Per-user command cooldowns
- **Permission Checks**: Role and channel restrictions
- **Input Validation**: Sanitized user inputs
- **Error Handling**: Safe error responses

### Permission Levels
```
// Command permission examples
permissions: ['SEND_MESSAGES', 'EMBED_LINKS']
requiredRoles: ['Admin', 'Moderator']
ownerOnly: true
guildOnly: true
```

## 📊 Features & Integrations

### Real-time Sync
- **Web Dashboard**: Commands trigger web updates
- **Live Statistics**: Real-time player counts and scores
- **Cross-platform**: Discord ↔ Web seamless experience

### Advanced Features
- **Embed Builder**: Rich, interactive message embeds
- **Button Components**: Interactive game controls
- **Modal Forms**: Data collection and input
- **Select Menus**: Multi-option game selections

### Error Handling
```
// Comprehensive error handling
try {
  await gameLogic.execute();
} catch (error) {
  await interaction.reply({
    content: '❌ Game error occurred!',
    ephemeral: true
  });
  logger.error('Game execution failed:', error);
}
```

## 🔗 API Integration

The bot communicates with the backend via:
- **REST API**: Game data and user statistics
- **WebSocket**: Real-time game events and updates
- **Shared Database**: Cross-platform data consistency

## 📈 Performance Optimization

- **Command Caching**: Frequently used data cached
- **Connection Pooling**: Efficient API connections
- **Memory Management**: Proper cleanup of game sessions
- **Rate Limiting**: Prevents API abuse and spam

## 🧪 Testing

```
# Test individual commands
pnpm test:commands

# Test game logic
pnpm test:games

# Integration testing with backend
pnpm test:integration
```

## 🚀 Deployment

### Development
```
pnpm dev  # Auto-deploys commands to test server
```

### Production
```
pnpm build
pnpm start
```

### Hosting Options
- **VPS/Dedicated Server** (recommended)
- **Heroku** with worker dyno
- **Railway** or similar platforms
- **Docker** containerization

---
