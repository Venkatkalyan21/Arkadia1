## 🌐 Frontend README.md


# 🎨 GameForge Frontend

Modern React-based web dashboard for the GameForge gaming community platform.

## 🚀 Overview

The frontend provides a sleek, responsive web interface for managing games, tournaments, and community features. Built with React 18, TypeScript, and Tailwind CSS for modern development practices.

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and builds
- **Styling**: Tailwind CSS with dark gaming theme
- **Routing**: React Router v6
- **State Management**: React Context + Custom Hooks
- **Real-time**: Socket.io client for live updates
- **HTTP Client**: Axios for API communication

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (sidebar, header)
│   └── games/           # Game-specific components
├── pages/
│   ├── Home.tsx         # Dashboard homepage
│   ├── GameHub.tsx      # Games listing and discovery
│   └── games/           # Individual game pages
├── hooks/               # Custom React hooks
├── contexts/            # React Context providers
├── services/            # API service functions
├── types/               # TypeScript type definitions
└── styles/              # Global styles and themes
```

## 🎮 Features

- **Game Dashboard**: Overview of available games and tournaments
- **Real-time Updates**: Live game statistics and player counts
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Gaming Theme**: Modern UI optimized for gaming communities
- **Game Categories**: Filter by web games, Discord games, multiplayer, etc.
- **Tournament Management**: View brackets, scores, and schedules

## 🚀 Development Setup

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Installation
```
# From project root
cd packages/frontend

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Environment Variables
Create `.env` file:
```
VITE_API_BASE_URL=http://localhost:3001
VITE_SOCKET_URL=http://localhost:3001
```

## 🎯 Contributing

### 🟢 Beginner Tasks
- **UI Components**: Create reusable buttons, cards, modals
- **Game Cards**: Design game thumbnail components
- **Responsive Design**: Mobile optimization
- **Icon Integration**: Add gaming-themed icons

### 🟡 Intermediate Tasks
- **Game Pages**: Complete game interfaces (trivia, tic-tac-toe)
- **Tournament Brackets**: Visual bracket displays
- **Real-time Features**: WebSocket integration for live updates
- **Form Handling**: Game creation and settings forms

### 🔴 Advanced Tasks
- **Performance Optimization**: Code splitting, lazy loading
- **Advanced Animations**: Framer Motion integration
- **PWA Features**: Service workers, offline functionality
- **Accessibility**: WCAG compliance and screen reader support

## 📋 Available Scripts

```
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks
```

## 🎨 Styling Guidelines

### Theme Colors
```
/* Primary Colors */
--primary: #00D4FF      /* Electric Blue */
--secondary: #8B5CF6    /* Purple */
--accent: #A855F7       /* Purple Accent */

/* Dark Theme */
--bg-primary: #0F172A   /* Deep Dark */
--bg-secondary: #1E293B /* Card Background */
--text-primary: #FFFFFF /* Main Text */
--text-secondary: #94A3B8 /* Muted Text */
```

### Component Patterns
- **Cards**: Glassmorphism with subtle borders
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Active states with accent colors
- **Gaming Elements**: Neon accents and smooth animations

## 🔗 API Integration

The frontend communicates with the backend via:
- **REST API**: CRUD operations for games, tournaments
- **WebSocket**: Real-time updates and multiplayer features
- **Socket.io**: Event-based communication for live features

## 📱 Responsive Breakpoints

```
/* Mobile First Approach */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
2xl: 1536px  /* Large screens */
```

## 🧪 Testing

```
# Run tests (when implemented)
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

## 🚀 Deployment

The frontend builds to static files and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

Build outputs to `dist/` directory.

---

**Need help?** Check our [Contributing Guide](../../CONTRIBUTING.md) or join our [Discord](https://discord.gg/gameforge)!
```
