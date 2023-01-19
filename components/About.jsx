import React from "react";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../public/assets/Varun.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 px-[3rem]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-[2.5rem] md:text-[3.4rem] tracking-widest text-black] px-2">
            About
          </h1>

          {/* About Content */}

          <p className="font-body py-2 px-2 text-gray-600 text-justify">
            My journey with programming started back in 2018 with an artificial
            intelligence workshop. As an automobile engineer, I was always
            passionate about cars and autonomous driving. After attending the
            workshop, my interest in programming increased and I started
            learning Python.
          </p>
          <p className="font-body py-2 px-2 text-gray-600 text-justify">
            This led me to learn more about other areas of computer science. I
            learnt languages like Java, Dart, HTML, CSS, JavaScript and started
            applying the concepts in minor projects. Later I decided to pursue
            master’s in computer science. During this program I implemented what
            I learnt for coursework and personal projects. Since then, I have
            been learning various languages and frameworks and have done
            multiple certifications to improve my skillset.
          </p>
        </div>
        <div className="mb-[8rem] mt-5 md:mr-[3rem]">
          <div className="w-80 h-50 m-auto   shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <Image src={aboutImg} className="rounded-xl" alt="/" />
          </div>
        </div>

        {/* Social icons */}

        <div className="pb-5 pl-10 sm:pt-[3rem] md:ml-[8rem] mt-[-5rem] lg:mt-[-8rem]">
          <div className="flex items-center justify-center max-w-[330px] m-auto">
            <a
              href="https://www.linkedin.com/in/varun-raghu/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Varun710"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mx-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link
              href="mailto: varunraghu710@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mx-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1U9gVXYyeEIMQ3PQZAbGtNjE6cVMpLs3U/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mx-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
