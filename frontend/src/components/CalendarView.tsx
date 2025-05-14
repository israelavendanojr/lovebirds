import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; //default styling
import '../styles/CalendarView.css';

type Props = {
  meetingDates: Date[];
};

const CalendarView = ({ meetingDates }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Format helper to match dates by string
  const isSameDay = (d1: Date, d2: Date) => {
    return d1.toDateString() === d2.toDateString();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-8">
      <h2 className="text-2xl mb-6 font-semibold text-white">📅 Our Special Days</h2>
      <div className="bg-pink-500 p-6 rounded-xl shadow-lg w-full max-w-md">
        <Calendar
          onClickDay={setSelectedDate}
          tileClassName={({ date, view }) =>
            view === 'month' && meetingDates.some(d => isSameDay(d, date))
              ? 'bg-pink-700 text-white font-bold rounded-full'
              : ''
          }
          className="border-0"
        />
      </div>

      {selectedDate && (
        <p className="mt-4 text-white">
          You clicked: <strong>{selectedDate.toDateString()}</strong>
        </p>
      )}
    </div>
  );
};

export default CalendarView;
