import React from "react";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../public/assets/Varun.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Heading from "./Heading";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen md:pr-10 flex items-center py-16 pl-[3rem]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-2">
          <Heading title="About" />

          {/* About Content */}

          <p className="font-body mr-[5.5rem] ml-[-1rem] sm:mr-0 sm:ml-0 py-2 px-2 text-gray-600 text-justify">
            I'm a driven software engineer with a passion for developing
            innovative solutions. I earned my Master's degree in Computer
            Science from Illinois Institute of Technology. I have full-stack
            development skills spanning Java, Python, JavaScript, and modern
            frameworks like React.
          </p>
          <p className="font-body mr-[5.5rem] ml-[-1rem] sm:mr-0 sm:ml-0 py-2 px-2 text-gray-600 text-justify">
            I build scalable cloud-based solutions leveraging AWS services. I am
            an AWS Certified Cloud Practitioner, with hands-on experience
            architecting infrastructure and applications on AWS. My expertise
            across the tech stack allows me to make optimal architectural
            decisions. I advocate for best practices like CI/CD to enable robust
            delivery pipelines. I have experience spearheading projects
            end-to-end, from conception to delivery.
          </p>

          <p className="font-body mr-[5.5rem] ml-[-1rem] sm:mr-0 sm:ml-0 py-2 px-2 text-gray-600 text-justify">
            I'm highly motivated to join a team where I can apply my full-stack
            skills to build the next generation of products. I'm passionate
            about using technology to solve real-world problems and make a
            positive impact.
          </p>

          <p className="font-body mr-[5.5rem] ml-[-1rem] mb-[5rem] sm:mr-0 sm:ml-0 py-2 px-2 text-gray-600 text-justify">
            Outside of programming, I enjoy exploring my creative side through
            photography, getting lost in imaginative worlds through books, and
            experimenting with flavors in the kitchen.
          </p>
        </div>

        {/* Social icons */}

        <div className="sm:pt-[3rem] md:ml-[8rem] lg:mt-[-8rem] flex items-center justify-center">
          <div className="flex items-center justify-center max-w-[220px] sm:max-w-[330px] sm:m-auto">
            <a
              href="https://www.linkedin.com/in/varun-raghu/"
              target="_blank"
              rel="noreferrer"
              aria-label="This link is used to open my LinkedIn profile"
            >
              <div className="mr-3 sm:mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Varun710"
              target="_blank"
              rel="noreferrer"
              aria-label="This link is used to open my GitHub profile"
            >
              <div className="mr-3 sm:mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link
              href="mailto: varunraghu710@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="This link is used to open my email"
            >
              <div className="mr-3 sm:mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1U9gVXYyeEIMQ3PQZAbGtNjE6cVMpLs3U/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="This link is used to open my resume"
            >
              <div className="mr-3 sm:mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
