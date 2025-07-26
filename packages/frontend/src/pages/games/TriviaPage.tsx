import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TriviaGame } from '../../components/games/trivia/TriviaGame';
import { TriviaResults } from '../../components/games/trivia/TriviaResults';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useTrivia } from '../../hooks/useTrivia';
import { Brain, Users, Clock, Trophy, Play, ArrowLeft } from 'lucide-react';

export const TriviaPage: React.FC = () => {
  const navigate = useNavigate();
  const { gameState, finalScore, totalQuestions, startGame, endGame, resetGame } = useTrivia();

  const handleBackToHub = () => {
    resetGame();
    navigate('/games');
  };

  if (gameState === 'playing') {
    return (
      <TriviaGame
        onBack={handleBackToHub}
        onGameEnd={endGame}
      />
    );
  }

  if (gameState === 'results') {
    return (
      <TriviaResults
        score={finalScore}
        totalQuestions={totalQuestions}
        onPlayAgain={resetGame}
        onBack={handleBackToHub}
      />
    );
  }

  // Lobby view
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={handleBackToHub}
            className="flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Back to Game Hub</span>
          </Button>
        </div>

        {/* Game Info */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6"
          >
            <Brain size={40} className="text-white" />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-white mb-4">Brain Buster Trivia</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Test your knowledge against friends in this fast-paced trivia challenge! 
            Answer questions quickly to earn bonus points.
          </p>
        </div>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-lg inline-flex mb-4">
              <Clock size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Timed Challenges</h3>
            <p className="text-gray-400 text-sm">
              15 seconds per question. Answer faster for bonus points!
            </p>
          </Card>

          <Card className="text-center">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg inline-flex mb-4">
              <Trophy size={32} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Scoring System</h3>
            <p className="text-gray-400 text-sm">
              Earn points for correct answers with speed bonuses
            </p>
          </Card>

          <Card className="text-center">
            <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-lg inline-flex mb-4">
              <Users size={32} className="text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multiple Categories</h3>
            <p className="text-gray-400 text-sm">
              Questions from gaming, technology, and general knowledge
            </p>
          </Card>
        </div>

        {/* Game Stats */}
        <Card>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">10</div>
              <div className="text-gray-400 text-sm">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">15s</div>
              <div className="text-gray-400 text-sm">Per Question</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">1,247</div>
              <div className="text-gray-400 text-sm">Total Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">4.8</div>
              <div className="text-gray-400 text-sm">Rating</div>
            </div>
          </div>
        </Card>

        {/* How to Play */}
        <Card>
          <h3 className="text-xl font-bold text-white mb-4">How to Play</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium">Read the question carefully</p>
                <p className="text-sm text-gray-400">You have 15 seconds to choose your answer</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium">Select your answer</p>
                <p className="text-sm text-gray-400">Click on one of the four multiple choice options</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium">Earn points</p>
                <p className="text-sm text-gray-400">100 points for correct answers + speed bonus</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Start Game Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={startGame}
            className="px-12 py-4 text-xl flex items-center space-x-3"
          >
            <Play size={24} />
            <span>Start Trivia Game</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};