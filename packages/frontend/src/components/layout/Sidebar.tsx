import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Gamepad2, 
  Trophy, 
  User, 
  Settings, 
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/games', icon: Gamepad2, label: 'Game Hub' },
  { to: '/tournaments', icon: Trophy, label: 'Tournaments' },
  { to: '/leaderboard', icon: TrendingUp, label: 'Leaderboard' },
  { to: '/community', icon: Users, label: 'Community' },
  { to: '/profile', icon: User, label: 'Profile' },
  { to: '/settings', icon: Settings, label: 'Settings' }
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg">
            <Zap size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">GameForge</h1>
            <p className="text-xs text-cyan-400/80">Build • Play • Collaborate</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-cyan-400 border border-blue-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
              }`
            }
          >
            {({ isActive }) => (
              <motion.div
                className="flex items-center space-x-3 w-full"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-gray-500 text-center">
          <p>GameForge v1.0</p>
          <p>© 2025 Gaming Community</p>
        </div>
      </div>
    </div>
  );
};