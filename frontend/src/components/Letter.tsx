import React from 'react';

const Letter = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#fffaf0] p-6 rounded-lg shadow-lg max-w-lg mx-auto my-6 border border-pink-200 relative overflow-hidden">
      {/* Optional paper texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/textures/paper.png')] bg-cover z-0" />

      <div className="relative z-10 whitespace-pre-wrap text-gray-800 text-lg leading-loose font-[DancingScript] tracking-wide">
        {text}
      </div>
    </div>
  );
};

export default Letter;