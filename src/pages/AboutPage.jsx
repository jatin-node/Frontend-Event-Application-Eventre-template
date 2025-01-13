import React from 'react'
import Navbar from '../components/Navbar'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import Speakers from '../components/Speakers'
import Aboutus from '../components/Aboutus'

const AboutPage = () => {
  document.title = "Eventre | AboutUs"
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PageNav title="about us"/>
        <Aboutus/>
        <Speakers showBackground={true}/>
        <Footer/>
    </div>
  )
}

export default AboutPage
