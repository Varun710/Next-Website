import React from "react";
import ProjectItem from "./ProjectItem";
import website from "../public/assets/projects/website.jpg";
import Heading from "./Heading";
const projectsData = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: "Spring Boot • React",
    link: "https://example.com/project1",
    img: website,
  },
  {
    name: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: "React • Node.js • MongoDB",
    link: "https://example.com/project2",
    img: website,
  },
  {
    name: "Project 3",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: "React • Node.js • MongoDB",
    link: "https://example.com/project3",
    img: website,
  },
  {
    name: "Project 4",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: "React • Node.js • MongoDB",
    link: "https://example.com/project4",
    img: website,
  },
];
const Project = () => {
  return (
    <section className="text-center bg-black text-white pb-24 flex-row">
      {" "}
      <Heading title="Projects" />
      <div className="grid grid-cols-1 px-12 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {" "}
        {projectsData.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Project;
