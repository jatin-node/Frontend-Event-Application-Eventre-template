import React from 'react'
import Navbar from '../components/Navbar'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import EventSchedule from '../components/EventSchedule'

const Schedule = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PageNav title="event schedule"/>
        <EventSchedule download={true}/>



        <Footer/>
      
    </div>
  )
}

export default Schedule
