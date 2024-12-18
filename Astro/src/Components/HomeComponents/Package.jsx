import React, { useEffect, useState } from 'react';
import Mybutton from '../Mybutton'; // Assuming Mybutton component exists
import './Package.css';
import Book from '../../assets/Untitled-1.png'; // Make sure this path is correct

function Package() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="Package-bg h-screen flex items-center justify-center relative overflow-hidden">
        <div className="Package-text text-center z-10 px-4">
          <h1 className="text-4xl font-bold text-black mb-4">Package</h1>
          <h3 className="text-lg text-black max-w-lg mx-auto mb-6">
            Learn from our package
          </h3>
          <Mybutton />
        </div>

        <div className="parallax-images">
          <img
            src={Book}
            alt="lal-kitab"
            className="parallax-image left-image"
            style={{
              transform: `translateX(${scrollY * 0.3}px)`, // Move from the left
            }}
          />
          <img
            src={Book}
            alt="Vedic-astrology"
            className="parallax-image right-image"
            style={{
              transform: `translateX(-${scrollY * 0.3}px)`, // Move from the right
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Package;
