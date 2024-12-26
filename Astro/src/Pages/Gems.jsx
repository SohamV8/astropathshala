import React from 'react'
import Products from '../Components/Gems-Books/Products'
import CustomRing from '../Components/Gems-Books/CustomRing'
import GemsHero from '../Components/Gems-Books/GemsHero'
import Precious from '../Components/Gems-Books/Precious'

function Gems() {
  return (
    <div>
      <GemsHero />
<CustomRing />
<Precious />
      <Products />
    </div>
  )
}

export default Gems
