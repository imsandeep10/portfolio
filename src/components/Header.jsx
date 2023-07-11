import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Button from "./Button";
function Header() {
  const [style, setStyle] = useState("translate-x-[100%] hidden");
  const [isOpen, setIsOpen] = useState(true);
  function toggleMenu(e) {
    if (isOpen) {
      setStyle("translate-x-[100%] hidden");
      setIsOpen(false);
    } else {
      setStyle("translate-x-0 ");
      setIsOpen(true);
    }
  }
  return (
    <header className="w-full relative">
      <nav className="  h-[100px] flex mx-[30px] lg:mx-[70px] pt-[20px] lg:pt-[26px] items-center justify-between text-[17px]">
        <div>
          <img src={Logo} alt="" />
        </div>
        {/* Links for desktop and tablet devices */}
        <div className="hidden lg:flex justify-center items-center gap-[55px]">
          <ul className="flex gap-[42px] text-sm text-bluePrimary font-semibold">
            <li>
              <a href="#aboutme">01. About</a>
            </li>

            <li>
              <a href="#experience">02. Experience</a>
            </li>

            <li>
              <a href="#skills">03. Skills</a>
            </li>

            <li>
              <a href="#education">04. Education</a>
            </li>

            <li>
              <a href="#contact">05. Contact</a>
            </li>
          </ul>
          <div>
            <Button
              title="Resume"
              href="../assets/resume.pdf"
              classes="border border-greenAccent px-[49px] text-sm text-greenAccent "
            />
          </div>
        </div>

        <svg
          onClick={(e) => toggleMenu()}
          className="w-8 lg:hidden flex cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"
            fill="rgba(100,255,218,1)"
          ></path>
        </svg>
      </nav>
      <div className="">
        <nav className="">
          <ul
            className={`flex-row ${style} text-bluePrimary font-semibold   lg:hidden  
            absolute top-[100px] left-0 right-0 bottom-0  bg-bgPrimary text-center
            h-[60vh]  border-b-2 border-greenAccent `}
          >
            <li className="pt-10">
              <a href="#aboutme" onClick={(e) => setTimeout(toggleMenu, 500)}>
                01. About
              </a>
            </li>

            <li className="pt-10">
              <a
                href="#experience"
                onClick={(e) => setTimeout(toggleMenu, 500)}
              >
                02. Experience
              </a>
            </li>

            <li className="pt-10">
              <a href="#skills" onClick={(e) => setTimeout(toggleMenu, 500)}>
                03. Skills
              </a>
            </li>

            <li className="pt-10">
              <a href="#education" onClick={(e) => setTimeout(toggleMenu, 500)}>
                04. Education
              </a>
            </li>

            <li className="pt-10">
              <a href="#contact" onClick={(e) => setTimeout(toggleMenu, 500)}>
                05. Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
