import React from "react";
import speaker from "../assets/images/speakers/featured-speaker.jpg";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div className="w-full h-auto lg:h-[60vh] overflow-x-hidden flex justify-center items-center">
      <div className="w-[90%] py-[5%] lg:w-[80%] h-full flex flex-col lg:flex-row lg:gap-10 items-center justify-center">
        {/* About image */}
        <div className="w-[50%] lg:w-[40%] h-full flex items-center justify-center">
          <img className="rounded-full w-3/4 " src={speaker} alt="" />
        </div>
        {/* About details */}
        <div className="w-full lg:w-[60%] h-full flex flex-col gap-5 justify-start items-center lg:items-start  lg:py-20">
          <h1 className="text-[6vw] lg:text-[3vw] font-semibold">
            About The <i className="text-[#ff6600] font-normal">Eventre</i>
          </h1>
          <p className="w-[80%] text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            voluptate asperiores impedit consectetur! Id excepturi dolorum, est
            omnis laborum facere quod illum ipsum.
          </p>
          <p className="w-[80%] text-sm lg:text-base text-zinc-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            voluptate asperiores impedit consectetur! Id excepturi dolorum, est
            omnis laborum facere quod illum ipsum.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 lg:gap-10">
            <button className="font-serif uppercase px-3 py-2 lg:px-[15%] lg:py-[5%] text-nowrap bg-[#ff6600] hover:bg-orange-600 text-white duration-300">
              <Link to="/">buy ticket</Link>
            </button>
            <button className="font-serif uppercase border-[1px] px-3 py-2 lg:px-[15%] lg:py-[5%] text-nowrap bg-white hover:bg-[#ff6600] hover:text-white duration-300">
              <Link to="/">read more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
