import { motion } from 'framer-motion';
import { useState } from 'react';

const milestones = [
  {
    id: 5,
    title: 'Officially Dating 💞',
    date: 'Mar 2024',
    detail: 'We made it official. Our own little universe.',
    x: 15,
    y: 25,
  },
  {
    id: 4,
    title: 'Valentine’s Day 💘',
    date: 'Feb 2024',
    detail: 'You became my Valentine — and more.',
    x: 10,
    y: 40,
  },
  {
    id: 3,
    title: 'Seattle Trip 🌆',
    date: 'Nov 2023',
    detail: 'Exploring the city and each other — unforgettable memories.',
    x: 40,
    y: 46,
  },
  {
    id: 2,
    title: 'Rodrigo’s Focus Group 🎤',
    date: 'Oct 2023',
    detail: 'A shared space that brought us closer, one laugh at a time.',
    x: 50,
    y: 48,
  },
  {
    id: 1,
    title: 'Gera’s Party 🎉',
    date: 'Sep 2023',
    detail: 'Where our stars first crossed — the start of everything.',
    x: 60,
    y: 50,
  },
  {
    id: 6,
    title: 'Long Distance Begins 🛫',
    date: 'Apr 2024',
    detail: 'Distance came, but love stayed strong.',
    x: 70,
    y: 35,
  },
  {
    id: 7,
    title: 'Reunited Again ✨',
    date: 'May 2024',
    detail: 'Every hug after time apart feels like magic.',
    x: 80,
    y: 40,
  },
  {
    id: 8,
    title: 'Family Introductions 🏡',
    date: 'Jun 2024',
    detail: 'Meeting the people who made us who we are.',
    x: 55,
    y: 60,
  },
  {
    id: 9,
    title: 'Closer Than Ever 🌙',
    date: 'Jul 2024',
    detail: 'Late-night talks, shared dreams, growing roots.',
    x: 65,
    y: 80,
  },
  {
    id: 10,
    title: 'Our Future 💍',
    date: '???',
    detail: 'A life written in stars — still unfolding.',
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
      {active !== null && (
        <motion.div
          className="absolute left-1/2 top-full mt-6 transform -translate-x-1/2 bg-white text-black rounded-lg p-4 shadow-xl w-[280px] z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-pink-500 font-dancing text-xl mb-1">{milestones[active - 1].title}</h3>
          <div className="text-sm text-pink-600">{milestones[active - 1].date}</div>
          <p className="text-sm mt-2">{milestones[active - 1].detail}</p>
          <button
            onClick={() => setActive(null)}
            className="absolute top-2 right-3 text-gray-400 hover:text-black"
          >
            ×
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Constellation;
