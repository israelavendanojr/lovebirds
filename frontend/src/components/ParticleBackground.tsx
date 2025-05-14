import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'react-tsparticles';

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
        background: {
          color: { value: 'transparent' },
        },
        particles: {
          number: { value: 25, density: { enable: true, area: 800 } },
          color: { value: ['#f472b6', '#ec4899', '#fb7185'] }, // various pinks
          shape: {
            type: 'char',
            options: {
              char: {
                value: ['❤'],
                font: 'Verdana',
                style: '',
                weight: '400',
              },
            },
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 6, max: 16 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: 'top',
            outModes: { default: 'out' },
            random: true,
            straight: false,
          },
          rotate: {
            value: { min: -30, max: 30 },
            direction: 'random',
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
