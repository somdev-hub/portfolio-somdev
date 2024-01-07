import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const swiperRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="my-[5rem] mx-4 md:mx-0">
      <h2 className="text-[2rem] font-glacial-indifference-bold text-center">
        Testimonials
      </h2>
      <div className="mt-[3rem]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={50}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          modules={[Pagination]}
          // pagination

          slidesPerView={1}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {Array.from({ length: 3 }, (_, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" bg-purple w-full md:w-[50rem] rounded-xl mx-auto">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-[20%] bg-[url('https://images6.fanpop.com/image/photos/39700000/Purple-patterns-backgrounds-wallpaper-39762154-865-1488.jpg')] rounded-t-xl md:rounded-l-xl justify-center py-8">
                      <h1 className="text-white font-marriweather text-[2.5rem] font-[700] text-center">
                        1.
                      </h1>
                    </div>
                    <div className="flex flex-col justify-between p-4 md:p-8 md:w-[40%] flex-1">
                      <div className="flex gap-3 w-full">
                        <div className="flex flex-col gap-2">
                          <h2 className=" text-[3rem] font-marriweather leading-[normal]">
                            Ranveer Singh
                          </h2>
                          <p className="text-[1.2rem] font-outfit font-[600]">
                            Founder & CEO
                          </p>
                        </div>
                      </div>
                      <p className="mt-6 md:mt-[3rem] font-glacial-indifference-regular font-[500] text-[1.125rem]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Molestias, odit accusamus quis nemo laboriosam
                        aspernatur dolorum nisi doloribus iusto maiores impedit
                        beatae voluptas, voluptatum, officiis sed sequi ipsum
                        est laudantium magni eveniet perferendis porro quibusdam
                        dolor magnam. Expedita, deleniti. Ipsa possimus
                        accusantium dolores temporibus rerum. Perspiciatis
                        aliquam dolorem veniam hic?
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="flex gap-2 justify-center mt-[2rem]">
            {Array.from({ length: 3 }, (_, i) => {
              return (
                <div
                  className={`p-1 rounded-full cursor-pointer transition-all ${
                    activeIndex === i ? "bg-purple px-5" : "bg-navy"
                  }`}
                  key={i}
                  onClick={() => swiperRef.current.slideTo(i)}
                ></div>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
