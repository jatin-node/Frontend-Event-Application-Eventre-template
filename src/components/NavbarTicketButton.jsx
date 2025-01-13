import React from 'react'
import { useLocation } from 'react-router-dom'
import TicketBuy from './TicketBuy'
import Footer from './Footer'
import PageNav from './PageNav'

const NavbarTicketButton = () => {
    // const { pathname } = useLocation();
    // console.log(pathname)
    return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <PageNav title="Pricing table"/>
      <TicketBuy/>
      <Footer/>
    </div>
  )
}

export default NavbarTicketButton
