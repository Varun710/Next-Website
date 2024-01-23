import React from "react";
import ProjectItem from "../components/helpers/ProjectItem";
import Blog from "../public/assets/projects/blog.jpg";
import AI from "../public/assets/projects/AI.jpg";
import ecommerce from "../public/assets/projects/ecommerce.jpg";
import employee from "../public/assets/projects/employee.jpg";
import Heading from "./helpers/Heading";
const projectsData = [
  {
    name: "AI PDF Chat Application",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: "Next.js . OpenAI . Stripe . Tailwind . Vercel",
    link: "https://example.com/project1",
    img: AI,
  },
  {
    name: "Real-Time REST API : Blog App",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: "Java . Spring Boot . MySQL . AWS",
    link: "https://example.com/project2",
    img: Blog,
  },
  {
    name: "E-Commerce Web Application",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: "Next.js . Stripe . TypeScript . Payload CMS",
    link: "https://example.com/project3",
    img: ecommerce,
  },
  {
    name: "Employee Management System",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: "Java . Spring Boot . MySQL . React.js . AWS",
    link: "https://example.com/project4",
    img: employee,
  },
];
const Project = () => {
  return (
    <section
      id="projects"
      className="text-center bg-black text-white pb-24 flex-row"
    >
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
