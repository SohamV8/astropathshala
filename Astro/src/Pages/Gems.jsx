import React from 'react'
import Products from '../Components/Products'

function Gems() {
  return (
    <div>
      <div className="Gems-bg h-[70vh] flex items-center justify-center relative overflow-hidden">
    
        <div className="Gems-text text-center z-10">
          <h1 className="text-4xl font-bold text-black mb-4">Gems</h1>
          <h3 className="text-lg text-black max-w-lg mx-auto">
          From authentic gemstones to powerful astrological tools and E-Books, these favorites are designed to bring positivity and balance into your life.
          </h3>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Gems
