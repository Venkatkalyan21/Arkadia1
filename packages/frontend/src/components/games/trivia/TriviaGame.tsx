import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Trophy, ArrowLeft } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';
import { TriviaQuestion } from '../../../types';
import { triviaQuestions } from '../../../data/triviaQuestions';

interface TriviaGameProps {
  onBack: () => void;
  onGameEnd: (score: number, totalQuestions: number) => void;
}

export const TriviaGame: React.FC<TriviaGameProps> = ({ onBack, onGameEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameQuestions, setGameQuestions] = useState<TriviaQuestion[]>([]);

  // Initialize game with random 10 questions
  useEffect(() => {
    const shuffled = [...triviaQuestions].sort(() => 0.5 - Math.random());
    setGameQuestions(shuffled.slice(0, 10));
  }, []);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !showResult && selectedAnswer === null) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      handleAnswerSelect(-1); // Auto-select wrong answer when time runs out
    }
  }, [timeLeft, showResult, selectedAnswer]);

  // Reset timer for new question
  useEffect(() => {
    setTimeLeft(15);
  }, [currentQuestionIndex]);

  const currentQuestion = gameQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === currentQuestion?.correctAnswer) {
      const timeBonus = Math.max(0, timeLeft - 5); // Bonus points for speed
      setScore(score + 100 + timeBonus * 10);
    }

    // Move to next question after showing result
    setTimeout(() => {
      if (currentQuestionIndex + 1 < gameQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Game ended
        onGameEnd(score + (answerIndex === currentQuestion?.correctAnswer ? 100 + Math.max(0, timeLeft - 5) * 10 : 0), gameQuestions.length);
      }
    }, 2000);
  };

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2">
          <ArrowLeft size={20} />
          <span>Back to Hub</span>
        </Button>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-yellow-400">
            <Trophy size={20} />
            <span className="font-bold">{score} points</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock size={20} className={timeLeft <= 5 ? 'text-red-400' : 'text-blue-400'} />
            <span className={`font-bold ${timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Question {currentQuestionIndex + 1} of {gameQuestions.length}</span>
          <span className="text-gray-400">{Math.round(((currentQuestionIndex) / gameQuestions.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex) / gameQuestions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card className="mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            {currentQuestion.question}
          </h2>
          
          {/* Timer Circle */}
          <div className="relative w-16 h-16 mx-auto">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-slate-600"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className={timeLeft <= 5 ? 'text-red-400' : 'text-blue-400'}
                strokeLinecap="round"
                initial={{ pathLength: 1 }}
                animate={{ pathLength: timeLeft / 15 }}
                transition={{ duration: 0.1 }}
                strokeDasharray="175.929"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-xl font-bold ${timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
                {timeLeft}
              </span>
            </div>
          </div>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {currentQuestion.options.map((option, index) => {
              let buttonClass = 'w-full p-4 text-left border-2 transition-all duration-200 ';
              
              if (selectedAnswer === null) {
                buttonClass += 'border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 text-white';
              } else if (index === currentQuestion.correctAnswer) {
                buttonClass += 'border-green-500 bg-green-500/20 text-green-400';
              } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                buttonClass += 'border-red-500 bg-red-500/20 text-red-400';
              } else {
                buttonClass += 'border-slate-600 text-gray-400';
              }

              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={buttonClass + 'rounded-lg font-medium'}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Result Message */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center"
            >
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <div className="text-green-400">
                  <p className="text-xl font-bold mb-2">Correct! 🎉</p>
                  <p>+{100 + Math.max(0, timeLeft - 5) * 10} points</p>
                </div>
              ) : (
                <div className="text-red-400">
                  <p className="text-xl font-bold mb-2">Incorrect 😔</p>
                  <p>The correct answer was: {currentQuestion.options[currentQuestion.correctAnswer]}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};