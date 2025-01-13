import React from 'react'
import Navbar from '../components/Navbar'
import PageNav from '../components/PageNav'
import Speakers from '../components/Speakers'
import Footer from '../components/Footer'

const Speaker = () => {
  document.title = "Eventre | Speakers"
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PageNav title="our speaker"/>
        <Speakers showBackground={false}/>
        <Footer/>
    </div>
  )
}

export default Speaker
