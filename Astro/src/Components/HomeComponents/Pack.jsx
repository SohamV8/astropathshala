import React, { useEffect } from 'react';
import './packtry.css';
import MyButton from '../Mybutton';
import vedic from '../../assets/vedic.png';
import lalKitab from '../../assets/lal-kitab.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Pack() {
  useEffect(() => {
    // Animate left image
    gsap.fromTo(
      '.left-image',
      { x: '-150%', opacity: 0 }, // Start far left and invisible
      {
        x: '0%', // Slide to normal position
        opacity: 1, // Fade in
        duration: 1.8, // Smooth animation duration
        ease: 'power3.out', // Smooth easing
        scrollTrigger: {
          trigger: '.parallax-images-container', // Start animation when this container is in view
          start: 'top 80%',
        },
      }
    );

    // Animate right image
    gsap.fromTo(
      '.right-image',
      { x: '150%', opacity: 0 }, // Start far right and invisible
      {
        x: '0%', // Slide to normal position
        opacity: 1, // Fade in
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.parallax-images-container',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="full-screen-container">
      {/* Images */}
      <div className="parallax-images-container">
        <img
          src={lalKitab}
          alt="Lal Kitab"
          className="parallax-image left-image"
        />
        <img
          src={vedic}
          alt="Vedic Astrology"
          className="parallax-image right-image"
        />
      </div>

      {/* Package text */}
      <div className="package-text">
        <h1 className="text-4xl font-bold">Package</h1>
        <h3 className="text-lg max-w-lg mx-auto mb-6">
          Learn from our package
        </h3>
        <MyButton text="Buy Now" />
      </div>
    </div>
  );
}

export default Pack;
