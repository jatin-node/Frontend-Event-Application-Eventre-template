import React from "react";
import Card from "./Card";
import backgroundSpeakerImage from "../assets/images/background/spaeker-background.jpg";

import speakerOne from "../assets/images/speakers/speaker-one.jpg";
import speakerTwo from "../assets/images/speakers/speaker-two.jpg";
import speakerThree from "../assets/images/speakers/speaker-three.jpg";
import speakerFour from "../assets/images/speakers/speaker-four.jpg";
import speakerFive from "../assets/images/speakers/speaker-five.jpg";
import speakerSix from "../assets/images/speakers/speaker-six.jpg";

const Speakers = ({ showBackground }) => {
  return (
    <div
      style={{
        background: showBackground ? `url(${backgroundSpeakerImage}) fixed` : "none",
        backgroundSize: showBackground ? "cover" : "initial",
        backgroundPosition: showBackground ? "center" : "initial",
      }}
      className="w-full"
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] flex flex-col gap-5 items-center justify-center p-[5%] text-white">
          <div className={`text-2xl md:text-4xl ${showBackground ? "text-white" : "text-black"}`}>
            Who <i className="text-[#ff6600]">Speaking?</i>
          </div>
          <p className="text-md md:text-lg text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo
            corporis aliquid.
          </p>
          <div className="w-full flex flex-wrap items-center justify-center gap-5">
            <Card cardImage={speakerOne} />
            <Card cardImage={speakerTwo} />
            <Card cardImage={speakerThree} />
            <Card cardImage={speakerFour} />
            <Card cardImage={speakerFive} />
            <Card cardImage={speakerSix} />
            <Card cardImage={speakerFive} />
            <Card cardImage={speakerSix} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
