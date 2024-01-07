"use client";

import React, { useEffect } from "react";
import Navbar from "../_components/Navbar";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import Services from "../_components/Services";
import Testimonials from "../_components/Testimonials";
import ProjectsSlides from "../_components/ProjectsSlides";
import Stories from "../_components/Stories";
import Footer from "../_components/Footer";
import ContactNow from "../_components/ContactNow";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuDownload } from "react-icons/lu";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />

      {/* hero section */}

      <div className="xl:mx-[7.5rem] mx-4 ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex flex-col" data-aos="fade-up">
            <h2 className="font-[600] font-poiret-one text-[2rem] md:text-[2.3rem] text-center sm:text-left m-0">
              Hello, I am
            </h2>
            <h1 className="text-navy text-center sm:text-left font-[800] text-[2.5rem] md:text-[4rem] m-0 font-glacial-indifference-bold leading-[normal]">
              Somdev Behera
            </h1>
            <h2 className="text-navy text-center sm:text-left text-[1.2rem] md:text-[1.85rem] font-[600] m-0">
              Full stack developer
            </h2>
            <div className="flex sm:hidden justify-center gap-4 mt-6">
              <button className="bg-navy py-2 px-4 rounded-full font-roboto text-white font-[600]">
                Contact me
              </button>
              <button className="bg-transparent">Download CV</button>
            </div>
            <div className="flex sm:hidden flex-1">
              <DotLottiePlayer
                src="./main-animation.lottie"
                autoplay
                loop
              ></DotLottiePlayer>
            </div>
            <div className="flex md:hidden justify-center">
              <div className="w-6 h-auto flex justify-center">
                <DotLottiePlayer
                  src="./mouse.lottie"
                  autoplay
                  loop
                  className="w-[1rem] h-[1rem] mx-auto"
                ></DotLottiePlayer>
              </div>
            </div>
            <p className="font-[500] text-justify sm:text-left font-glacial-indifference-regular text-[1.125rem] mt-3 md:mt-7 ">
              A creative and passionate full stack developer. I love to craft
              your ideas into reality. Bring your ideas to life with me. With my
              2+ years of experience in web development, I can help you to build
              your dream website. Slide in to know more about my skills and
              works. Feel free to contact me for any queries. And yes, I am
              available for freelance work.
            </p>

            <div className="hidden sm:flex gap-4 mt-6">
              <button className="bg-navy py-2 px-4 rounded-full font-roboto text-white font-[600]">
                Contact me
              </button>
              <button className="bg-transparent">Download CV</button>
            </div>
          </div>
          <div className="hidden sm:flex flex-1">
            <DotLottiePlayer
              src="./main-animation.lottie"
              autoplay
              loop
            ></DotLottiePlayer>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-6 h-auto flex justify-center">
            <DotLottiePlayer
              src="./mouse.lottie"
              autoplay
              loop
              className="w-[1rem] h-[1rem] mx-auto"
            ></DotLottiePlayer>
          </div>
        </div>
      </div>

      <Services />
      <Testimonials />
      <ProjectsSlides />
      <Stories />
      <ContactNow />
      <Footer />
    </div>
  );
};

export default Home;
