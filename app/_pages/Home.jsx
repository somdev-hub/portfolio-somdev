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

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />

      {/* hero section */}

      <div className="mx-[7.5rem] ">
        <div className="flex items-center">
          <div className="flex-1 flex flex-col" data-aos="fade-up">
            <h2 className="font-[600] font-outfit text-[2.3rem] m-0">
              Hello, I am
            </h2>
            <h1 className="text-navy font-[800] text-[4rem] m-0 font-glacial-indifference-bold leading-[normal]">
              Somdev Behera
            </h1>
            <h2 className="text-navy text-[1.85rem] font-[600] m-0">
              Full stack developer
            </h2>
            <p className="font-[500] font-outfit text-[1.125rem] mt-10 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              sed autem facere animi expedita voluptatibus. Cum inventore ea
              quis suscipit incidunt amet maiores aspernatur, quas quisquam
              pariatur adipisci fugiat dolores eum nisi voluptatibus vel nihil
              iste sint assumenda mollitia a minus qui corrupti! Provident
              voluptas suscipit distinctio ducimus nam dolorum?
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-navy py-2 px-4 rounded-full font-roboto text-white font-[600]">
                Contact me
              </button>
              <button className="bg-transparent ">Download CV</button>
            </div>
          </div>
          <div className="flex flex-1">
            <DotLottiePlayer
              src="./main-animation.lottie"
              autoplay
              loop
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
