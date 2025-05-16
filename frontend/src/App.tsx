import { ParticleBackground } from '@/components/ParticleBackground';
import CountdownTimer from '@/components/Calendar/CountdownTimer';
import { calendarDates } from '@/data/calendar_dates';
import CalendarView from '@/components/Calendar/CalendarView';
import Constellation from '@/components/Constellation';
import LetterTimeline from '@/components/Letter/LetterTimeline';
import StarfieldGallery from '@/components/Photos/StarfieldGallery';
import ThoughtGenerator from '@/components/ThoughtGenerator';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      {/* Background gradient layer */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#1a1c2c] to-[#2f2a4f]" />

      {/* Particle layer */}
      <ParticleBackground />

      {/* HEADER */}
      <header className="w-full text-center py-8">
        <h1 className="text-4xl font-dancing text-pink-200 glow-soft">
        ✨My Little Universe Of You✨
        </h1>
        <p className="text-pink-300 text-sm mt-2">I love you to the moon and back, and I would give you the stars</p>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 space-y-16">
        <div className="w-full max-w-md">
          <CountdownTimer calendarDates={calendarDates} />
        </div>

        <div className="w-full max-w-4xl">
          <StarfieldGallery />
        </div>

        <div className="w-full max-w-3xl">
          <CalendarView calendarDates={calendarDates} />
        </div>

        <div className="w-full max-w-3xl">
          <Constellation />
        </div>

        <div className="w-full max-w-3xl">
          <LetterTimeline />
        </div>

        <div className="w-full max-w-xl text-center">
          <ThoughtGenerator />
        </div>


      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-pink-300">
      (づ ￣ ³￣)づ - Made with love, sweat, and chatGPT — (づ ￣ ³￣)づ
      </footer>
    </div>
  );
};

export default App;
