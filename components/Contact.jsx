import React from "react";
import Heading from "../components/helpers/Heading";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-black text-white">
      <div className="flex flex-col px-12 mb-[2rem] justify-center w-full h-screen">
        <div className="">
          <Heading title="Let's Talk" />
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://formsubmit.co/varunraghu710@gmail.com"
            method="POST"
            className=" flex flex-col w-full md:w-6/12 "
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white mt-8">
              <a href="/" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-9 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Send</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
