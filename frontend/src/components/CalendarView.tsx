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
      return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#f472b6" viewBox="0 0 24 24" className="w-6 h-6 animate-pulse">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
            4.5 2.09C13.09 3.81 14.76 3 16.5 
            3 19.58 3 22 5.42 22 8.5c0 
            3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    );
    }
    return null;
  };

  return (
    <div className="rounded-2xl p-6 shadow-xl border border-pink-200/10">
      <h2 className="text-xl font-semibold mb-4 text-pink-200 text-center">Calendar</h2>
      <Calendar
        tileContent={tileContent}
        calendarType="gregory"
        className="react-calendar text-black rounded-xl text-pink-200"
        showFixedNumberOfWeeks={false}
        tileClassName={({ date, view }) => {
          const now = new Date();
          let classes = 'relative'; // always make the tile a relative container
        
          if (view === 'month' && date.getMonth() !== now.getMonth()) {
            classes += ' hidden-day'; // hide non-current month days
          }
        
          return classes;
        }}
        
        showNavigation={false}
    />

    </div>
  );
};

export default CalendarView;
