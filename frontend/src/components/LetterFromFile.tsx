import { useEffect, useState } from 'react';
import Letter from './Letter';

const LetterFromFile = ({ filename }: { filename: string }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`/letters/${filename}`)
      .then((res) => res.text())
      .then(setText)
      .catch(() => setText('Could not load letter.'));
  }, [filename]);

  return <Letter text={text} />;
};

export default LetterFromFile;
