import { ParticleBackground } from '@/components/ParticleBackground';
import CountdownTimer from '@/components/Calendar/CountdownTimer';
import { calendarDates } from '@/data/calendar_dates';
import CalendarView from '@/components/Calendar/CalendarView';
import EnvelopeLetter from '@/components/Letter/EnvelopeLetter';
import RelationshipTimeline from '@/components/RelationshipTimeline';
import StarfieldGallery from '@/components/Photos/StarfieldGallery';
import ThoughtGenerator from '@/components/ThoughtGenerator';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      {/* Background gradient layer */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#1a1c2c] to-[#2f2a4f]" />

      {/* Particle layer */}
      <ParticleBackground />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 space-y-16">
      
      <div className="w-full max-w-xl text-center">
        <ThoughtGenerator />
      </div>

      <div className="w-full max-w-md">
        <CountdownTimer calendarDates={calendarDates} />
      </div>
      
      <div className="w-full max-w-4xl">
        <StarfieldGallery />
      </div>

      
      <div className="w-full max-w-3xl">
        <CalendarView calendarDates={calendarDates} />
      </div>

      
      <RelationshipTimeline />
    </main>
    </div>
  );
};

export default App;
