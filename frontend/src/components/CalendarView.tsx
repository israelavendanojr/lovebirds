import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarView.css';

type Props = {
  calendarDates: Date[];
};

const CalendarView = ({ calendarDates }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.toDateString() === d2.toDateString();
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const isSpecialDay = calendarDates.some(d => isSameDay(d, date));
      return isSpecialDay ? '✨' : null;
    }
    return null;
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const isSpecialDay = calendarDates.some(d => isSameDay(d, date));
      const isSelected = selectedDate && isSameDay(date, selectedDate);
      
      let classes = 'rounded-full w-8 h-8 flex items-center justify-center';
      
      if (isSelected) {
        classes += ' bg-pink-500 text-white';
      } else if (isSpecialDay) {
        classes += ' text-pink-300';
      } else {
        classes += ' text-white/70 hover:bg-pink-500/20';
      }
      
      return classes;
    }
    return '';
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-6 text-pink-200">
        Our Special Days
      </h2>
      <div className="flex justify-center">
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-200/20">
          <Calendar
            onClickDay={setSelectedDate}
            value={selectedDate || undefined}
            tileContent={tileContent}
            tileClassName={tileClassName}
            className="text-white border-0"
            calendarType="gregory"
            navigationLabel={({ label }) => (
              <span className="text-pink-200">{label}</span>
            )}
            formatShortWeekday={(_locale, date) => 
              ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
            }
            nextLabel={
              <span className="text-pink-200 hover:text-pink-300">›</span>
            }
            prevLabel={
              <span className="text-pink-200 hover:text-pink-300">‹</span>
            }
            next2Label={null}
            prev2Label={null}
          />
        </div>
      </div>
      
      {selectedDate && (
        <p className="mt-4 text-pink-200">
          Selected: <span className="font-semibold">
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarView;