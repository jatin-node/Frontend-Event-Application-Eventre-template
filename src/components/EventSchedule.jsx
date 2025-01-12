import React from 'react'
import ScheduleDetails from './ScheduleDetails'

const EventSchedule = () => {
  return (
    <div className='w-full h-[120vh] flex items-center justify-center'>
      <div className='w-[80%] h-full flex flex-col gap-5 items-center justify-start p-[5%] text-white'>
        <h1 className='text-lg sm:text-4xl text-black font-semibold'>Event <i className='text-[#ff6600] font-normal'>Schedule</i></h1>
        <p className=' text-xs sm:text-lg text-center text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, culpa assumenda. Excepturi minus ab dolorem quos, vero id provident eveniet laudantium doloribus illum?</p>
        <ScheduleDetails/>
      </div>
      
    </div>
  )
}

export default EventSchedule
