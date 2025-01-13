import React, { useState } from 'react'
import BuyCards from './BuyCards'

const TicketBuy = () => {
  const [zoomedCard, setZoomedCard] = useState(null);

  const handleCardClick = (price) => {
    setZoomedCard(price);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center py-20 px-4 md:px-5 '>
      <h1 className='text-4xl font-semibold text-center'>Get <i className='text-orange-500 font-normal'>Ticket</i></h1>
      <p className='text-center px-2 md:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde non repudiandae?</p>
      <div className='flex flex-col md:flex-row gap-4 pt-10 items-center'>
        <div onClick={() => handleCardClick("39.00")}>
          <BuyCards price="39.00" isZoomed={zoomedCard === "39.00"} />
        </div>
        <div onClick={() => handleCardClick("49.00")}>
          <BuyCards price="49.00" isZoomed={zoomedCard === "49.00"} />
        </div>
        <div onClick={() => handleCardClick("99.00")}>
          <BuyCards price="99.00" isZoomed={zoomedCard === "99.00"} />
        </div>
      </div>
    </div>
  )
}

export default TicketBuy
