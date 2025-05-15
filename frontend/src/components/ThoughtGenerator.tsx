import { useState } from 'react';
import { thoughts, times } from "../data/thoughts"

const ThoughtGenerator = () => {

  const generateThought = () => {
    const randomX = thoughts[Math.floor(Math.random() * thoughts.length)];
    const randomY = times[Math.floor(Math.random() * times.length)];
    return `I think of ${randomX} every ${randomY}.`;
  };

  const [thought, setThought] = useState(generateThought());

  const regenerate = () => {
    setThought(generateThought());
  };

  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm text-white text-center max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">💭 Thought Generator</h2>
      <p className="text-lg italic mb-4">{thought}</p>
      <button
        onClick={regenerate}
        className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition"
      >
        New Thought
      </button>
    </div>
  );
};

export default ThoughtGenerator;
