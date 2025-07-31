import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Camera } from 'lucide-react';

const CarouselCard = ({ 
  heroImage, 
  title, 
  description, 
  buttonText = "Learn More",
  onButtonClick = () => {},
  customIcon = null, 
  className = "" 
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const tiltX = (e.clientY - centerY) / 10;
    const tiltY = (centerX - e.clientX) / 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl w-80 h-96 group cursor-pointer bg-white shadow-lg ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease-out' : 'none'
      }}
    >

      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {customIcon && (
          <div className="absolute top-4 left-4 z-20">
            <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg">
              <img 
                src={customIcon} 
                alt="Custom icon" 
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 h-48 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-gray-900 text-xl font-bold mb-2 leading-tight">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
        
        <button
          onClick={onButtonClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          {buttonText}
        </button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
    </div>
  );
};

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // ai generated exampels
  const cards = [
    {
      heroImage: "flower.png",
      title: "Web Development Project",
      description: "A modern React application with responsive design and cutting-edge features. Built with the latest technologies and best practices.",
      buttonText: "View Project",
      customIcon: "first.png"
    },
    {
      heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      title: "Mobile App Design",
      description: "Intuitive mobile application design with seamless user experience and beautiful interface elements.",
      buttonText: "Learn More",
      customIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
      heroImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
      title: "Data Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization and interactive charts for business insights.",
      buttonText: "Explore",
      customIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      title: "AI Machine Learning",
      description: "Innovative machine learning solution using advanced algorithms to solve complex business problems.",
      buttonText: "Discover",
      customIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleCardClick = (title) => {
    setIsAutoPlaying(false);
    alert(`Clicked on: ${title}`);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cards.length]);

  return (
    <div className="min-h-screen flex items-center justify-center p-2 md:p-2">
      <div className="relative">
            <div className="text-center mb-8">
            <h1 className="text-gray-900 text-3xl font-bold mb-2">Featured Projects</h1>
            <p className="text-gray-600">
                Discover my latest work and creations
                {isAutoPlaying && <span className="ml-2 text-gray-400">• Auto-playing</span>}
            </p>
            </div>
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[1000px] h-96 flex items-center justify-center px-4">
            {cards.map((card, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
              const isNext = index === (currentIndex + 1) % cards.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              let position = 0;
              let scale = 0.7;
              let opacity = 0.4;
              let zIndex = 1;

              if (isActive) {
                position = 0;
                scale = 1;
                opacity = 1;
                zIndex = 10;
              } else if (isPrev) {
                position = -320;
                scale = 0.8;
                opacity = 0.5;
                zIndex = 5;
              } else if (isNext) {
                position = 320; 
                scale = 0.8;
                opacity = 0.5;
                zIndex = 5;
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    !isActive ? 'hidden md:block' : ''
                  }`}
                  style={{
                    transform: `translateX(${position}px) scale(${scale})`,
                    opacity,
                    zIndex
                  }}
                >
                  <CarouselCard
                    heroImage={card.heroImage}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    customIcon={card.customIcon}
                    onButtonClick={() => handleCardClick(card.title)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-6">

          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectCarousel;