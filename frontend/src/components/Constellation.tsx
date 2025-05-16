import { motion } from 'framer-motion';
import { useState } from 'react';

const milestones = [
  { id: 1, title: 'Aldebaran 🌟', date: 'Sep 2023', detail: 'Our brightest moment.', x: 60, y: 50 },
  { id: 2, title: 'Hyades I', date: 'Oct 2023', detail: 'Warm beginnings.', x: 50, y: 48 },
  { id: 3, title: 'Hyades II', date: 'Nov 2023', detail: 'Closer every day.', x: 40, y: 46 },
  { id: 4, title: 'Horn Tip Left', date: 'Dec 2023', detail: 'Adventures bloom.', x: 10, y: 40 },
  { id: 5, title: 'Horn Tip Right', date: 'Jan 2024', detail: 'Our connection grew.', x: 15, y: 25 },
  { id: 6, title: 'Horn Base Left', date: 'Feb 2024', detail: 'Felt electric.', x: 70, y: 35 },
  { id: 7, title: 'Horn Tip Far Left', date: 'Mar 2024', detail: 'So far yet close.', x: 80, y: 40 },
  { id: 8, title: 'Horn Base Right', date: 'Apr 2024', detail: 'Like starlight.', x: 55, y: 60 },
  { id: 9, title: 'Horn Tip Far Right', date: 'May 2024', detail: 'Always glowing.', x: 65, y: 80 },
  { id: 10, title: 'Future 💍', date: '???', detail: 'Our constellation.', x: 80, y: 75 },
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
    <div className="relative w-full h-[600px] bg-transparent">
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
          {/* Glow layer */}
          <div className="absolute inset-0 rounded-full bg-pink-300 blur-md opacity-40 animate-pulse" />
          {/* Core star */}
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
