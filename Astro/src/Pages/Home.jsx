import React from 'react';
import CustomCarousel from '../Components/HomeComponents/Carousel';
import AstroAbout from '../Components/HomeComponents/AstroAbout';
import Jyotishbook from '../Components/HomeComponents/Jyotishbook';
import GemsHome from '../Components/HomeComponents/GemsHome';
import Pack from '../Components/HomeComponents/Pack';

function Home() {
  return (
    <div>
      <CustomCarousel />
      <AstroAbout />
      <Jyotishbook />
      <Pack />
      <GemsHome/>
    </div>
  );
}

export default Home;
