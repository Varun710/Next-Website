import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../public/assets/white.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState("#ffffff");

  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={
        color
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-black"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <a href="https://varunraghu.net/">
          <Image
            src={NavLogo}
            alt="logo"
            width="90"
            height="90"
            className="cursor-pointer bg-opacity-0"
          />
        </a>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="cursor-pointer hidden md:flex"
          >
            <li className="ml-10 text-m">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="ml-10 text-m">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                About
              </Link>
            </li>
            <li className="ml-10 text-m">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-20}
                duration={100}
              >
                Projects
              </Link>
            </li>
            <li className="ml-10 text-m">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-90}
                duration={100}
              >
                Skills
              </Link>
            </li>
            <li className="ml-10 text-m">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={135}
                duration={100}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-base">
                  Home
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-base">
                  About
                </li>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-base">
                  Projects
                </li>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-base">
                  Skills
                </li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-base">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
