import React, { useState } from 'react';
import { thoughts } from '@/data/thoughts';

export function ThoughtGenerator() {
  const [currentThought, setCurrentThought] = useState('');
  const [showThought, setShowThought] = useState(false);

  const generateThought = () => {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    setCurrentThought(thoughts[randomIndex]);
    setShowThought(true);
  };

  return (
    <div className="text-center">
      <button
        onClick={generateThought}
        className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors"
      >
        {showThought ? 'Another Thought' : 'Generate a Thought'}
      </button>
      
      {showThought && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg italic">"{currentThought}"</p>
        </div>
      )}
    </div>
  );
}
