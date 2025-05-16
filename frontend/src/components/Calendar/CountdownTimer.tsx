import { useEffect, useState } from 'react';

type Props = {
  calendarDates: Date[];
};

const getNextDate = (dates: Date[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
  for (const date of sorted) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);

    if (d.getTime() === today.getTime()) return { nextDate: d, isToday: true };
    if (d.getTime() > today.getTime()) return { nextDate: d, isToday: false };
  }

  return { nextDate: null, isToday: false };
};

const CountdownTimer = ({ calendarDates }: Props) => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const { nextDate, isToday } = getNextDate(calendarDates);
    setIsToday(isToday);

    if (!isToday && nextDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diff = Math.ceil((nextDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      setDaysLeft(diff);
    }
  }, [calendarDates]);

  return (
    <div className="flex flex-col items-center justify-center">
      {isToday ? (
        <h2 className="text-3xl font-bold text-pink-300 animate-pulse">🎉 Today is a Special Day! 🎉</h2>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-7xl font-bold text-white mb-2">{daysLeft}</div>
          <div className="text-2xl text-pink-300">{daysLeft === 1 ? 'Day' : 'Days'}</div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
