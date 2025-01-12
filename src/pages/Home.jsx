import React from "react";
import Navbar from "../components/Navbar";
import HomepageBanner from "../components/HomepageBanner";
import Aboutus from "../components/Aboutus";
import backgroundSpeakerImage from "../assets/images/background/spaeker-background.jpg";
import EventSchedule from "../components/EventSchedule";
import Speakers from "../components/Speakers";

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <HomepageBanner />
      <Aboutus />
      <div
        style={{
          background: `url(${backgroundSpeakerImage}) fixed`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full  bg-red-50"
      >
        <Speakers />
      </div>
      <EventSchedule />
    </div>
  );
};

export default Home;
