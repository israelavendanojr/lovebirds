import { useState } from 'react';
import StarCard from './StarCard';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: '/photos/car_ride.jpg', 
    caption: 'Boba!!' ,
    context: "",
  },
  { src: '/photos/comm_lawn.jpg', 
    caption: 'Comm Lawn',
    context: "",
  },
  { src: '/photos/cute_girl.jpg', 
    caption: 'Pretty Girl',
    context: "",
  },
  { src: '/photos/seattle.jpg', 
    caption: 'Seattle',
    context: "",
  },
  { src: '/photos/vsa.jpg', 
    caption: 'VSA Heritage Night',
    context: "",
  },
  { src: '/photos/library.jpg', 
    caption: 'Study Session',
    context: "",
  },
  { src: '/photos/arcade.jpg', 
    caption: 'Arcade',
    context: "",
  },
  {
    src: '/photos/penny_lane.jpg', 
    caption: 'Penny Lane',
    context: "",
  }
];

const StarfieldGallery = () => {
  const [activePhoto, setActivePhoto] = useState<null | typeof photos[0]>(null);

  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-center text-pink-300 font-dancing text-3xl mb-8">Starfield of Memories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 group">
        {photos.map((photo, idx) => (
          <StarCard
            key={idx}
            src={photo.src}
            caption={photo.caption}
            context={photo.context}
            onClick={() => setActivePhoto(photo)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              className="bg-white text-black max-w-md w-full rounded-lg p-6 relative z-10 shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on card click
            >
              <img src={activePhoto.src} alt={activePhoto.caption} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-bold text-pink-500 font-dancing mb-2">{activePhoto.caption}</h3>
              <p className="text-sm">{activePhoto.context}</p>
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StarfieldGallery;
