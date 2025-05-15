import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 80 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.7,
            random: true,
            animation: { enable: true, speed: 0.3, minimumValue: 0.3 },
          },
          size: {
            value: { min: 1, max: 2.5 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.1,
            direction: 'none',
            outModes: 'out',
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
