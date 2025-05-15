import React from 'react';

type LetterProps = {
  content: string;
  className?: string;
};

export function Letter({ content, className = '' }: LetterProps) {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto ${className}`}>
      <div className="prose max-w-none">
        {content.split('\n').map((paragraph, i) => (
          <p key={i} className="mb-4">
            {paragraph || <br />}
          </p>
        ))}
      </div>
    </div>
  );
}
