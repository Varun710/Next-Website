import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import Heading from "./Heading";

const About = () => {
  const socialIcons = [
    { icon: <FaLinkedin />, link: "your-linkedin-profile-url" },
    { icon: <FaGithub />, link: "your-github-profile-url" },
    { icon: <FaEnvelope />, link: "mailto:your-email@example.com" },
    { icon: <FaFileAlt />, link: "link-to-your-resume" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-full h-screen "
    >
      <Heading title="About" />
      <div className="flex flex-col items-center justify-center mx-8">
        <p className="text-black px-16 mb-6 small:text-base small:px-4 medium::text-xl text-xl ">
          I'm a full-stack engineer passionate about using technology to solve
          problems and make a positive impact. With an MS in CS, I effortlessly
          traverse the Java-to-React spectrum and architect solutions from
          conception to delivery. An AWS-certified cloud practitioner, I build
          scalable systems spanning robust backend APIs to intuitive UX.
        </p>
        <p className="text-black px-16 mb-24 small:text-base small:px-4 text-xl">
          Beyond coding, I explore nature through photography and knowledge
          through non-fiction, though I have read Harry Potter 10+ times. For
          me, software serves to enhance lives. I’m driven to join teams that
          code to create a better, more innovative tomorrow.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        {socialIcons.map((social, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-laundry-blue hover:text-black transition duration-300"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
