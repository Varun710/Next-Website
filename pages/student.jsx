import Image from "next/image";
import React from "react";
import Website from "../public/assets/projects/website.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const student = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Website}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-large">Student Assist App</h2>
          <h3>Flutter, Dart, Google Firebase, Android Studio, and VSCode. </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-justify">
        <div className="col-span-4">
          <h2 className="mb-2">Overview</h2>
          <p className="">
            Managed full lifecycle of a project using agile methodologies and
            led a team of five students in the design and development of a
            responsive mobile app with a user-friendly interface. Accomplished
            email and password authentication using Google Firebase and built a
            sign in page for easy access to the app. Devised both frontend and
            backend of the app and deployed and tested it on Android and iOS.
            Wrote project report and documentation.
          </p>

          <button className="mt-5">
            <a
              href="https://github.com/Varun710"
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
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flutter
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Dart
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Android Studio
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> VSCode
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer sm:mt-8">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default student;
