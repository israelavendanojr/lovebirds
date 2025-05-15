import React from 'react';
import { format, parseISO } from 'date-fns';
import Calendar, { TileArgs } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type CalendarViewProps = {
  date: Date | null | undefined;
  onDateChange: (date: Date) => void;
  markedDates: string[];
};

export function CalendarView({ date, onDateChange, markedDates }: CalendarViewProps) {
  const tileClassName = ({ date: tileDate }: { date: Date }) => {
    const dateStr = format(tileDate, 'yyyy-MM-dd');
    return markedDates.includes(dateStr) ? 'bg-pink-100 rounded-full' : '';
  };

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      onDateChange(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      onDateChange(value[0]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Calendar
        onChange={handleDateChange}
        value={date || null}
        className="border-none"
        tileClassName={tileClassName}
        nextLabel={<span className="text-pink-500">›</span>}
        prevLabel={<span className="text-pink-500">‹</span>}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
}
