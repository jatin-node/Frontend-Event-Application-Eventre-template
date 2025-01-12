import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ cardImage }) => {
  const [ishovered, setisHovered] = useState(false);
  console.log(ishovered);
  return (
    <div className="md:w-[25vw] lg:w-[22vw] xl:w-[14vw]  bg-white flex flex-col items-center gap-2 p-2">
      <div
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        className="relative w-full h-full"
      >
        <img className="w-full h-full object-cover" src={cardImage} alt="" />
        {/* Image Hover */}
        <div
          className={`absolute bottom-0 w-full h-full overflow-hidden bg-orange-500 bg-opacity-80 ${
            ishovered
              ? "h-full grid grid-rows-2 grid-cols-2 gap-2 p-16 xl:p-14"
              : "h-0"
          } duration-300`}
        >
          <Link>
            <span
              className={`${
                ishovered ? "flex" : "hidden"
              } z-50 items-center justify-center h-full w-full border-[1px] p-[25%] hover:bg-white hover:text-black`}
            >
              <i className="ri-facebook-line"></i>
            </span>
          </Link>
          <Link>
            <span
              className={`${
                ishovered ? "flex" : "hidden"
              } z-50 items-center justify-center h-full w-full border-[1px] p-[25%] hover:bg-white hover:text-black`}
            >
              <i className="ri-twitter-fill"></i>
            </span>
          </Link>
          <Link>
            <span
              className={`${
                ishovered ? "flex" : "hidden"
              } z-50 items-center justify-center h-full w-full border-[1px] p-[25%] hover:bg-white hover:text-black`}
            >
              <i className="ri-linkedin-line"></i>
            </span>
          </Link>
          <Link>
            <span
              className={`${
                ishovered ? "flex" : "hidden"
              } z-50 items-center justify-center h-full w-full border-[1px] p-[25%] hover:bg-white hover:text-black`}
            >
              <i className="ri-pinterest-fill"></i>
            </span>
          </Link>
        </div>
      </div>
      <div className="text-black md:text-[2.5vw] lg:text-[2vw] xl:text-[1.3vw]">
        Johnathan Franco
      </div>
      <div className="text-zinc-400 md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw]">
        Project manger
      </div>
    </div>
  );
};

export default Card;
