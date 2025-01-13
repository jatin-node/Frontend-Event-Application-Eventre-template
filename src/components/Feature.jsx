import React from "react";
import feature from "../assets/images/background/feature-background.jpg";

const InfoBox = ({ icon, text, borderClasses }) => (
  <span
    className={`text-white flex flex-col gap-[5%] justify-center items-center ${borderClasses}`}
  >
    <i className={`text-6xl ${icon}`}></i>
    <span className="uppercase text-xl">{text}</span>
  </span>
);

const Feature = () => {
  const infoBoxes = [
    {
      icon: "ri-mic-fill",
      text: "8 Speakers",
      borderClasses: "border-b-[1px] border-r-[1px]",
    },
    {
      icon: "ri-flag-fill",
      text: "500+ Seats",
      borderClasses: "border-b-[1px]",
    },
    {
      icon: "ri-ticket-fill",
      text: "300 tickets",
      borderClasses: "border-r-[1px]",
    },
    { icon: "ri-calendar-fill", text: "3 days event", borderClasses: "" },
  ];

  return (
    <div className="relative lg:w-[50%] h-full">
      <div
        className="w-full h-full bg-cover"
        style={{ backgroundImage: `url(${feature})` }}
      >
        <div className="absolute top-0 w-full h-full bg-[#F86706] opacity-90"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-2 px-5 py-20 sm:px-10 sm:py-16 md:p-32">
          {infoBoxes.map((box, index) => (
            <InfoBox key={index} {...box} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
