import React from "react";
import ScheduleDetails from "./ScheduleDetails";
import { Link } from "react-router-dom";

const EventSchedule = ({ download }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] h-full flex flex-col gap-5 items-center justify-center py-[2%] px-[5%] text-white">
        <h1 className="text-2xl sm:text-4xl text-black font-semibold">
          Event <i className="text-[#ff6600] font-normal">Schedule</i>
        </h1>
        <p className=" text-xs sm:text-lg text-center text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          culpa assumenda. Excepturi minus ab dolorem quos, vero id provident
          eveniet laudantium doloribus illum?
        </p>
        <ScheduleDetails />

        {download && (
          <button className=" mt-[3%] font-serif uppercase px-[5%] py-[2%] bg-[#ff6600] hover:text-white duration-300">
            <Link to="/schedule">Download Schedule</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventSchedule;
