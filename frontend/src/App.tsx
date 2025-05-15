import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalendarView from './components/CalendarView';
import { calendarDates } from './data/calendar_dates.ts';
import CountdownTimer from './components/CountdownTimer.tsx';
import ParticleBackground from './components/ParticleBackground.tsx';
import LetterFromFile from './components/LetterFromFile.tsx';

const getNextDate = (dates: Date[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison
    
    // First check if today is a special date
    const todayAsSpecialDate = dates.find(date => {
        const dateOnly = new Date(date);
        dateOnly.setHours(0, 0, 0, 0);
        return dateOnly.getTime() === today.getTime();
    });
    
    if (todayAsSpecialDate) {
        return todayAsSpecialDate;
    }
    
    // If today is not a special date, find the next upcoming date
    return dates.find(date => {
        const dateOnly = new Date(date);
        dateOnly.setHours(0, 0, 0, 0);
        return dateOnly > today;
    });
}

function App() {
    const nextDate = getNextDate(calendarDates);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1c2c] to-[#2f2a4f] text-white font-sans">
      <ParticleBackground />
      <div className="max-w-3xl mx-auto p-6 space-y-10">
        
        {/* Welcome Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          💖 Welcome to Our Space 💖
        </h1>

        {/* Timer */}
        {/* jsx if satement syntax, if nextDate exist, render CountdownTimer */}
        {nextDate && <CountdownTimer targetDate={nextDate}/>}

        {/* Calendar */}
        <CalendarView calendarDates={calendarDates} />

        {/* Letter */}
        <LetterFromFile filename="letter1_Israel.txt" />

      </div>
    </div>
    
  )
}

export default App
