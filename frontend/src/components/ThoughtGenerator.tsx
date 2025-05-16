import { useEffect, useState } from 'react';

const thoughts = [
  "I want to think about your smile every time I blink.",
  "I want to remember how you laugh every time the wind blows.",
  "I want to feel your hand in mine every sunset.",
  "I want to relive our memories every step I take.",
  "I want to hear your voice in every quiet moment.",
  "I want to think of the way you say my name with every page I turn.",
  "I want to imagine us cooking together with every passing hour.",
  "I want to look into your eyes with every star I see.",
];

const ThoughtGenerator = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % thoughts.length);
        setVisible(true); // fade in
      }, 1000); // fade-out duration (1s)
    }, 10000); // change every 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`text-center text-pink-300 font-dancing text-2xl px-4 transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {thoughts[index]}
    </div>
  );
};

export default ThoughtGenerator;
