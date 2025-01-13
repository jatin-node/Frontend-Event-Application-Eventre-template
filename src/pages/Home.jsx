import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import HomepageBanner from "../components/HomepageBanner";
import Aboutus from "../components/Aboutus";
import EventSchedule from "../components/EventSchedule";
import Speakers from "../components/Speakers";
import Register from "../components/Register";
import Feature from "../components/Feature";
import Sponsers from "../components/Sponsers";
import Ticket from "../components/Ticket";
import TicketBuy from "../components/TicketBuy";
import Footer from "../components/Footer";

const Home = () => {
  document.title = "Eventre"
  const ticketBuyRef = useRef(null);
  const scrollToTicketBuy = () => {
    ticketBuyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar scrollToTicketBuy={scrollToTicketBuy} />
      <HomepageBanner scrollToTicketBuy={scrollToTicketBuy} />
      <Aboutus />
      <Speakers showBackground={true} />
      <EventSchedule download={false} />

      <div className="w-full h-[150vh] lg:h-[60%]  flex flex-col lg:flex-row">
        <Feature />
        <Register />
      </div>

      <div ref={ticketBuyRef}>
        <TicketBuy />
      </div>
      <Ticket />
      <Sponsers />
      <Footer />
    </div>
  );
};

export default Home;
