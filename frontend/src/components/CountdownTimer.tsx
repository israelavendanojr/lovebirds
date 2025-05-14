import { useEffect, useState } from 'react';

type Props = {
  targetDate: Date;
};

const CountdownTimer = ({ targetDate }: Props) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    return {
      distance,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
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
      <h2 className="text-2xl mb-2">
        {isToday ? "🎉 Today's the Day! 🎉" : "⏳ Countdown to Our Next Day Together"}
      </h2>
      {!isToday && (
        <div className="text-3xl font-bold">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
