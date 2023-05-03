import React, { useState, useEffect } from 'react';
import Letter from './Letter';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const N = 250;

const getRandomLetter = () => LETTERS[Math.floor(Math.random() * LETTERS.length)];

const LetterAnimation = () => {
  const [letters, setLetters] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newLetters = [];
    const newPositions = [];

    // Generate N random letters and positions
    for (let i = 0; i < N; i++) {
      newLetters.push(getRandomLetter());
      newPositions.push({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
      });
    }

    // Set the initial state
    setLetters(newLetters);
    setPositions(newPositions);

    // Animate the letters to their new positions after a short delay
    const timeoutId = setTimeout(() => {
      const updatedPositions = newPositions.map(() => ({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
      }));
      setPositions(updatedPositions);
    }, 1000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {letters.map((letter, index) => (
        <Letter key={index} value={letter} xPos={positions[index].x} yPos={positions[index].y} />
      ))}
    </div>
  );
};

export default LetterAnimation;
