import { useState, useCallback } from 'react';

export type TriviaGameState = 'lobby' | 'playing' | 'results';

export const useTrivia = () => {
  const [gameState, setGameState] = useState<TriviaGameState>('lobby');
  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startGame = useCallback(() => {
    setGameState('playing');
  }, []);

  const endGame = useCallback((score: number, total: number) => {
    setFinalScore(score);
    setTotalQuestions(total);
    setGameState('results');
  }, []);

  const resetGame = useCallback(() => {
    setGameState('lobby');
    setFinalScore(0);
    setTotalQuestions(0);
  }, []);

  return {
    gameState,
    finalScore,
    totalQuestions,
    startGame,
    endGame,
    resetGame
  };
};