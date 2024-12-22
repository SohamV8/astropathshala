import React from 'react';
import CustomCarousel from '../Components/HomeComponents/Carousel';
import AstroAbout from '../Components/HomeComponents/AstroAbout';
import Jyotishbook from '../Components/HomeComponents/Jyotishbook';
import GemsHome from '../Components/HomeComponents/GemsHome';
import Pack from '../Components/HomeComponents/Pack';
import AppMobile from '../Components/HomeComponents/AppMobile';
import Slider from '../Components/HomeComponents/Slider';
import ServiceHome from '../Components/HomeComponents/ServiceHome';

function Home() {
  return (
    <div>
      <CustomCarousel />
      <AstroAbout />
      <Slider />
      <Pack />
      <ServiceHome />
      <AppMobile />
      <Jyotishbook />
      <GemsHome/>

    </div>
  );
}

export default Home;
