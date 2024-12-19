import React, { useEffect } from 'react';
import './packtry.css';
import MyButton from '../Mybutton';
import Book from '../../assets/Untitled-1.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Pack() {
  useEffect(() => {
    // Left image animation
    gsap.fromTo(
      '.left-image',
      { x: '-100vw', opacity: 0 }, // Start off-screen with opacity 0
      {
        x: '0vw', // Move into view
        opacity: 1, // Fade in
        ease: 'power3.out', // Smooth easing
        duration: 2, // Duration for the smooth effect
        scrollTrigger: {
          trigger: '.parallax-images-new',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Continuous scrolling effect
        },
      }
    );

    // Right image animation
    gsap.fromTo(
      '.right-image',
      { x: '100vw', opacity: 0 }, // Start off-screen with opacity 0
      {
        x: '0vw', // Move into view
        opacity: 1, // Fade in
        ease: 'power3.out', // Smooth easing
        duration: 2, // Duration for the smooth effect
        scrollTrigger: {
          trigger: '.parallax-images-new',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Continuous scrolling effect
        },
      }
    );
  }, []);

  return (
    <div className="full-screen-container">
      <div className="parallax-images-new">
        <img
          src={Book}
          alt="lal-kitab"
          className="try-images left-image"
        />
        <img
          src={Book}
          alt="Vedic-astrology"
          className="try-images right-image"
        />
      </div>

      <div className="Package-text">
        <h1 className="text-4xl font-bold">Package</h1>
        <h3 className="text-lg max-w-lg mx-auto mb-6">Learn from our package</h3>
        <MyButton text="Buy Now" />
      </div>
    </div>
  );
}

export default Pack;
