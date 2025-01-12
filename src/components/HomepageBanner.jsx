import React from "react";
import banner from "../assets/images/background/homepage-one-banner.jpg";
import objectimage from "../assets/images/background/objects.png";
import { Link } from "react-router-dom";
// h-[10vh] xl:h-[15vh]
const HomepageBanner = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div
        className="z-30 absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-left-top"
        style={{ backgroundImage: `url(${objectimage})` }}
      ></div>
      <div
        className="h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center relative w-full"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="z-50 absolute top-[15%] md:top-[20%] lg:top-[25%] left-[5%] lg:left-[15%] xl:left-[20%] w-[60%] h-[60%] inline-flex flex-col justify-center items-start">
          <span className="-mb-[3%] text-zinc-400">
            The Countdown is finished
          </span>
          <span className=" -mb-[5%] uppercase text-[35px] md:text-[60px] xl:text-[94px] text-[#FF6600] ">
            Business
          </span>
          <span className="uppercase italic text-white text-[35px] md:text-[60px] xl:text-[94px] text-nowrap">
            Conference 2017
          </span>
          <span className="-mt-[1%] text-sm md:text-2xl  text-zinc-200">
            02-05 July 2017 California
          </span>
          <button className=" mt-[3%] font-serif uppercase px-[5%] py-[2%] bg-white hover:bg-[#ff6600] hover:text-white duration-300">
            <Link>get ticket now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
