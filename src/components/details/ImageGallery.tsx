"use client";

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useState } from 'react';

type ImageGalleryProps = {
  logo?: string;
  thumbnails: string[];
};

export default function ImageGallery({ logo, thumbnails }: ImageGalleryProps) {
  // Get active index of image
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback if thumbnail is empty
  const images = thumbnails && thumbnails.length > 0 
    ? thumbnails 
    : (logo ? [logo] : ["/logo.png"]);

  // Previous image
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Next image
  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full md:w-1/2 flex gap-4">
      <div className="flex-1 flex flex-col gap-4">
        {/* Main Image Container */}
        <div className="bg-white rounded-2xl aspect-4/5 flex items-center justify-center border border-gray-200 p-12 shadow-sm transition-all duration-300">
          <img src={images[activeIndex]} alt="Main Image" className="w-full object-contain" />
        </div>
        
        {/* Thumbnails */}
        <div className="flex gap-4 justify-center">
          {images.map((src, index) => (
            <div 
              key={index} 
              onClick={() => setActiveIndex(index)}
              className={`w-20 h-20 bg-white rounded-xl overflow-hidden border cursor-pointer hover:border-accent transition-all p-2 ${
                activeIndex === index ? 'border-teal-600 ring-2 ring-teal-100' : 'border-gray-200'
              }`}
            >
              <img src={src} alt={`Thumbnail ${index}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows (Only available when image > 1) */}
      {images.length > 1 && (
        <div className="flex flex-col justify-center gap-4">
          <button 
            onClick={handlePrev}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <PiCaretLeftBold/>
          </button>
          <button 
            onClick={handleNext}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <PiCaretRightBold/>
          </button>
        </div>
      )}
    </div>
  );
}