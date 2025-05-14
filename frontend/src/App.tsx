import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalendarView from './components/CalendarView';
import { calendarDates } from './data/calendar_dates.ts';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1c2c] to-[#2f2a4f] text-white font-sans">
      <div className="max-w-3xl mx-auto p-6 space-y-10">
        
        {/* Welcome Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          💖 Welcome to Our LoveBirds Space 💖
        </h1>

        {/* Calendar */}
        <CalendarView meetingDates={calendarDates} />

      </div>
    </div>
    
  )
}

export default App
