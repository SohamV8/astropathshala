import React from 'react';
import CustomCarousel from '../Components/HomeComponents/Carousel';
import AstroAbout from '../Components/HomeComponents/AstroAbout';
import Jyotishbook from '../Components/HomeComponents/Jyotishbook';
import Package from '../Components/HomeComponents/Package';
import GemsHome from '../Components/HomeComponents/GemsHome';

function Home() {
  return (
    <div>
      <CustomCarousel />
      <AstroAbout />
      <Jyotishbook />
      <Package />
      <GemsHome/>
    </div>
  );
}

export default Home;
