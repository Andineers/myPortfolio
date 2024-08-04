import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/js.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";

const Skills = () => {
  return (
    <div className="border border-gray-600 bg-black text-gray-400 h-auto max-w-3xl mx-auto p-2 grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">

    <h2 className="text-gray-700 text-xl md:text-3xl font-bold m-4">
      My <br /> Tech <br /> Stack
    </h2>
  
    <div className="flex flex-col items-center m-4 sm:my-0 w-[20x] md:w-[40px]">
      <img src={html} alt="HTML" className="w-full h-auto" />
      <p className="mt-2">HTML</p>
    </div>
  
    <div className="flex flex-col items-center m-4 sm:my-0 w-[20x] md:w-[40px]">
      <img src={css} alt="CSS" className="w-full h-auto" />
      <p className="mt-2">CSS</p>
    </div>
  
    <div className="flex flex-col items-center m-4 sm:my-0 w-[20x] md:w-[40px]">
      <img src={javascript} alt="Javascript" className="w-full h-auto" />
      <p className="mt-2">Javascript</p>
    </div>
  
    <div className="flex flex-col items-center m-4 sm:my-0 w-[20x] md:w-[40px]">
      <img src={tailwind} alt="Tailwind" className="w-full h-auto" />
      <p className="mt-2">Tailwind</p>
    </div>
  
    <div className="flex flex-col items-center m-4 sm:my-0 w-[20x] md:w-[40px]">
      <img src={react} alt="React" className="w-full h-auto" />
      <p className="mt-2">React</p>
    </div>
  
  </div>
  
  );
};

export default Skills;
