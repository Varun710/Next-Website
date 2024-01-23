import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import Java from "../public/assets/skills/Java.png";
import Python from "../public/assets/skills/python.png";
import Docker from "../public/assets/skills/docker.png";
import Mongo from "../public/assets/skills/mongo.png";
import Node from "../public/assets/skills/node.png";
import Restful from "../public/assets/skills/restful.png";
import MySQL from "../public/assets/skills/MySQL.png";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section>
      <div id="skills" className="w-full lg:h-screen mb-[4rem]">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <Heading title="Skills" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-8">
            {/* java */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Java} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Java</h2>
                </div>
              </div>
            </div>

            {/* Python */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Python} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Python</h2>
                </div>
              </div>
            </div>

            {/* Javascript */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Javascript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col text-sm sm:text-base items-center justify-center">
                  <h2>JavaScript</h2>
                </div>
              </div>
            </div>

            {/* HTML*/}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Html} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>HTML</h2>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Css} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>CSS</h2>
                </div>
              </div>
            </div>

            {/* AWS */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={AWS} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col text-sm sm:text-base items-center justify-center">
                  <h2>Amazon Web Services</h2>
                </div>
              </div>
            </div>

            {/* React */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={ReactImg} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>React Js</h2>
                </div>
              </div>
            </div>

            {/* Next js */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={NextJS} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Next Js</h2>
                </div>
              </div>
            </div>

            {/* Tailwind */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Tailwind} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Tailwind</h2>
                </div>
              </div>
            </div>

            {/* MySQL */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={MySQL} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>MySQL</h2>
                </div>
              </div>
            </div>

            {/* Mongo */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Mongo} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Mongo</h2>
                </div>
              </div>
            </div>

            {/* Node */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Node} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Node</h2>
                </div>
              </div>
            </div>

            {/* Restful */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Restful} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>RESTful API</h2>
                </div>
              </div>
            </div>

            {/* Docker */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Docker} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Docker</h2>
                </div>
              </div>
            </div>

            {/* Github */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Github} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>Github</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
