import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HeartIcon from './HeartIcon';

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
    now.setHours(0, 0, 0, 0); // Normalize today
    const isSpecialDay = calendarDates.some(d => isSameDate(d, date));
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
