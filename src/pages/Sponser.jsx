import React from 'react'
import Navbar from '../components/Navbar'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import Sponsers from '../components/Sponsers'

const Sponser = () => {
  document.title = "Eventre | Sponsers"
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PageNav title="our sponsers"/>
        <Sponsers/>
        <Footer/>    
    </div>
  )
}

export default Sponser
