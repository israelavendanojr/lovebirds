import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import '../styles/CalendarView.css'; // Import custom styles

type Props = {
  calendarDates: Date[];
};

const CalendarView = ({ calendarDates }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.toDateString() === d2.toDateString();
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4 font-semibold text-white">📅 Our Special Days</h2>
      <div className="flex justify-center">
        <div className="bg-pink-500 p-4 rounded-2xl shadow-md">
          <Calendar
            onClickDay={setSelectedDate}
            tileClassName={({ date, view }) => {
              
                const isSpecialDay = view === 'month' && calendarDates.some(d => isSameDay(d, date));
                
                if (isSpecialDay) {
                  console.log('Special day found:', date.toDateString());
                  return 'special-day';
                }
                return undefined;
            }}
            className="text-white"
          />
        </div>
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
