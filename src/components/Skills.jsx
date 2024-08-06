import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/js.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import figma from "../assets/img/figma.png";
import corelDraw from "../assets/img/corelDraw.png";
import LightningBorder from './LightningBorder';

const Skills = () => {
  return (
    <LightningBorder>
      {/* <h2 className="text-gray-700 text-xl md:text-3xl font-bold mt-4 mb-4 text-center">
        My Tech Stack
      </h2> */}
      <div className="grid grid-cols-6 gap-4 md:flex md:justify-between md:items-center">
        <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[40px]">
          <img src={html} alt="HTML" className="w-full h-auto" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[40px]">
          <img src={css} alt="CSS" className="w-full h-auto" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[40px]">
          <img src={javascript} alt="Javascript" className="w-full h-auto" />
          <p className="mt-2">Javascript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[40px]">
          <img src={tailwind} alt="Tailwind" className="w-full h-auto" />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[40px]">
          <img src={react} alt="React" className="w-full h-auto" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[40px]">
          <img src={figma} alt="Figma" className="w-full h-auto" />
          <p className="mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[40px]">
          <img src={corelDraw} alt="Corel Draw" className="w-full h-auto" />
          <p className="text-center">Corel Draw</p>
        </div>
      </div>
    </LightningBorder>
  );
};


export default Skills;
