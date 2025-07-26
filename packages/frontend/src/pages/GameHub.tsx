import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { GameCard } from '../components/games/GameCard';
import { ComingSoonPopup } from '../components/ui/ComingSoonPopup';
import { Button } from '../components/ui/Button';
import { mockGames } from '../data/mockGames';
import { Game } from '../types';
import { useNavigate } from 'react-router-dom';

type GameCategory = 'all' | 'web' | 'discord' | 'hybrid';
type SortOption = 'newest' | 'popular' | 'rating' | 'alphabetical';

export const GameHub: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string>('');

  const categories = [
    { key: 'all' as const, label: 'All Games', count: mockGames.length },
    { key: 'web' as const, label: 'Web Games', count: mockGames.filter(g => g.category === 'web').length },
    { key: 'discord' as const, label: 'Discord Games', count: mockGames.filter(g => g.category === 'discord').length },
    { key: 'hybrid' as const, label: 'Hybrid Games', count: mockGames.filter(g => g.category === 'hybrid').length }
  ];

  const sortOptions = [
    { key: 'popular' as const, label: 'Most Popular' },
    { key: 'newest' as const, label: 'Newest First' },
    { key: 'rating' as const, label: 'Highest Rated' },
    { key: 'alphabetical' as const, label: 'A to Z' }
  ];

  const filteredAndSortedGames = useMemo(() => {
    let games = mockGames;

    // Filter by search term
    if (searchTerm) {
      games = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      games = games.filter(game => game.category === selectedCategory);
    }

    // Sort games
    switch (sortBy) {
      case 'newest':
        // Mock newest first (reverse order for demo)
        games = [...games].reverse();
        break;
      case 'rating':
        games = [...games].sort((a, b) => b.rating - a.rating);
        break;
      case 'alphabetical':
        games = [...games].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'popular':
      default:
        games = [...games].sort((a, b) => b.playerCount - a.playerCount);
        break;
    }

    return games;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleGameClick = (game: Game) => {
    if (game.status === 'available' && game.id === 'trivia') {
      navigate('/games/trivia');
    } else {
      setSelectedGame(game.title);
      setShowComingSoon(true);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Game Hub</h1>
        <p className="text-gray-400">
          Discover and play amazing games created by our community
        </p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 space-y-4"
      >
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-gray-400" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.key
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {sortOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Games Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filteredAndSortedGames.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No games found</div>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filteredAndSortedGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <GameCard
                  game={game}
                  onPlay={handleGameClick}
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Coming Soon Popup */}
      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        gameName={selectedGame}
      />
    </div>
  );
};