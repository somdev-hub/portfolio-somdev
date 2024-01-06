import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-[7.5rem] py-[1.5rem]">
      <div className="">
        <h3 className="text-[1.5rem] font-roboto font-[800] text-[#161A30]">
          Somdev
        </h3>
      </div>
      <div className="">
        <ul className="flex gap-6 items-center">
          <li className="font-[500] ">About me</li>
          <li className="font-[500] flex items-center gap-3">
            Blogs <FaAngleDown />
          </li>
          <li className="font-[500] flex gap-2 items-center">
            Projects <FaAngleDown />
          </li>
          <li className="font-[500] ">Projects</li>
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
