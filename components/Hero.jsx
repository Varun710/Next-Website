import React from "react";
import Type from "../components/helpers/Type";
import { Exo_2 } from "@next/font/google";
const exo_2 = Exo_2({
  weight: ["400"],
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center w-full h-screen bg-fixed bg-center bg-black"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="z-[2] flex flex-col mb-[5rem]">
        <div className={exo_2.className}>
          <h2 className="text-white text-5xl pb-6 mb-[-3rem] md:text-7xl lg:text-11xl lg:mb-[-5rem]">
            Hello!
          </h2>
          <p className="text-white text-[2rem] pb-7 ml-[0.4rem] sm:text-xl sm:pt-[-4rem] sm:ml-[0.45rem] md:text-2xl md:ml-[0.7rem] lg:text-4xl lg:ml-[0.7rem] mb-[-1.5rem]">
            I'm Varun,
          </p>
          <Type />
        </div>
      </div>
    </div>
  );
};

export default Hero;
