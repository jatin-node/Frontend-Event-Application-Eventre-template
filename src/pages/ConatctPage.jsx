import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'

const ConatctPage = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PageNav title="our speaker"/>
        <Contact/>



        <Footer/>
      
    </div>
  )
}

export default ConatctPage
