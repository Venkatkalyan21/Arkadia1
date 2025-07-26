import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Play, Clock } from 'lucide-react';
import { Game } from '../../types';
import { Button } from '../ui/Button';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-xl group"
    >
      {/* Game Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {game.status === 'available' ? (
            <span className="px-2 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
              Available
            </span>
          ) : (
            <span className="px-2 py-1 bg-yellow-500/90 text-white text-xs font-medium rounded-full flex items-center space-x-1">
              <Clock size={12} />
              <span>Coming Soon</span>
            </span>
          )}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer"
            onClick={() => onPlay(game)}
          >
            <Play size={32} className="text-white fill-current" />
          </motion.div>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{game.rating}</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {game.description}
        </p>

        {/* Game Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <Users size={16} />
            <span className="text-sm">{game.playerCount.toLocaleString()} players</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {game.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant={game.status === 'available' ? 'primary' : 'outline'}
          className="w-full"
          onClick={() => onPlay(game)}
        >
          {game.status === 'available' ? 'Play Now' : 'Coming Soon'}
        </Button>
      </div>
    </motion.div>
  );
};