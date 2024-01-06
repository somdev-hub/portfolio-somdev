import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCoverflow, EffectCards } from "swiper/modules";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
  return (
    <div className="my-[5rem]">
      <h2 className="text-[2rem] font-glacial-indifference-bold text-center">
        Testimonials
      </h2>
      <div className=" mt-[3rem]">
        <Swiper>
          {Array.from({ length: 3 }, (_, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" bg-purple w-[50rem] rounded-xl mx-auto">
                  <div className="flex">
                    <div className="w-[20%] bg-[url('https://images6.fanpop.com/image/photos/39700000/Purple-patterns-backgrounds-wallpaper-39762154-865-1488.jpg')] rounded-l-xl justify-center py-8">
                      <h1 className="text-white font-marriweather text-[2.5rem] font-[700] text-center">
                        1.
                      </h1>
                    </div>
                    <div className="flex flex-col justify-between p-8 w-[40%] flex-1">
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
                      <p className="mt-[3rem] font-glacial-indifference-regular font-[500] text-[1.125rem]">
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
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
