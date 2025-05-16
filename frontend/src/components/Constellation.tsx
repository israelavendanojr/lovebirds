import { motion } from 'framer-motion';
import { useState } from 'react';

const milestones = [
  {
    id: 5,
    title: 'Gera’s Party 🎉',
    date: 'Nov 2024',
    detail: 'Where we spoke for the first time, and the seed of our relationship was planted',
    x: 15,
    y: 25,
  },
  {
    id: 4,
    title: 'Rodrigo’s Focus Group 🎤',
    date: 'Jan 2025',
    detail: 'Settings like these let you know a bit of how I thought before even meeting me.',
    x: 10,
    y: 40,
  },
  {
    id: 3,
    title: 'Seattle Trip 🌆',
    date: 'Jan 2025',
    detail: 'Exploring the city with someone I just met, incredibly out of character for me.',
    x: 40,
    y: 46,
  },
  {
    id: 2,
    title: 'Valentine’s Day 💘',
    date: 'Feb 2025',
    detail: 'An origami rose and a small note',
    x: 50,
    y: 48,
  },
  {
    id: 1,
    title: 'Officially Dating 💞',
    date: 'Mar 2025',
    detail: 'Do you know our anniversary?',
    x: 60,
    y: 50,
  },
  {
    id: 6,
    title: 'Long Distance Begins 🛫',
    date: 'Apr 2024',
    detail: 'This part sucks!',
    x: 70,
    y: 35,
  },
  {
    id: 7,
    title: 'Reunited Again ✨',
    date: 'May 2024',
    detail: 'To be able to hold your hand and lay next to you is something I will never take for granted again.',
    x: 80,
    y: 40,
  },
  {
    id: 8,
    title: 'Family Introductions 🏡',
    date: 'May 2024',
    detail: 'Your family is warm and intelligent, I’m grateful they like me.',
    x: 55,
    y: 60,
  },
  {
    id: 9,
    title: 'Closer Than Ever 🌙',
    date: 'May 2025',
    detail: 'This one is kinda filler tbh I just needed to draw the shape, but please appreciate it. It was really hard.',
    x: 65,
    y: 80,
  },
  {
    id: 10,
    title: 'Our Future',
    date: '???',
    detail: 'An unfolding story.',
    x: 80,
    y: 75,
  },
];

const connections: [number, number][] = [
  [1, 2], [2, 3], [3, 4],
  [3, 5],
  [1, 6], [6, 7],
  [1, 8], [8, 9], [9, 10],
];

const Constellation = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[700px]">
      {/* Title */}
      <h2 className="text-center text-3xl font-dancing text-pink-200 mb-6 glow-soft">
        Our Taurus Constellation
      </h2>

      {/* Lines between stars */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {connections.map(([a, b], idx) => {
          const from = milestones.find(m => m.id === a);
          const to = milestones.find(m => m.id === b);
          if (!from || !to) return null;
          return (
            <line
              key={idx}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="rgba(255,192,203,0.4)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Glowing Stars */}
      {milestones.map((m) => (
        <motion.div
          key={m.id}
          className="absolute cursor-pointer"
          style={{
            top: `${m.y}%`,
            left: `${m.x}%`,
            transform: 'translate(-50%, -50%)',
          }}
          whileHover={{ scale: 1.6 }}
          onClick={() => setActive(m.id)}
        >
          <div className="absolute inset-0 rounded-full bg-pink-300 blur-md opacity-40 animate-pulse" />
          <div className="relative w-4 h-4 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,192,203,0.6)]" />
        </motion.div>
      ))}

      {/* Info card */}
      {active !== null && (() => {
  const selected = milestones.find(m => m.id === active);
  if (!selected) return null;

  return (
    <motion.div
      className="absolute bg-white text-black rounded-lg p-4 shadow-xl w-[280px] z-20"
      style={{
        top: `calc(${selected.y}% - 80px)`,
        left: `${selected.x}%`,
        transform: 'translate(-50%, -100%)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-pink-500 font-dancing text-xl mb-1">{selected.title}</h3>
      <div className="text-sm text-pink-600">{selected.date}</div>
      <p className="text-sm mt-2">{selected.detail}</p>
      <button
        onClick={() => setActive(null)}
        className="absolute top-2 right-3 text-gray-400 hover:text-black"
      >
        ×
      </button>
    </motion.div>
  );
})()}
    </div>
  );
};

export default Constellation;
