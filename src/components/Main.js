import React, { useEffect, useState } from 'react'
import { hotelData } from '../utils/hotelData'
import Card from './Card'

const Main = () => {
  return (
    <div className='main'>
      <h1>Main Page</h1>
      <div className='content'>
        {hotelData.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  )
}

export default Main
