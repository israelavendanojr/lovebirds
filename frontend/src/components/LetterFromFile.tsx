import React, { useState, useEffect } from 'react';
import { Letter } from './Letter';

type LetterFromFileProps = {
  filePath: string;
  className?: string;
};

export function LetterFromFile({ filePath, className = '' }: LetterFromFileProps) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading letter:', error);
        setContent('Error loading letter content.');
      }
    };

    fetchContent();
  }, [filePath]);

  return <Letter content={content} className={className} />;
}
