import React from "react";
import banner from "../assets/images/background/homepage-one-banner.jpg";
import objectimage from "../assets/images/background/objects.png";
import { Link } from "react-router-dom";
// h-[10vh] xl:h-[15vh]
const HomepageBanner = () => {
  return (
    <div className="relative">
      <div
        className="z-50 absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-left-top"
        style={{ backgroundImage: `url(${objectimage})` }}
      ></div>
      <div
        className="h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute top-[25%] left-[20%] w-[50%] h-[60%] inline-flex flex-col justify-center items-start">
          <span className="-mb-[3%] text-zinc-400">The Countdown is finished</span>
          <span className=" -mb-[5%] uppercase text-[5vw] text-[#FF6600] ">Business</span>
          <span className="uppercase italic text-white text-[5vw]">Conference 2017</span>
          <span className="-mt-[1%] text-2xl text-zinc-200">02-05 July 2017 California</span>
          <button className=" mt-[3%] font-serif uppercase px-[5%] py-[2%] bg-white hover:bg-[#ff6600] hover:text-white duration-300">
            <Link>get ticket now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
