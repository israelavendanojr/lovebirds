import PhotoCard from './PhotoCard';

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
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-6 p-4 animate-carousel whitespace-nowrap">
        {photos.map((photo, idx) => (
          <div key={idx} className="inline-block">
            <PhotoCard src={photo.src} caption={photo.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCatalog;
