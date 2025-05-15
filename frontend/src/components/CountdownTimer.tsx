import { useEffect, useState } from 'react';

type Props = {
  targetDate: Date;
};

const CountdownTimer = ({ targetDate }: Props) => {
  const calculateTimeLeft = () => {
    const today = new Date();
    const target = new Date(targetDate);

    // Strip time for both dates
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const msPerDay = 1000 * 60 * 60 * 24;
    const distance = target.getTime() - today.getTime();

    return {
      distance,
      days: Math.floor(distance / msPerDay),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const today = new Date();
  const isToday = isSameDay(today, targetDate);
  const formattedDate = targetDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="w-full">
      {isToday ? (
        <div className="text-center">
          <div className="text-6xl md:text-7xl font-bold text-pink-300 font-['Dancing_Script'] mb-4 animate-pulse">
            Today's the Day! 🌟
          </div>
          <p className="text-pink-200 text-xl md:text-2xl">
            {formattedDate}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl -z-10"></div>
            <div className="text-8xl md:text-9xl font-bold text-pink-300 font-['Dancing_Script'] mb-2 leading-none">
              {timeLeft.days}
            </div>
          </div>
          <p className="text-pink-200 text-3xl md:text-4xl mt-2 mb-6 font-light">
            {timeLeft.days === 1 ? 'Day' : 'Days'}
          </p>
          <div className="bg-pink-900/30 px-6 py-3 rounded-full border border-pink-200/20">
            <p className="text-pink-200 text-lg md:text-xl">
              Until {formattedDate}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
