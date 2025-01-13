import React, { useState } from "react";
import feature from "../assets/images/background/feature-background.jpg";
import registration from "../assets/images/background/registration-background.jpg";
import { Link } from "react-router-dom";

const InputField = ({ placeholder, type }) => {
  const inputStyles = "bg-transparent outline-none border-[1px] py-2 pl-2 pr-6";
  const handleFocus = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  };

  const handleBlur = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "white";
  };

  return (
    <input
      className={inputStyles}
      placeholder={placeholder}
      type={type}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

const Register = () => {
  return (
    <div className="relative lg:w-[50%] h-full">
      <div
        className="w-full h-full bg-cover"
        style={{ backgroundImage: `url(${registration})` }}
      >
        <div className="absolute top-0 w-full h-full bg-[#21173A] opacity-70"></div>
      </div>

      <div className="absolute inset-0 py-10  text-white p-14 flex flex-col gap-4 items-start justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Register to <i className="text-[#F86706] font-normal">Eventre</i>
        </h1>
        <p className="text-xs sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          blanditiis magnam neque?
        </p>
        <div className="flex flex-col gap-4 sm:gap-10">
          <div className="flex flex-col sm:flex-row gap-4 xl:gap-10">
            <InputField placeholder="Name" type="text" />
            <InputField placeholder="email@gmail.com" type="email" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 xl:gap-10">
            <InputField placeholder="Phone no." type="text" />
            <InputField placeholder="Ticket Type" type="text" />
          </div>
        </div>
        <button className="mt-[3%] font-serif uppercase px-[5%] py-[2%] mb-2 bg-white text-black hover:bg-[#ff6600] hover:text-white duration-300">
          <Link className="text-sm sm:text-base">Register Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
