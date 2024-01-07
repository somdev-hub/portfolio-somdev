import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const NavLinks = ({ children, options = false, href }) => {
  return (
    <li className="font-[500] flex items-center gap-3 flex-col relative group">
      <Link href={href} className="flex gap-3 items-center">
        {children}
        {options && <FaAngleDown className="text-[14px] m-0 flex mt-[2px]" />}
      </Link>
      <div className="w-0 group-hover:w-full transition-all h-[2px] absolute rounded-full bg-navy bottom-[-7px]"></div>
    </li>
  );
};

const Navbar = () => {
  const navLinks = [
    {
      name: "About me",
      link: "/about"
    },
    {
      name: "Blogs",
      link: "/blogs",
      options: true
    },
    {
      name: "Projects",
      link: "/projects",
      options: true
    },
    {
      name: "Contact me",
      link: "/contact"
    }
  ];
  return (
    <nav className="flex justify-between px-[7.5rem] py-[1.5rem]">
      <div className="">
        <h3 className="text-[1.5rem] font-roboto font-[800] text-[#161A30]">
          Somdev
        </h3>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <NavLinks key={i} options={link.options} href={link.link}>
              {link.name}
            </NavLinks>
          ))}
          <li>
            <button className="bg-navy py-2 px-4 rounded-full font-roboto text-white font-[600]">
              Contact me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
