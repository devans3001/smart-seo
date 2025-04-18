
const ImageGrid = () => {
  // Function to generate image URLs
  const getImage = (num) => {
    return `https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-${num}-copyright.png`;
  };

  return (
    <div className="md:w-[85dvw] md:mx-auto md:h-[40dvh] grid grid-cols-2 lg:grid-cols-6 gap-8 text-gray-400 my-8 items-center justify-between">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center justify-center">
          <img
            src={getImage(i + 1)}
            alt={`Partner ${i + 1}`}
            className={`
              cursor-grab
                min-w-[150px] 
                object-contain 
                grayscale           
                hover:grayscale-0   
                hover:filter       
                hover:brightness-0  
                hover:invert       
                hover:sepia        
                hover:hue-rotate-180 
                hover:saturate-500 
                transition 
                duration-300
                ease-in-out
              `}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;