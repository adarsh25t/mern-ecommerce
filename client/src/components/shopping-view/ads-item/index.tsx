import React from 'react'

function ProductAds({ image }: { image: string }) {
  return (
    <div>
      <img src={image} alt={image} className='rounded-md'/>
    </div>
  )
}

export default ProductAds