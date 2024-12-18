import React from 'react';
import CustomCarousel from '../Components/HomeComponents/Carousel';
import AstroAbout from '../Components/HomeComponents/AstroAbout';
import Jyotishbook from '../Components/HomeComponents/Jyotishbook';
import Package from '../Components/HomeComponents/Package';

function Home() {
  return (
    <div>
      <CustomCarousel />
      <AstroAbout />
      <Jyotishbook />
      <Package />
    </div>
  );
}

export default Home;
