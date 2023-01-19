import React from "react";
import Type from "./type";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center w-full h-screen bg-fixed bg-center bg-cover custom-img"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="z-[2] flex flex-col mb-[5rem]">
        <div className="">
          <h2 className="text-white text-4xl pb-6 mb-[-3rem] sm:text-5xl md:text-7xl lg:text-11xl lg:mb-[-5rem]">
            Hello!
          </h2>
        </div>
        <div className="">
          <p className="text-white text-[1.5rem] pb-7 ml-[0.4rem] sm:text-xl sm:pt-[-4rem] sm:ml-[0.45rem] md:text-2xl md:ml-[0.7rem] lg:text-4xl lg:ml-[0.7rem] mb-[-1.5rem]">
            I'm Varun,
          </p>
        </div>
        <div>
          <Type />
        </div>
      </div>
    </div>
  );
};

export default Hero;
