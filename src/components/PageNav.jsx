import React from "react";
import navImage from "../assets/images/background/page-title-bg.jpg";
import { Link } from "react-router-dom";

const PageNav = ({title}) => {
  return (
    <div className="w-full h-[20%] relative">
      <div
        style={{
          backgroundImage: `url(${navImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full"
      >
        <div className="w-full h-full bg-indigo-950 opacity-75"></div>
      </div>
      <div className="absolute top-0 w-full h-full text-white flex flex-col gap-2 items-center justify-center">
        <div className="text-4xl uppercase text-nowrap">{title}</div>
        <div className="text-lg uppercase flex gap-1 items-center">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <div>{title}</div>
        </div>

      </div>
    </div>
  );
};

export default PageNav;
