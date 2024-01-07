import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-[5rem] mx-4 lg:mx-[7.5rem]">
      <div
        className="flex flex-col sm:flex-row justify-between"
        data-aos="fade-up"
      >
        <div className="flex flex-col" data-aos="fade-up">
          <h2 className="font-[500] font-roboto text-[1.8rem] m-0">
            First things first
          </h2>
          <h2 className="font-[800] text-[2rem] m-0 font-glacial-indifference-bold">
            Services that I offer
          </h2>
        </div>
        <p className="md:w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          laboriosam ad earum officia? Fuga ullam sapiente iusto expedita.
          Tempora, accusantium? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse sint harum quod officiis voluptates, iste unde
          obcaecati sunt laborum impedit?
        </p>
      </div>

      <div className="flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-4 mt-12">
        <div
          className="bg-pink rounded-xl p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="font-[600] font-glacial-indifference-bold text-[1.5rem] ">
            Web development
          </h3>
          <p className="font-[500] font-outfit mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sunt
            doloremque iure dolor corporis quibusdam soluta veritatis magni
            deleniti provident eos autem vel, repudiandae repellat libero maxime
            sed voluptate distinctio. A error fugit dolor voluptatum et,
            assumenda quibusdam neque voluptate,
          </p>
          <p className="font-roboto mt-3 text-[1.2rem]">Learn more</p>
        </div>
        <div
          className="bg-pink rounded-xl p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="font-[600] font-glacial-indifference-bold text-[1.5rem] ">
            Web development
          </h3>
          <p className="font-[500] font-outfit mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sunt
            doloremque iure dolor corporis quibusdam soluta veritatis magni
            deleniti provident eos autem vel, repudiandae repellat libero maxime
            sed voluptate distinctio. A error fugit dolor voluptatum et,
            assumenda quibusdam neque voluptate,
          </p>
          <p className="font-roboto mt-3 text-[1.2rem]">Learn more</p>
        </div>
        <div
          className="bg-pink rounded-xl p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="font-[600] font-glacial-indifference-bold text-[1.5rem] ">
            Web development
          </h3>
          <p className="font-[500] font-outfit mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sunt
            doloremque iure dolor corporis quibusdam soluta veritatis magni
            deleniti provident eos autem vel, repudiandae repellat libero maxime
            sed voluptate distinctio. A error fugit dolor voluptatum et,
            assumenda quibusdam neque voluptate,
          </p>
          <p className="font-roboto mt-3 text-[1.2rem]">Learn more</p>
        </div>
        <div
          className="bg-pink rounded-xl p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="font-[600] font-glacial-indifference-bold text-[1.5rem] ">
            Web development
          </h3>
          <p className="font-[500] font-outfit mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sunt
            doloremque iure dolor corporis quibusdam soluta veritatis magni
            deleniti provident eos autem vel, repudiandae repellat libero maxime
            sed voluptate distinctio. A error fugit dolor voluptatum et,
            assumenda quibusdam neque voluptate,
          </p>
          <p className="font-roboto mt-3 text-[1.2rem]">Learn more</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
