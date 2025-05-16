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
  { id: 1, sender: 'you', date: 'Mar 2025', file: '/letters/letter-1.txt', title: 'Letter 1 💫' },
  { id: 2, sender: 'her', date: 'Apr 2025', file: '/letters/letter-2.txt', title: 'Letter 2 💫' },
  { id: 3, sender: 'you', date: 'Apr 2025', file: '/letters/letter-3.txt', title: 'Letter 3 💫' },
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
    <section className="relative w-full max-w-3xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-center font-bold text-3xl font-dancing text-pink-200 mb-12 glow-soft">
        Our Letters 💌
      </h2>

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-pink-200/10 transform -translate-x-1/2" />

      <div className="space-y-12 relative z-10">
        {letters.map((letter) => (
          <div key={letter.id} className="relative">
            {/* Title button */}
            <button
              onClick={() => toggleLetter(letter.id, letter.file)}
              className={`block w-fit text-left font-dancing text-lg text-pink-200 hover:text-pink-100 transition-all ${
                letter.sender === 'you' ? 'ml-auto pr-4' : 'pl-4'
              }`}
            >
              {letter.title} <span className="text-sm text-pink-400">({letter.date})</span>
            </button>

            {/* Letter modal */}
            {openLetterId === letter.id && (
                <motion.div
                    className={`mt-2 w-full max-w-md p-6 rounded-2xl border border-pink-200/30 shadow-[0_0_15px_rgba(255,192,203,0.4)] text-pink-100 transition-all ${
                        letter.sender === 'you' ? 'ml-auto' : ''
                    }`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed font-dancing tracking-wide drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
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
    </section>
  );
};

export default LetterTimeline;
