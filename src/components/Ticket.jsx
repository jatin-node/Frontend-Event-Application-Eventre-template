import React from "react";
import ticketImage from "../assets/images/background/cta-ticket-bg.jpg";
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <div className="w-full h-[30vh] md:h-[35vh] lg:h-[40vh] relative">
      <div
        style={{
          background: `url(${ticketImage}) fixed`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full"
      >
        <div className="bg-[#221137] absolute top-0 w-full h-full opacity-50"></div>
      </div>
      <div className="z-50 w-full h-full absolute top-0 text-white flex flex-col gap-5 justify-center items-start px-4 md:px-16 lg:px-24">
        <h1 className="text-2xl md:text-4xl uppercase">
          Get ticket <i className="text-orange-500">now!</i>
        </h1>
        <p className="text-xs md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          expedita iste assumenda.
        </p>
        <button className="font-serif uppercase px-4 py-2 md:px-6 md:py-3 bg-[#ff6600] hover:bg-orange-600 duration-300">
          <Link to="#">get ticket now</Link>
        </button>
      </div>
    </div>
  );
};

export default Ticket;
