import React from "react";
import { Link } from "react-router-dom";
import SponserCard from "./SponserCard";
import sponsersImage from "../assets/images/background/sponsors-bg.jpg";

import sponser1 from "../assets/images/sponsors/gl-spon-one.png";
import sponser2 from "../assets/images/sponsors/gl-spon-two.png";
import sponser3 from "../assets/images/sponsors/gl-spon-three.png";
import sponser4 from "../assets/images/sponsors/pt-spon-one.png";
import sponser5 from "../assets/images/sponsors/pt-spon-two.png";
import sponser6 from "../assets/images/sponsors/pt-spon-three.png";
import sponser7 from "../assets/images/sponsors/pt-spon-four.png";

const Sponsers = () => {
  const platinumSponsers = [sponser4, sponser5, sponser6, sponser7];
  const goldSponsers = [sponser1, sponser2, sponser3];

  return (
    <div
      style={{
        background: `url(${sponsersImage}) fixed`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full"
    >
      <div className="w-full h-full flex  items-center justify-center bg-white opacity-90 p-10 ">
        <div className=" flex flex-col gap-4 text-center items-center justify-center">
          <h1 className="text-4xl font-semibold">
            Our <i className="font-normal text-orange-500">Sponsers</i>
          </h1>
          <p className="text-sm  md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            non officiis maxime.
          </p>

          <div className="pt-4 text-2xl text-orange-500 font-bold text-center">
            Platinum Sponsers
            <div className="w-full h-full flex items-center justify-center flex-wrap gap-10 py-4">
              {platinumSponsers.map((s, i) => {
                return <SponserCard key={i} image={s} />;
              })}
            </div>
          </div>
          <div className="pt-4 text-2xl text-orange-500 font-bold text-center">
            Gold Sponsers
            <div className="w-full h-full flex items-center justify-center flex-wrap gap-10 pt-4">
              {goldSponsers.map((s, i) => {
                return <SponserCard key={i} image={s} />;
              })}
            </div>
          </div>
          <button className="mt-[3%] font-serif uppercase px-[3%] py-[1%] mb-2 bg-[#ff6600] text-white hover:bg-orange-600 hover:text-white duration-300">
            <Link className="text-sm sm:text-base">Become a Sponsor</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
