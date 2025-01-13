import React from "react";
import { useNavigate } from "react-router-dom";
import TicketBuy from "./TicketBuy";
import Footer from "./Footer";
import PageNav from "./PageNav";

const NavbarTicketButton = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      <div onClick={()=>navigate(-1)} className="z-50 absolute top-[5%] left-[5%]">
        <i className="text-white text-2xl md:text-4xl ri-arrow-left-s-line"></i>
      </div>
      <PageNav title="Pricing table" />
      <TicketBuy />
      <Footer />
    </div>
  );
};

export default NavbarTicketButton;
