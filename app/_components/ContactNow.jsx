import React from "react";

const ContactNow = () => {
  return (
    <div className="mt-[5rem] bg-purple rounded-xl p-[3rem] w-[60vw] mx-auto text-center">
      <h2 className="font-[700] text-[2.3rem] font-glacial-indifference-bold">
        <span className="font-[500] font-marriweather m-0 leading-[normal]">
          Got some work{" "}
        </span>
        contact me
      </h2>
      <p className="text-[1.125rem] font-glacial-indifference-regular my-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo
        atque, et non eum fuga nobis ab quae corporis tempore assumenda
        aspernatur quas iusto dolores!
      </p>
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-navy py-3 px-8 rounded-full font-outfit text-white font-[600]">
          Contact me
        </button>
        <button className="bg-transparent font-glacial-indifference-regular text-[1.2rem]">
          Schedule a call
        </button>
      </div>
      
    </div>
  );
};

export default ContactNow;
