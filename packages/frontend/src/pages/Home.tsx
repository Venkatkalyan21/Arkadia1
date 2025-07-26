import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Gamepad2, 
  Trophy, 
  TrendingUp, 
  Clock,
  MessageSquare,
  Star,
  Zap
} from 'lucide-react';
import { StatCard } from '../components/ui/StatCard';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockGames } from '../data/mockGames';
import { mockActivities } from '../data/mockActivities';
import { GameStats, ActivityItem } from '../types';

const gameStats: GameStats = {
  totalGames: 12,
  activePlayers: 1247,
  tournaments: 5,
  onlineNow: 342
};

const featuredGames = mockGames.slice(0, 3);

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
};

const getActivityIcon = (type: ActivityItem['type']) => {
  switch (type) {
    case 'game_started':
      return <Gamepad2 size={16} className="text-blue-400" />;
    case 'tournament_won':
      return <Trophy size={16} className="text-yellow-400" />;
    case 'achievement':
      return <Star size={16} className="text-purple-400" />;
    default:
      return <Zap size={16} className="text-gray-400" />;
  }
};

export const Home: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center space-x-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg">
            <Zap size={28} className="text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold text-white">Welcome to GameForge</h1>
            <p className="text-lg text-gray-300">Build • Play • Collaborate</p>
          </div>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          Join thousands of gamers in our thriving community. Create games, compete in tournaments, 
          and connect with players from around the world.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <StatCard
          label="Total Games"
          value={gameStats.totalGames}
          icon={<Gamepad2 size={20} />}
        />
        <StatCard
          label="Active Players"
          value={gameStats.activePlayers}
          icon={<Users size={20} />}
        />
        <StatCard
          label="Live Tournaments"
          value={gameStats.tournaments}
          icon={<Trophy size={20} />}
        />
        <StatCard
          label="Online Now"
          value={gameStats.onlineNow}
          icon={<TrendingUp size={20} />}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Games */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Featured Games</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <Card key={game.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                        {game.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-medium">{game.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {game.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users size={14} />
                    <span className="text-xs">{game.playerCount.toLocaleString()}</span>
                  </div>
                  <Button variant="primary" size="sm">
                    {game.status === 'available' ? 'Play' : 'Soon'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          
          <Card className="h-fit">
            <div className="space-y-4">
              {mockActivities.slice(0, 6).map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <div className="flex-shrink-0 p-2 bg-slate-700/50 rounded-lg">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium">
                      {activity.user}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {activity.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-blue-400">{activity.game}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500 flex items-center space-x-1">
                        <Clock size={10} />
                        <span>{formatTimeAgo(activity.timestamp)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-700">
              <Button variant="ghost" className="w-full justify-center">
                <MessageSquare size={16} className="mr-2" />
                View All Activity
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="text-center group cursor-pointer">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform">
            <Gamepad2 size={32} className="text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Create Game</h3>
          <p className="text-gray-400 text-sm mb-4">
            Build your own game and share it with the community
          </p>
          <Button variant="primary" className="w-full">Get Started</Button>
        </Card>

        <Card className="text-center group cursor-pointer">
          <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform">
            <Trophy size={32} className="text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Join Tournament</h3>
          <p className="text-gray-400 text-sm mb-4">
            Compete against other players in exciting tournaments
          </p>
          <Button variant="secondary" className="w-full">Join Now</Button>
        </Card>

        <Card className="text-center group cursor-pointer">
          <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform">
            <Users size={32} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Browse Games</h3>
          <p className="text-gray-400 text-sm mb-4">
            Discover new games and connect with other players
          </p>
          <Button variant="outline" className="w-full">Explore</Button>
        </Card>
      </motion.div>
    </div>
  );
};