import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Heart, Calendar as CalendarIcon, Clock, Star } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';

// Target date for the countdown (example: 1 year from now)
const TARGET_DATE = new Date();
TARGET_DATE.setFullYear(TARGET_DATE.getFullYear() + 1);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transform rotate-3" />
        <div className="relative bg-gradient-to-br from-blue-500/30 to-purple-600/30 p-4 rounded-lg w-24 h-24 flex items-center justify-center border border-white/10 shadow-lg">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-2 text-sm text-blue-100/80 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="mt-8">
      <div className="flex justify-center space-x-4">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden" style={{ position: 'relative', zIndex: 1 }}>
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen" style={{ position: 'relative' }}>
        <div className="min-h-screen flex flex-col">
          <header className="py-12 text-center">
            <div className="relative inline-block">
            <Star className="absolute -top-6 -left-6 w-8 h-8 text-yellow-300 animate-pulse" fill="currentColor" />
            <Star className="absolute -bottom-4 -right-4 w-6 h-6 text-blue-300 animate-pulse" fill="currentColor" />
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 font-['Dancing_Script'] mb-3">
              Celestial Countdown
            </h1>
          </div>
          <p className="text-xl text-blue-100/90 mt-4 max-w-2xl mx-auto leading-relaxed">
            Our love story written in the stars
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="flex items-center text-blue-100/80">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span>{format(currentTime, 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center text-purple-100/80">
              <Clock className="w-5 h-5 mr-2" />
              <span>{format(currentTime, 'h:mm:ss a')}</span>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <CountdownTimer />
            
            {/* Example content sections */}
            <section className="py-20">
              <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">Milestone {item}</h3>
                    <p className="text-blue-100/80">
                      This is a sample milestone. Your special moments will be displayed here.
                    </p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="py-20">
              <h2 className="text-3xl font-bold text-center mb-8">Memories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="aspect-square bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                    <span className="text-blue-200/50">Photo {item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="py-8 text-center border-t border-white/10 mt-12">
            <div className="container mx-auto px-4">
              <p className="text-blue-100/80 text-sm">
                Made with <Heart className="inline w-4 h-4 text-pink-400" fill="currentColor" /> for you
              </p>
              <p className="text-white/50 text-xs mt-2">
                Every moment with you is written in the stars
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
