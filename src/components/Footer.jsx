import React from "react";
import logo from "../assets/images/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[35%] bg-[#272735] flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center ">
        <img className="" src={logo} alt="" />
      </div>
      {/* Links */}
      <div className="flex gap-4">
        <Link className="w-[45px] h-[50px] bg-white hover:bg-orange-500">
          <i className="w-full h-full hover:text-white flex items-center justify-center ri-facebook-line"></i>
        </Link>
        <Link className="w-[45px] h-[50px] bg-white hover:bg-orange-500">
          <i className="w-full h-full hover:text-white flex items-center justify-center ri-twitter-fill"></i>
        </Link>
        <Link className="w-[45px] h-[50px] bg-white hover:bg-orange-500">
          <i className="w-full h-full hover:text-white flex items-center justify-center ri-instagram-fill"></i>
        </Link>
        <Link className="w-[45px] h-[50px] bg-white hover:bg-orange-500">
          <i className="w-full h-full hover:text-white flex items-center justify-center ri-wifi-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
