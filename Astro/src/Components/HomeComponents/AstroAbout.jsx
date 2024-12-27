import React from 'react';
import MyButton from '../Mybutton';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function AstroAbout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0 p-4 md:p-8 h-auto md:h-[90vh] w-full">
      <img 
        src={Logo} 
        alt="Astro Pathshala Logo" 
        className="w-2/3 md:w-1/4 h-auto object-contain mb-4 md:mb-0"
      />
      <div className="flex flex-col space-y-4 md:space-y-6 max-w-xl md:max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight font-soria">
          Astro Pathshala
        </h1>
        <h2 className="text-sm md:text-base text-gray-700 leading-relaxed tracking-wide font-BKANT">
          Astropathshala is a leading platform offering comprehensive astrology services. With more than two decades of experience in Astrology, we provide four distinct services tailored to meet your needs. Our Astrology Course equips enthusiasts with in-depth knowledge, empowering them to explore this ancient science. Choose from our 30+ courses, with new ones added frequently. 
          <br /><br />
          For personalized insights and guidance, our Astrology Consultations offer valuable assistance. Additionally, our Puja Paath services ensure the fulfillment of spiritual rituals, enhancing positive energies in your life. Lastly, our Gemstones collection provides authentic and high-quality gems for harnessing celestial energies. Join us at Astropathshala to embark on a transformative journey.
        </h2>
        <Link to="/about-us">
          <MyButton text="About Us" />
        </Link>
      </div>
    </div>
  );
}

export default AstroAbout;
