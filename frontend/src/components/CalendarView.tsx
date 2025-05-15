import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
    if (view === 'month' && calendarDates.some(d => isSameDate(d, date))) {
      return <div className="text-red-400 text-sm mt-1">❤️</div>;
    }
    return null;
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200/10 text-white">
      <h2 className="text-xl font-semibold mb-4 text-pink-200 text-center">Our Special Days</h2>
      <Calendar
        tileContent={tileContent}
        calendarType="gregory"
        className="react-calendar text-black rounded-xl text-pink-200"
        showFixedNumberOfWeeks={false}
        tileClassName={({ date, view }) => {
            const now = new Date();
            if (view === 'month' && date.getMonth() !== now.getMonth()) {
            return 'hidden-day';
            }
            return '';
        }}
        showNavigation={false}
    />

    </div>
  );
};

export default CalendarView;
