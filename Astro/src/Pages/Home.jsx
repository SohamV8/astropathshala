import React from 'react';
import CustomCarousel from '../Components/HomeComponents/Carousel';
import AstroAbout from '../Components/HomeComponents/AstroAbout';
import Jyotishbook from '../Components/HomeComponents/Jyotishbook';
import GemsHome from '../Components/HomeComponents/GemsHome';
import Pack from '../Components/HomeComponents/Pack';
import AppMobile from '../Components/HomeComponents/AppMobile';
import CourseHome from '../Components/HomeComponents/CourseHome';

function Home() {
  return (
    <div>
      <CustomCarousel />
      <AstroAbout />
      <Jyotishbook />
      <CourseHome />
      <Pack />
      <GemsHome/>
      <AppMobile />
    </div>
  );
}

export default Home;
