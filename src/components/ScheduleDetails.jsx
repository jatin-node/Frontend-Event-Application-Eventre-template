import React, { useState } from "react";
import backgroundSchedule from "../assets/images/background/schedule-bg.png";

const ScheduleDetails = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 md:gap-10 justify-center">
      {/* Days */}
      <div className=" flex flex-row justify-center flex-wrap gap-4 md:gap-10">
        {[1, 2, 3].map((day, index) => (
          <button
            key={index}
            className={`p-4 md:p-0 md:h-[15vh] md:w-[15vw] uppercase bg-white border-[1px] flex flex-col justify-center items-center ${
              clickedIndex === index
                ? "bg-orange-500 text-white"
                : "text-orange-400"
            }`}
            onClick={() => handleClick(index)}
          >
            <h2 className="text-sm md:text-xl lg:text-2xl xl:text-4xl ">
              Day-0{day}
            </h2>
            <h4 className="text-sm md:text-xs lg:texl-sm xl:text-xl ">
              20 november 2017
            </h4>
          </button>
        ))}
      </div>

      {/* Specific Day Details */}
      <div
        style={{
          background: `url(${backgroundSchedule})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-full w-full p-[2%]"
      >
        {/* heading */}
        <div className="w-full h-[12%] bg-orange-500 flex items-center px-10 text-sm md:text-2xl ">
          <span className="w-[50%] md:w-[30%]">Time</span>
          <span className="w-[50%] md:w-[30%]">Speaker</span>
          <span className="w-[30%] hidden md:block">Subject</span>
          <span className="w-[30%] hidden md:block">Venue</span>
        </div>
        {/* details */}
        <div className="w-full h-[9vh] text-xs md:text-md lg:text-lg xl:text-2xl bg-white text-zinc-400 flex items-center px-10 hover:shadow-xl hover:scale-[102%] transition-transform duration-300">
          <span className="w-[50%] md:w-[30%]">10.00 AM</span>
          <span className="w-[50%] md:w-[30%]">Zerad Pawel</span>
          <span className="w-[30%] hidden md:block">Principle of Wp</span>
          <span className="w-[30%] hidden md:block">Auditorium B</span>
        </div>
        <div className="w-full h-[9vh] text-xs md:text-md lg:text-lg xl:text-2xl bg-white text-zinc-400 flex items-center px-10 hover:shadow-xl hover:scale-[102%] transition-transform duration-300">
          <span className="w-[50%] md:w-[30%]">12.00 AM</span>
          <span className="w-[50%] md:w-[30%]">Henry Mong</span>
          <span className="w-[30%] hidden md:block">Wp Requirements</span>
          <span className="w-[30%] hidden md:block">Auditorium C</span>
        </div>
        <div className="w-full h-[9vh] text-xs md:text-md lg:text-lg xl:text-2xl bg-white text-zinc-400 flex items-center px-10 hover:shadow-xl hover:scale-[102%] transition-transform duration-300">
          <span className="w-[50%] md:w-[30%]">2.00 PM</span>
          <span className="w-[50%] md:w-[30%]">Baily Leo</span>
          <span className="w-[30%] hidden md:block">Introduction to Wp</span>
          <span className="w-[30%] hidden md:block">Auditorium D</span>
        </div>
        <div className="w-full h-[9vh] text-xs md:text-md lg:text-lg xl:text-2xl bg-white text-zinc-400 flex items-center px-10 hover:shadow-xl hover:scale-[102%] transition-transform duration-300">
          <span className="w-[50%] md:w-[30%]">3.00 PM</span>
          <span className="w-[50%] md:w-[30%]">Lee Mun</span>
          <span className="w-[30%] hidden md:block">Useful tips for Wp</span>
          <span className="w-[30%] hidden md:block">Auditorium E</span>
        </div>
        <div className="w-full h-[9vh] text-xs md:text-md lg:text-lg xl:text-2xl bg-white text-zinc-400 flex items-center px-10 hover:shadow-xl hover:scale-[102%] transition-transform duration-300">
          <span className="w-[50%] md:w-[30%]">4.00 PM</span>
          <span className="w-[50%] md:w-[30%]">Lee Mun</span>
          <span className="w-[30%] hidden md:block">Useful tips for Wp</span>
          <span className="w-[30%] hidden md:block">Auditorium F</span>
        </div>
        <div className="w-full h-[9vh] text-xs md:text-md lg:text-lg xl:text-2xl bg-white text-zinc-400 flex items-center px-10 hover:shadow-xl hover:scale-[102%] transition-transform duration-300">
          <span className="w-[50%] md:w-[30%]">9.00 AM</span>
          <span className="w-[50%] md:w-[30%]">Samanta Doe</span>
          <span className="w-[30%] hidden md:block">Introduction to Wp</span>
          <span className="w-[30%] hidden md:block">Auditorium A</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;
