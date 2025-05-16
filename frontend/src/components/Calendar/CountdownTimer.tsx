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
<div className="flex flex-col items-center justify-center text-center space-y-2">
  {!isToday && (
    <p className="text-pink-200 text-lg italic">
      Counting down to our next special day...
    </p>
  )}

  {isToday ? (
    <div className="p-4 border border-pink-400/30 rounded-xl bg-white/5 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-pink-300 animate-bounce drop-shadow-md">
        🎉 Today is a Special Day! 🎉
      </h2>
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <div className="text-7xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(255,192,203,0.5)] animate-pulseSlow">
        {daysLeft}
      </div>
      <div className="text-2xl text-pink-300">{daysLeft === 1 ? 'Day' : 'Days'}</div>
    </div>
  )}
</div>
  );
};

export default CountdownTimer;
