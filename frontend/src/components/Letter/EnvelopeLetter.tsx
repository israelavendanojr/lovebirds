import { useState } from 'react';
import Letter from './Letter';

type Props = {
  file: string;
};

const EnvelopeLetter = ({ file }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // When opened, show the letter
  if (isOpen) return <Letter file={file} />;

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="relative w-[300px] h-[200px] rounded-md border-2 border-pink-300 text-pink-300 cursor-pointer hover:scale-105 transition-transform duration-300 bg-transparent"
    >
      {/* Flap (right-side up triangle sitting on top edge) */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-10">
        <svg
          width="300"
          height="80"
          viewBox="0 0 300 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="0,0 150,80 300,0"
            fill="transparent"
            stroke="#f9a8d4"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center font-dancing text-xl">
        Open Me
      </div>
    </div>
  );
};

export default EnvelopeLetter;
