import React from 'react';
import CustomCarousel from '../Components/HomeComponents/Carousel';
import AstroAbout from '../Components/HomeComponents/AstroAbout';
import Pack from '../Components/HomeComponents/Pack';
import Slider from '../Components/HomeComponents/Slider';
import ServiceHome from '../Components/HomeComponents/ServiceHome';
import BookHome from '../Components/HomeComponents/BookHome';
import trycar from "../assets/trycar.png";
import BookCard from '../Components/HomeComponents/BookCard';
import SocialDisplay from '../Components/HomeComponents/SocialDisplay';
import GemsHero from '../Components/Gems-Books/GemsHero';

function Home() {
  return (
    <div>
      <CustomCarousel
        images={[trycar, trycar, trycar]}
        interval={5000}
        customStyles={{ height: "600px", backgroundColor: "#f9f9f9" }}
      />
      <AstroAbout />
      <Slider />
      <Pack />
      <ServiceHome />
      <SocialDisplay />
      <GemsHero />
<BookHome/>
<BookCard/>
  

    </div>
  );
}

export default Home;
