import React from "react";
import { Link } from "react-router-dom";

const BuyCards = ({ price, isZoomed }) => {
  return (
    <div className={`min-w-[310px] sm:min-w-[368px] md:min-w-0 md:max-w-[50vw] e h-auto md:h-fit border-[1px] ${isZoomed ? 'transform scale-110 bg-white text-black' : ''}`}>
      <div className={`w-full h-fit ${isZoomed ? 'bg-orange-500 text-white' : 'bg-zinc-100 text-black'} flex flex-col px-5 md:px-10 pt-5 leading-none`}>
        <div className="pb-2 uppercase">Standard</div>
        <hr className="w-full border-zinc-300" />
        <div className="text-3xl md:text-4xl lg:text-[5em] pt-6 font-semibold">{price}$</div>
        <div className="text-xs md:text-sm lg:text-[1.5em] py-4 capitalize">/person</div>
      </div>

      <ul className="w-full md:h-fit p-5 md:p-10 text-xs md:text-sm lg:text-base flex flex-col gap-4 items-start justify-start">
        <li>
          <i className="ri-checkbox-circle-fill text-orange-500"></i>
          <span>1 Comfortable Seats</span>
        </li>
        <li>
          <i className="ri-checkbox-circle-fill text-orange-500"></i>
          <span>Free Lunch and Coffee</span>
        </li>
        <li>
          <i className="ri-checkbox-circle-fill text-orange-500"></i>
          <span>Certificate</span>
        </li>
        <li>
          <i className="ri-checkbox-circle-fill text-orange-500"></i>
          <span>Easy Access</span>
        </li>
        <button className={`mt-3 md:mt-[3%] font-serif uppercase text-sm md:text-md px-[10%] py-[4%] bg-[#ff6600] hover:bg-orange-500 text-white duration-300`}>
          <Link>get ticket now</Link>
        </button>
      </ul>
    </div>
  );
};

export default BuyCards;
