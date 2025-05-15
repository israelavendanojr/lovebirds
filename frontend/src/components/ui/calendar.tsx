import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type CalendarProps = {
  className?: string;
  value?: Date | null;
  onChange?: (value: Date) => void;
  tileClassName?: string | ((props: { date: Date; view: string }) => string | null);
};

function CustomCalendar({ className, value, onChange, tileClassName }: CalendarProps) {
  return (
    <div className={className}>
      <Calendar
        value={value || null}
        onChange={(value) => {
          if (onChange && value instanceof Date) {
            onChange(value);
          }
        }}
        tileClassName={tileClassName}
        nextLabel={<span className="text-pink-500">›</span>}
        prevLabel={<span className="text-pink-500">‹</span>}
        next2Label={null}
        prev2Label={null}
        className="border-none"
      />
    </div>
  );
}

CustomCalendar.displayName = 'Calendar';

export { CustomCalendar as Calendar };
