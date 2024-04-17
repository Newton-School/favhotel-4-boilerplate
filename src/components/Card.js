import React, { useEffect, useState } from 'react'

const Card = ({ item }) => {
  return (
    <div className='card'>
      <img src={item.img} alt='' className='hotel-image' />
      <h3>{item.name}</h3>
      <p>{item.location}</p>
      <p>Rs. {item.price}</p>
      <button className='wishlist-btn'>'Add to Wishlist'</button>
    </div>
  )
}

export default Card
