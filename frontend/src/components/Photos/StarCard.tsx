// components/Photos/StarCard.tsx
import { motion } from 'framer-motion';

type Props = {
  src: string;
  caption?: string;
  context?: string;
  onClick: () => void;
};

const StarCard = ({ src, caption, context, onClick }: Props) => {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer transition duration-300"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
    >
      <img src={src} alt={caption} className="w-full h-full object-cover rounded-lg" />
      {caption && (
        <div className="absolute bottom-2 left-2 right-2 bg-black/40 text-pink-200 text-sm p-1 rounded font-dancing text-center">
          {caption}
        </div>
      )}
    </motion.div>
  );
};

export default StarCard;
