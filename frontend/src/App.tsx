import { ParticleBackground } from '@/components/ParticleBackground';

const App = () => {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden" style={{ position: 'relative', zIndex: 1 }}>
      <ParticleBackground />
    </div>
  );
};

export default App;
