import React from "react";
import Image from "next/image";

const Projects = ({ name, img, alt, link, tools = "" }) => {
  const toolList = tools.split(" • ");
  return (
    <div className="group inline-block overflow-hidden duration-500 ease-linear">
      <a target="_blank" rel="noreferrer" href={link} className="img">
        <div className="overflow-hidden hover:rounded-xl duration-500">
          <Image
            className="w-full h-full object-cover duration-700 ease-in-out group-hover:scale-105"
            src={img}
            alt={alt}
            width={800}
            height={600}
          />
        </div>
      </a>
      <div className="mt-4">
        <div className="flex space-x-2 mb-3">
          {toolList.map((tool) => (
            <div key={tool} className="tool">
              <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">
                {tool}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Projects;
