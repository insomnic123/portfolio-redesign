import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Camera } from 'lucide-react';

const CarouselCard = ({ 
  heroImage, 
  title, 
  description, 
  chipText = null,
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
      className={`relative overflow-hidden rounded-2xl w-80 min-h-[400px] group bg-white shadow-lg ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease-out' : 'none'
      }}
    >

      <div className="relative h-52 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Small chip on bottom right of image */}
        {chipText && (
          <div className="absolute bottom-3 right-3 z-20">
            <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
              <span className="text-white text-xs font-medium">{chipText}</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col bg-white">
        <div>
          <h3 className="text-gray-900 text-xl font-bold mb-3 leading-tight">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
    </div>
  );
};

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const cards = [
    {
      heroImage: "ethics.jpg",
      title: "DCTI Ethics Bowl | Executive & Member",
      description: "Competed in regional ethics bowl competition, discussing and debating various ethical dilemmas and helping lead sub-teams!",
      chipText: "Oct. 2022 - Present"
    },
    {
      heroImage: "steamicfullteam.jpg",
      title: "Steam IC | Chapter Co-President & Participant",
      description: "Helped organize and manage a club of 30+ students, helping with their preparation to compete in the STEAM ICAC. I also developed an astronomy project with my team where we simulated star clusters!",
      chipText: "Sept. 2024 - Present"
    },
    {
      heroImage: "dcti.jpg",
      title: "DCTI Ambassador | Co-President",
      description: "Organized volunteering opportunities for 80+ students for events with 1000+ participants, helping ensure smooth operations and positive experiences with the community.",
      chipText: "Oct. 2022 - Present"
    },
    {
      heroImage: "weeknd.jpg",
      title: "TPL Teen Council | Project Lead",
      description: "Organized resources for running a case study competition as a part of the TPL. This taught me a lot about navigating bureaucracy and working with a large organization!",
      chipText: "Oct. 2024 - May 2025"
    },
    {
      heroImage: "youreka.jpg",
      title: "Tuberculosis & Economic Indicator Research @ Youreka UofT",
      description: "I used R to investigate correlations between TB Incidence and Mortality, and economic indicators like GDP, finalizing the results in a research paper and poster presented at a symposium.",
      chipText: "Feb. 2025 - Apr. 2025"
    },
    {
      heroImage: "lul.jpg",
      title: "Shad @ LUL, Sudbury",
      description: "Spent a month at LUL, Sudbury, with strangers from across Canada, learning about entrepreneurship, engineering, and leadership. I also worked on a project to create a prototype for passive architecture buildings & energy optimizing AI software.",
      chipText: "July 2024"
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
            <h1 className="text-gray-900 text-3xl font-bold mb-2">Featured Extracurriculars</h1>
            <p className="text-gray-600">
                Alas I enjoy touching grass and being involved with my community 🥀 Here are <i>some</i> of my extracurriculars that I'm particularly proud of!
            </p>
            </div>
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[1000px] flex items-start justify-center px-4" style={{minHeight: '450px'}}>
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
                    chipText={card.chipText}
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
                    ? 'bg-purple-600 scale-110'
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