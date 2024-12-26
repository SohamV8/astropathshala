import React from 'react';
import Spotlight from '../ui/Spotlight';
import './Fonts.css'; 

const Ebook = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="BookHero-bg h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="BookHero-text text-center z-10 px-4 sm:px-0">
          {/* Title */}
          <h1 className="Booktexthead text-black mb-4 font-cigra text-5xl sm:text-7xl md:text-[125px]">
            ASTROLOGY BOOKS
          </h1>
          {/* Description */}
          <h3 className="font-OCR text-lg sm:text-xl text-gray-900 max-w-lg mx-auto">
            From authentic gemstones to powerful astrological tools and E-Books, these favorites are designed to bring positivity and balance into your life.
          </h3>
        </div>
      </div>

      {/* Spotlight Component */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
    </div>
  );
};

export default Ebook;
