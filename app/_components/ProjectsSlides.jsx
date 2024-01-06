import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const ProjectsSlides = () => {
  const swiperRef = useRef(null);
  return (
    <div className="mt-[5rem] bg-navy px-[7.5rem]rem rounded-[1rem] py-[3rem]">
      <div className="px-[6rem] flex justify-between">
        <div className="flex flex-col flex-1">
          <h3 className="text-purple text-[1.6rem] font-roboto font-[500]">
            Explore{" "}
          </h3>
          <h3 className="text-purple text-[2.3rem] font-glacial-indifference-bold font-[700] leading-[normal]">
            my projects
          </h3>
        </div>
        <div className="flex flex-col flex-1 items-start">
          <p className=" text-white font-outfit font-[600]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quo?
            Deserunt, laborum. Esse dignissimos nihil quos ipsa a quam sequi
            iure voluptatum eos. Fuga, aperiam? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Necessitatibus voluptate laborum culpa
            magni odit. Enim.
          </p>
          <button className="bg-purple py-2 px-4 rounded-full font-roboto mt-6 text-black font-[600]">
            Explore more
          </button>
        </div>
      </div>
      <div className="mt-12 px-12 rounded-[2rem]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
        >
          {Array.from({ length: 5 }, (_, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="h-[67vh] w-[70vw] bg-[url('https://img.freepik.com/premium-photo/japan-national-symbol-sightseeing-mount-fuji-representative-landmark-beautiful-mountain_916211-257625.jpg')] rounded-[2rem] bg-cover relative mx-auto">
                  <div className="absolute bg-pink p-4 rounded-xl w-[50%] bottom-[10%] left-[5%] shadow-lg">
                    <p className="font-[500] font-glacial-indifference-regular text-[1.125rem]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Repellat neque tempora nesciunt distinctio, ducimus
                      veritatis obcaecati consectetur quas rerum? Fugiat quas id
                      maxime dolores adipisci, a modi? Minima, esse minus? Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur, itaque.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-10 ml-[5rem] flex gap-4">
        <button
          className="group p-3 rounded-full bg-white hover:bg-purple swiper-button-prev"
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
        >
          <FaArrowLeftLong className="group-hover:text-white" />
        </button>
        <button
          className="group p-3 rounded-full bg-white hover:bg-purple swiper-button-next"
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
        >
          <FaArrowRightLong className="group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSlides;
