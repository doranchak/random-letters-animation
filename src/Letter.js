import React from 'react';

const Letter = ({ value, xPos, yPos }) => {
  const style = {
    position: 'absolute',
    top: `${yPos}px`,
    left: `${xPos}px`,
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    opacity: value ? 1 : 0, // Hide the letter if it has no value
    transition: 'all 5s ease-in-out', // Add a transition for animating
  };

  return <div style={style}>{value}</div>;
};

export default Letter;
