import React from 'react'
import CustomCarousel from '../HomeComponents/Carousel'
import trycar from "../../assets/trycar.png";

function PathPoojapage() {
  return (
    <div>
      <CustomCarousel
        images={[trycar, trycar, trycar]}
        interval={4000}
      />
    </div>
  )
}

export default PathPoojapage
