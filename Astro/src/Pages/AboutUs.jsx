import React from 'react'
import trycar from "../assets/trycar.png";
import Logo from '../assets/logo.png';
import main1 from '../assets/Guru ji/main1.png';
import VideoYT from '../Components/VideoYT';


function AboutUs() {
  return (
    <div>
      <div className="top-img-about">
      <img src={trycar} className=''></img>
</div>

<div className="whyastro">
  {/* Section: Why Astro Pathshala */}
  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 p-8">
    {/* Image */}
    <img
      src={Logo}
      alt="Astro Pathshala Logo"
      className="w-full md:w-1/3 h-auto object-contain"
    />
    {/* Text Content */}
    <div className="flex flex-col space-y-6 max-w-2xl text-center md:text-left">
      <h1 className="text-4xl font-bold text-gray-900 leading-snug">
        Why Astro Pathshala?
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
        Astropathshala is a leading platform offering comprehensive astrology services. With more than two decades of experience in Astrology, we provide four distinct services tailored to meet your needs. Our Astrology Course equips enthusiasts with in-depth knowledge, empowering them to explore this ancient science. Choose from our 30+ courses, with new ones added frequently.
        <br />
        <br />
        For personalized insights and guidance, our Astrology Consultations offer valuable assistance. Additionally, our Puja Paath services ensure the fulfillment of spiritual rituals, enhancing positive energies in your life. Lastly, our Gemstones collection provides authentic and high-quality gems for harnessing celestial energies. Join us at Astropathshala to embark on a transformative journey.
      </p>
    </div>
  </div>

  {/* Section: Why Sunil Vashist */}
  <div className="flex flex-col md:flex-row-reverse items-center justify-center space-y-8 md:space-y-0 md:space-x-10 p-8">
    {/* Image */}
    <img
      src={main1}
      alt="Sunil Vashist"
      className="w-full md:w-1/3 h-auto object-contain"
    />
    {/* Text Content */}
    <div className="flex flex-col space-y-6 max-w-2xl text-center md:text-left">
      <h1 className="text-4xl font-bold text-gray-900 leading-snug">
        Why Sunil Vashist?
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
        Teaching people the science of Astrology for more than 2 decades, Gurudev Sunil Vashist is a seasoned astrologer and the master of various astrological practices like Vedic Astrology, Lal Kitab Astrology, Palmistry, Vastu, and many more. 18 years ago, Gurudev established “Astro Pathshala” with the aim of providing high-quality astrological education to every person who wishes to understand the secrets hidden in the planets and stars with the help of the ancient science of Jyotish.
        <br />
        With the vision of providing affordable education to all and making people aware of the secrets hidden among the planetary positions in their horoscopes, he is continuously working towards building a large community of students and teachers to help them expand their knowledge about the world of Astrology.
      </p>
    </div>
  </div>
</div>


<VideoYT/>
    </div>
  )
}

export default AboutUs
