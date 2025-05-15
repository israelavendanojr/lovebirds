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

  return (
    <div className="text-center">
      {isToday ? (
        <div className="text-3xl font-bold">Today's the Day!</div>
      ) : (
        <div className="text-3xl font-bold">{timeLeft.days} Days</div>
      )}
    </div>
  );
};

export default CountdownTimer;
