import Image from "next/image";
import React from "react";
import Twitter from "../public/assets/projects/twitter.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const twitter = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Twitter}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Twitter Streaming Using Big Data</h2>
          <h3>
            PySpark, Apache Spark, Flask, RESTful API, Apexcharts library, HTML,
            CSS, JavaScript{" "}
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-justify">
        <div className="col-span-4">
          <h2 className="mb-2">Overview</h2>
          <p>
            Designed and implemented a pipeline for real-time streaming and
            analysis of Twitter data using Big Data Technologies. Utilized
            Twitter API, PySpark, Spark Streaming, and Flask to create a
            high-throughput low-latency system for collecting and processing
            data. Executed REST APIs and a JavaScript function to retrieve data
            from the Flask server. Displayed the results in a responsive dynamic
            bar graph by leveraging Apexcharts library, HTML and CSS. Built a
            dynamic dashboard which displays top 15 trending Twitter hashtags
            and updates in real-time (every 2 seconds) using the GET API.
            Provided customers with a sophisticated solution for real-time
            analysis of millions of tweets and a dynamic visualization of
            trending hashtags to facilitate in selling products or raising
            social awareness about a certain topic.
          </p>

          <button className="mt-5">
            <a
              href="https://github.com/Varun710/Twitter-Streaming-with-Big-Data"
              class="relative inline-block text-lg group"
            >
              <span class="relative z-10 block px-4 py-2 overflow-hidden font-bold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">GitHub</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl py-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PySpark
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Spark
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> RESTful API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flask
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Apexcharts
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer sm:mt-[-2rem]">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitter;
