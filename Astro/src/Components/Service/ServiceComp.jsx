import React from 'react'
import trycar from "../../assets/trycar.png";
import CustomCarousel from '../HomeComponents/Carousel';
import ConsultHome from '../HomeComponents/ConsultHome';

function ServiceComp() {
  return (
    <div>
      <CustomCarousel
              images={[trycar, trycar, trycar, trycar, trycar]}
              interval={4000}
            />
            <ConsultHome />
            
    </div>
  )
}

export default ServiceComp
