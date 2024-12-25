import React from 'react';
import './Hero.css';
import Spotlight from '../ui/Spotlight';
import './Fonts.css'; 

const Ebook = () => {
  return (
    <div className='Homepagetry'>
      <div className="marking">
        <div className="Gems-bg h-[70vh] flex items-center justify-center relative overflow-hidden">
          <div className="Gems-text text-center z-10">
            <h1 className="Booktexthead text-black mb-4 font-cigra">ASTROLOGY BOOKS</h1>
            <h3 className="font-OCR text-lg text-gray-900 max-w-lg mx-auto">
            From authentic gemstones to powerful astrological tools and E-Books, these favorites are designed to bring positivity and balance into your life.
            </h3>
          </div>
        </div>
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
    </div>
  );
};

export default Ebook;
