import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, RotateCcw, ArrowLeft } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';

interface TriviaResultsProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onBack: () => void;
}

export const TriviaResults: React.FC<TriviaResultsProps> = ({
  score,
  totalQuestions,
  onPlayAgain,
  onBack
}) => {
  const percentage = Math.round((score / (totalQuestions * 100)) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! 🏆", color: "text-yellow-400" };
    if (percentage >= 75) return { message: "Excellent Work! 🌟", color: "text-green-400" };
    if (percentage >= 60) return { message: "Good Job! 👍", color: "text-blue-400" };
    if (percentage >= 40) return { message: "Not Bad! 👌", color: "text-purple-400" };
    return { message: "Keep Practicing! 💪", color: "text-red-400" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="text-center">
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6"
            >
              <Trophy size={48} className="text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Game Complete!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-xl font-semibold ${performance.color}`}
            >
              {performance.message}
            </motion.p>
          </div>

          {/* Score Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-1">
                {score}
              </div>
              <div className="text-gray-400 text-sm">Total Score</div>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {percentage}%
              </div>
              <div className="text-gray-400 text-sm">Accuracy</div>
            </div>
          </motion.div>

          {/* Performance Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-slate-800/50 rounded-lg p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center space-x-2">
              <Star className="text-yellow-400" size={20} />
              <span>Performance Breakdown</span>
            </h3>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {Math.floor(score / 100)}
                </div>
                <div className="text-gray-400">Correct</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-1">
                  {totalQuestions - Math.floor(score / 100)}
                </div>
                <div className="text-gray-400">Incorrect</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {totalQuestions}
                </div>
                <div className="text-gray-400">Total</div>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onPlayAgain}
              className="flex-1 flex items-center justify-center space-x-2"
            >
              <RotateCcw size={20} />
              <span>Play Again</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onBack}
              className="flex-1 flex items-center justify-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Back to Hub</span>
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};