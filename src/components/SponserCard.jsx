import React from "react";


const SponserCard = ({image}) => {
  return (
    <div className=" p-4  min-w-[50vw] min-h-[15vh] sm:min-w-[12vw]  sm:min-h-[15vh] md:min-w-[22vw] md:min-h-[10vh] lg:min-w-[22vw]  lg:min-h-[17.2vh] xl:min-h-[20vh] xl:min-w-[18vw] bg-zinc-300 to-red-400 hover:scale-90 duration-300 rounded-md   flex justify-center items-center">

      <img className="" src={image} alt="" />
    </div>
  );
};

export default SponserCard;
