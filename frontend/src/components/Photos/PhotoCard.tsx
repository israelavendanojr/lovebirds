type Props = {
    src: string;
    caption?: string;
  };
  
  const PhotoCard = ({ src, caption }: Props) => {
    return (
      <div className="w-[250px] border border-pink-300 rounded-xl overflow-hidden shadow-md bg-white/5 backdrop-blur-sm">
        <img src={src} alt={caption || 'Photo'} className="w-full h-100 object-cover" />
        {caption && (
          <div className="p-2 text-center text-sm text-pink-300 font-dancing">
            {caption}
          </div>
        )}
      </div>
    );
  };
  
  export default PhotoCard;
  