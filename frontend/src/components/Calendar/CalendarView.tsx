import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HeartIcon from '@/components/Calendar/HeartIcon';

type Props = {
  calendarDates: Date[];
};

const isSameDate = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const CalendarView = ({ calendarDates }: Props) => {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const isSpecialDay = calendarDates.some((d) => isSameDate(d, date));
    const isToday = isSameDate(date, now);

    if (isSpecialDay || isToday) {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <HeartIcon color={isToday ? '#60a5fa' : '#f472b6'} />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative w-full">
      <h2 className="text-xl font-semibold mb-4 text-center text-pink-200 glow-soft">Our Meeting Dates</h2>
      <Calendar
        tileContent={tileContent}
        calendarType="gregory"
        className="react-calendar text-black rounded-xl text-pink-200 mx-auto bg-transparent"
        showFixedNumberOfWeeks={false}
        tileClassName={({ date, view }) => {
          const now = new Date();
          let classes =
            'relative text-center transition duration-300 ease-in-out glow-tile';

          if (view === 'month' && date.getMonth() !== now.getMonth()) {
            classes += ' hidden-day';
          }

          return classes;
        }}
        showNavigation={false}
      />
    </div>
  );
};

export default CalendarView;
