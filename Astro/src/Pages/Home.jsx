import React from 'react';
import CustomCarousel from '../Components/HomeComponents/Carousel';
import AstroAbout from '../Components/HomeComponents/AstroAbout';
import GemsHome from '../Components/HomeComponents/GemsHome';
import Pack from '../Components/HomeComponents/Pack';
import AppMobile from '../Components/HomeComponents/AppMobile';
import Slider from '../Components/HomeComponents/Slider';
import ServiceHome from '../Components/HomeComponents/ServiceHome';
import BookHome from '../Components/HomeComponents/BookHome';

function Home() {
  return (
    <div>
      <CustomCarousel />
      <AstroAbout />
      <Slider />
      <Pack />
      <ServiceHome />
      <AppMobile />
<BookHome/>
      <GemsHome/>

    </div>
  );
}

export default Home;
