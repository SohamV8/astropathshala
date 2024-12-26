import React from 'react';
import './Fonts.css';
import './Gems.css';
import GemsMain from '../../assets/GemsMain.png';

function GemsHero() {
  return (
    <div className="flex flex-col md:flex-row items-center py-16 px-8 md:px-20 bg-[#fefff0] text-white">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-6 leading-tight tracking-wide text-gold text-[#7b4a2b]">
          Get the Best Price Gemstones
        </h1>
        <p className="text-lg font-light leading-relaxed text-[#aa6c39]">
          Experience the brilliance of authentic gemstones crafted with precision and delivered with trust. Perfect for those who seek timeless elegance.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={GemsMain}
          alt="Luxury Gemstone"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default GemsHero;
