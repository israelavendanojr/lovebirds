import { useEffect, useState } from 'react';

const thoughts = [
  "I want to hold your hand everytime I walk down the road.",
  "I want to pour you a plate everytime I make a meal",
  "I want to sniff your hair every time I wake up",
  "I want to be distracted everytime I study alone",
  "I want to hear your voice on those lonely days.",
  "I want to look into your eyes everytime I see the stars",
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
