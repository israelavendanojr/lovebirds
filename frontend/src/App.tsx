import { ParticleBackground } from '@/components/ParticleBackground';
import CountdownTimer from '@/components/CountdownTimer';
import { calendarDates } from '@/data/calendar_dates';
import CalendarView from '@/components/CalendarView';
import EnvelopeLetter from '@/components/EnvelopeLetter';


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      {/* Background gradient layer */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#1a1c2c] to-[#2f2a4f]" />

      {/* Particle layer */}
      <ParticleBackground />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <CountdownTimer calendarDates={calendarDates} />

        <CalendarView calendarDates={calendarDates} />
        
        {/* <EnvelopeLetter file="letter1.txt" /> */}
      </main>

    </div>
  );
};

export default App;
