import React from 'react';
import ServiceCard from './ServiceCard';
import service from '../../assets/service.png';
import pathpooja from '../../assets/pathpooja.png';
import vastu from '../../assets/vastu.png';

function ServiceHome() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 md:px-16 gap-8">
      {/* Section Text */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <h3 className="text-lg text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit.
        </h3>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side Image */}
        <div className="flex-1">
          <img
            src={service}
            alt="Service"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Explore the Universe"
            image={pathpooja}
            description="Dive into the mysteries of the cosmos with our curated content."
          />
          <ServiceCard
            title="Discover Planets"
            image={vastu}
            description="Learn about the unique features of planets in our solar system."
          />
          <ServiceCard
            title="Explore the Universe"
            image={vastu}
            description="Dive into the mysteries of the cosmos with our curated content."
          />
          <ServiceCard
            title="Discover Planets"
            image={pathpooja}
            description="Learn about the unique features of planets in our solar system."
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceHome;
