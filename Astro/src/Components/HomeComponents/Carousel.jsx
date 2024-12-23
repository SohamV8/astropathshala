import React, { useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export function CustomCarousel({
  images = [], // Array of images
  interval = 5000, // Time in milliseconds for auto-slide
  customStyles = {}, // Optional custom styles
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(autoSlide);
  }, [activeIndex, interval]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images.length) {
    return <p className="text-center text-gray-500">No images to display</p>;
  }

  return (
    <div
      className={`relative w-full h-[90vh] overflow-hidden bg-black`}
      style={customStyles}
    >
      {/* Image container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex justify-center items-center"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-600 bg-opacity-50 hover:bg-gray-700 focus:outline-none"
      >
        <ArrowBackIos fontSize="small" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-600 bg-opacity-50 hover:bg-gray-700 focus:outline-none"
      >
        <ArrowForwardIos fontSize="small" />
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;
