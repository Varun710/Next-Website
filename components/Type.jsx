import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <div className="App">
      <h1 className="text-white text-[1.25rem] ml-[0.3rem] sm:text-[1.25rem] sm:ml-[0.35rem] md:text-[1.5rem] md:ml-[0.6rem] lg:text-[2rem] lg:ml-[0.8rem]">
        {" "}
        <Typewriter
          words={["Software Engineer", "Web Developer", "Photographer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default Type;
