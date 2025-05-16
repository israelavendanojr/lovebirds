import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Letter = {
  id: number;
  sender: 'you' | 'her';
  date: string;
  file: string;
  title?: string;
};

const letters: Letter[] = [
  { id: 1, sender: 'you', date: 'Sep 2023', file: '/letters/letter-1.txt', title: 'To My Star 💫' },
  { id: 2, sender: 'her', date: 'Oct 2023', file: '/letters/letter-2.txt', title: 'Seattle Breeze 🏙️' },
  { id: 3, sender: 'you', date: 'Nov 2023', file: '/letters/letter-3.txt', title: 'Counting Days ⏳' },
];

const LetterTimeline = () => {
  const [openLetterId, setOpenLetterId] = useState<number | null>(null);
  const [letterContents, setLetterContents] = useState<{ [id: number]: string }>({});

  const toggleLetter = (id: number, file: string) => {
    if (openLetterId === id) {
      setOpenLetterId(null);
    } else {
      setOpenLetterId(id);
      if (!letterContents[id]) {
        fetch(file)
          .then((res) => res.text())
          .then((text) => {
            setLetterContents((prev) => ({ ...prev, [id]: text }));
          });
      }
    }
  };

  return (
    <div className="space-y-12">
      {letters.map((letter) => (
        <div key={letter.id} className="relative">
          {/* Removed the dot */}

          {/* Title button */}
          <button
            onClick={() => toggleLetter(letter.id, letter.file)}
            className={`block w-fit text-left font-dancing text-lg text-pink-200 hover:text-pink-100 transition-all ${
              letter.sender === 'you' ? 'ml-auto pr-4' : 'pl-4'
            }`}
          >
            {letter.title} <span className="text-sm text-pink-400">({letter.date})</span>
          </button>

          {/* Letter content */}
          {openLetterId === letter.id && (
            <motion.div
            className={`mt-2 w-full max-w-md p-6 rounded-2xl shadow-[0_0_30px_rgba(255,192,203,0.2)] border border-pink-200/20 backdrop-blur-md bg-white/10 text-pink-100 transition-all ${
              letter.sender === 'you' ? 'ml-auto' : ''
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p className="whitespace-pre-wrap text-sm leading-relaxed font-dancing tracking-wide">
              {letterContents[letter.id]}
            </p>
            <button
              onClick={() => setOpenLetterId(null)}
              className="text-xs text-pink-300 mt-4 hover:text-pink-100 transition"
            >
              Close
            </button>
          </motion.div>
          
          )}
        </div>
      ))}
    </div>
  );
};

export default LetterTimeline;
