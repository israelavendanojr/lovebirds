import { useState } from 'react';
import StarCard from './StarCard';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: '/photos/car_ride.jpg', caption: 'Boba!!', context: 'You found one of my guilty pleasures. But I remember how stressed I was this week, having you with me and your encouragement of my rest (+ a boba treat) was well appreciated.' },
  { src: '/photos/comm_lawn.jpg', caption: 'Comm Lawn', context: 'You look harmless here. A very sweet photo of you. I remember you called your mom and she was able to tell I near right away. A bit melancholic though since your exit was in the back of my mind.' },
  { src: '/photos/cute_girl.jpg', caption: 'Pretty Girl', context: 'You just look particularly cute in this. I cant my finger on it, but I think just because it seems like you didnt event try much to look so adorable.' },
  { src: '/photos/seattle.jpg', caption: 'Seattle', context: 'This was something that convinced me you were special. I found myself telling Alan all about you that weekend. ' },
  { src: '/photos/vsa.jpg', caption: 'VSA Heritage Night', context: 'You look gorgeous here. It was nice to have you meet some of my friends, Im glad you like them. The event was also very well ran, I hope lowrider is similar.' },
  { src: '/photos/library.jpg', caption: 'Study Session', context: 'Youve returned! It had me remembering when we first met, and you would just distract me from completing my 447 homework. Id never been so okay with being unproductive.' },
  { src: '/photos/arcade.jpg', caption: 'Arcade', context: 'I had alot of fun here. If only there was air hockey. Oddly, I dont really regret spending 30 dollars on that pig, I grew up going to the arcade a good bit, we should go again.' },
  { src: '/photos/penny_lane.jpg', caption: 'Penny Lane', context: 'Our first date? I learned this day that you can be a chronic window shopper, but thats the appeal of antique shops I suppose. Still wouldve liked to go to the museum...' }
];

const StarfieldGallery = () => {
  const [activePhoto, setActivePhoto] = useState<null | typeof photos[0]>(null);

  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-center font-bold text-3xl text-pink-200 mb-6 glow-soft">
        A Starfield of Memories
      </h2>
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
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" // blur removed here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
<motion.div
  className="max-w-md w-full p-6 rounded-2xl border border-pink-200/30 shadow-[0_0_15px_rgba(255,192,203,0.4)] text-pink-100 bg-white/5 transition-all relative z-10"
  initial={{ scale: 0.95 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0.95 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  onClick={(e) => e.stopPropagation()}
>
  <img
    src={activePhoto.src}
    alt={activePhoto.caption}
    className="w-full max-h-[60vh] object-contain rounded mb-4 shadow-[0_0_10px_rgba(255,192,203,0.3)]"
  />
  <h3 className="text-lg font-bold text-pink-300 mb-2">{activePhoto.caption}</h3>
  <p className="text-sm tracking-wide leading-relaxed drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
    {activePhoto.context || 'A moment I hold dearly.'}
  </p>
  <button
    onClick={() => setActivePhoto(null)}
    className="absolute top-2 right-3 text-pink-300 hover:text-white text-xl"
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
