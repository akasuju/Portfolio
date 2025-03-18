import React from "react";
import AboutMepic from "../assets/AboutMepic.png"; // Update the path to the correct location
import lightbulb from "../assets/lightbulb.png";
import lighnting from "./lighnting.png";
const AboutMe = () => {
  return (
    <div className="h-[calc(100vh-10vh)] w-[100vw] bg-[#222831] grid-cols-2 md:grid-cols-2">
      <div className="content text-white flex flex-col items-center justify-center relative">
        <h1 className="text-cyan-400">About </h1>
        <p className="text-sm sm:text-base md:text-md w-[50%] text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          culpa consequuntur optio placeat delectus aspernatur sapiente, laborum
          ipsum. Numquam, aliquid!
        </p>
        <img src={lighnting} alt="" className="h-[7vh] absolute top-0 left-[13rem]" />
        <img src={lightbulb} alt="" className="h-[]"/>
      </div>
      <div className="image flex items-center justify-center">
        <img src={AboutMepic} alt="" className="h-[40vh]"/>
      </div>
    </div>
  );
};

export default AboutMe;
