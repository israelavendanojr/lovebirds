import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import PhotoCard from './PhotoCard';
import { useEffect, useMemo } from 'react';

const photos = [
  { src: '/photos/car_ride.jpg', caption: 'Boba!!' },
  { src: '/photos/comm_lawn.jpg', caption: 'Comm Lawn' },
  { src: '/photos/cute_girl.jpg', caption: 'Pretty Girl' },
  { src: '/photos/seattle.jpg', caption: 'Seattle' },
  { src: '/photos/vsa.jpg', caption: 'VSA Heritage Night' },
  { src: '/photos/library.jpg', caption: 'Study Session' },
  { src: '/photos/arcade.jpg', caption: 'Arcade' },
];

const PhotoCatalog = () => {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    autoplay.play();

    // Optional: reset after user interaction
    emblaApi.on('pointerDown', autoplay.stop);
    emblaApi.on('pointerUp', autoplay.reset);
  }, [emblaApi, autoplay]);

  return (
    <div className="overflow-hidden max-w-4xl mx-auto" ref={emblaRef}>
      <div className="flex">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] px-2"
          >
            <PhotoCard src={photo.src} caption={photo.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCatalog;
