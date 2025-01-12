import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ticket from "../assets/images/icon/ticket.png";

const Navbar = () => {
  return (
    <div className="sticky z-[100] bg-white border-x-0 top-0 w-full h-[10vh] xl:h-[12vh] border-b flex items-center justify-between overflow-x-hidden">
      <div className="flex items-center w-1/5 h-full">
        <Link to={`/`}>
          <img
            className="py-[10%] pl-10 pr-5 md:border-r md:border-zinc-200 max-w-72 "
            src={logo}
            alt=""
          />
        </Link>
      </div>

      <div className="flex lg:hidden px-5">
        <i className="text-3xl ri-menu-fill"></i>
      </div>

      <div className="w-1/2 xl:w-3/5 mx-20 h-full hidden lg:flex gap-10 justify-center items-center">
        <Link className="text-sm lg:text-lg">Home</Link>
        <Link className="text-sm lg:text-lg">Speakers</Link>
        <Link className="text-sm lg:text-lg">Pages</Link>
        <Link className="text-sm lg:text-lg">Schedule</Link>
        <Link className="text-sm lg:text-lg">Sponsers</Link>
        <Link className="text-sm lg:text-lg">News</Link>
        <Link className="text-sm lg:text-lg">Contacts</Link>
      </div>

      <div className="w-3/10 xl:w-1/5 hidden lg:block h-full bg-[#FF6600]">
        <Link>
          <div className="w-full h-full flex items-center justify-center text-xl text-white">
            <span className="hidden xl:block px-5 border-r border-zinc-300">
              <img src={ticket} alt="" />
            </span>
            <span className="px-5 text-sm xl:text-base">BUY TICKET</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
