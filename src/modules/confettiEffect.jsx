import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  const fireConfetti = useCallback(() => {
  // Left side
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.6 }
  });
  
  // Right side
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.6 }
  });
  }, []);

  return fireConfetti;
};