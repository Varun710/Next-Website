import React from "react";
import Student from "../public/assets/projects/app.jpg";
import Fake from "../public/assets/projects/fake.jpg";
import Twitter from "../public/assets/projects/twitter.jpeg";
import Website from "../public/assets/projects/website.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full mt-[4rem] mb-[8rem] pt-[2rem] bg-gradient-to-b from-black to-black"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-[2.5rem] pl-5 md:text-[3.4rem] tracking-widest  text-white pb-10">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Twitter Streaming Using Big Data"
            backgroundImg={Twitter}
            projectUrl="/twitter"
          />
          <ProjectItem
            title="Portfolio Website"
            backgroundImg={Website}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Fake News Detection"
            backgroundImg={Fake}
            projectUrl="/fake"
          />
          <ProjectItem
            title="Student Assist App"
            backgroundImg={Student}
            projectUrl="/student"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
