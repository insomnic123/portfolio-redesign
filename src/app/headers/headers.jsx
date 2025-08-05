"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const DynamicImageHeader = ({ 
  images = [], 
  speed = 1000, 
  folderPath = '/images',
  alt = 'Dynamic header image',
  className = '',
  width = 200,
  height = 60
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, speed);

    return () => clearInterval(interval);
  }, [images.length, speed]);

  if (images.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`} 
           style={{ width, height }}>
        <span className="text-gray-400 text-sm">No images</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={`${folderPath}/${images[currentIndex]}`}
        alt={alt}
        fill
        className="object-contain"
        sizes={`${width}px`}
        priority={currentIndex === 0}
      />
    </div>
  );
};

export default DynamicImageHeader;