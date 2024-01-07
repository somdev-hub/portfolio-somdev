import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-[5rem] bg-navy rounded-t-[2rem] pt-[5rem]">
      <div className="flex flex-col md:flex-row  justify-between px-6 lg:px-[7.5rem] ">
        <div className="flex flex-1"></div>
        <div className="flex flex-wrap gap-12 flex-1">
          <ul className="text-white">
            <li className="font-outfit font-[600] text-[1.2rem]">DOCUMENTS</li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Privacy policy
            </li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Terms of usage
            </li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              About me
            </li>
          </ul>
          <ul className="text-white">
            <li className="font-outfit font-[600] text-[1.2rem]">HIRE ME</li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Connect on linkedin
            </li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Download resume
            </li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Explore my works
            </li>
          </ul>
          <ul className="text-white">
            <li className="font-outfit font-[600] text-[1.2rem]">HIRE ME</li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Connect on linkedin
            </li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Download resume
            </li>
            <li className="font-[500] font-glacial-indifference-regular my-5">
              Explore my works
            </li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div className="mx-6 lg:mx-[7.5rem] mt-10 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col flex-1">
          <h3 className="text-white mb-4 text-outfit font-[600] text-[1.2rem]">
            Subscribe to my newsletter
          </h3>
          <form action="">
            <input
              type="text"
              placeholder="enter your email"
              className="bg-white rounded-full px-4 py-2 w-[20rem] mr-4"
            />
            <button className="bg-white rounded-full p-3">
              <GoArrowRight />
            </button>
          </form>
          <p className="text-white font-glacial-indifference-regular text-[0.9rem] mt-4 w-[20rem]">
            By subscribing you agree to our
            <span>
              <a href="" className="text-blue">
                {" "}
                terms and conditions
              </a>
            </span>{" "}
            and{" "}
            <span>
              <a href="" className="text-blue">
                {" "}
                privacy policy
              </a>
            </span>{" "}
            of this website. We will never share your email with anyone.
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-white mb-4 text-outfit font-[600] text-[1.2rem]">
            Follow me on my social handles
            <div className="flex gap-4 mt-4">
              <FaLinkedin />
              <FaInstagram />
              <FaGithub />
              <FaTwitter />
            </div>
          </h3>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex justify-center items-center  py-3 ">
        <p className="text-blue text-[0.9rem] font-glacial-indifference-regular">
          Designed and developed by Somdev Behera
        </p>
      </div>
    </div>
  );
};

export default Footer;
