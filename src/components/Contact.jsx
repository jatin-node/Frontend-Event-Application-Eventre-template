import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full py-20 px-[10%] lg:px-[20%] flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-semibold text-center">
        Get In <i className="font-normal text-orange-500">Touch</i>
      </h1>
      <p className="text-sm  md:text-lg text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo non
        officiis maxime.
      </p>
      <div className="w-full h-full flex flex-col gap-5 justify-start items-center">
        <div className="flex flex-col sm:flex-row w-full gap-5 justify-center">
          <input
            className=" w-full  border-[1px] border-zinc-400 outline-none px-2 py-4"
            type="text"
            placeholder="Name"
          />
          <input
            className=" w-full  border-[1px] border-zinc-400 outline-none px-2 py-4"
            type="email"
            placeholder="email@gmail.com"
          />
        </div>
        <input
          className=" w-full  border-[1px] border-zinc-400 outline-none px-2 py-4"
          type="text"
          placeholder="Phone"
        />
        <textarea
          className=" w-full  border-[1px] border-zinc-400 outline-none px-2 py-4 resize-none"
          rows="10"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button className=" mt-[3%] font-serif uppercase px-[10%] py-[5%] sm:px-[5%] sm:py-[2%] bg-[#ff6600] text-white duration-300">
        <Link>Send Message</Link>
      </button>
    </div>
  );
};

export default Contact;
