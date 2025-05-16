import { useEffect, useState } from 'react';

type Props = {
  file: string;
};

const Letter = ({ file }: Props) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/letters/${file}`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent('Could not load letter.'));
  }, [file]);

  return (
    <div className="w-[350px] h-[500px] border-2 border-pink-300 text-pink-300 p-6 rounded-xl overflow-auto font-dancing leading-relaxed tracking-wide bg-transparent backdrop-blur-sm">
      <pre className="whitespace-pre-wrap text-[1.05rem]">
        {content}
      </pre>
    </div>
  );
};

export default Letter;
