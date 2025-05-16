import { ParticleBackground } from '@/components/ParticleBackground';
import CountdownTimer from '@/components/Calendar/CountdownTimer';
import { calendarDates } from '@/data/calendar_dates';
import CalendarView from '@/components/Calendar/CalendarView';
import EnvelopeLetter from '@/components/Letter/EnvelopeLetter';
import PhotoCatalog from '@/components/Photos/PhotoCatalog';
import ThoughtGenerator from '@/components/ThoughtGenerator';


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      {/* Background gradient layer */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#1a1c2c] to-[#2f2a4f]" />

      {/* Particle layer */}
      <ParticleBackground />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <ThoughtGenerator />

        <CountdownTimer calendarDates={calendarDates} />

        <div className="w-full max-w-4xl mx-auto overflow-hidden">
          <PhotoCatalog />
        </div>
        <CalendarView calendarDates={calendarDates} />
        
      </main>

    </div>
  );
};

export default App;
