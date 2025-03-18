import React from "react";
const Heropic = "/Heropic.png";

const HomePage = () => {
  return (
    <div className="h-[calc(100vh-10vh)] w-[100vw] bg-[#222831] grid-cols-2 md:grid-cols-2">
      <div className="content text-white flex flex-col items-center justify-center">
        <h1 className="text-left text-xl sm:text-3xl md: text-4xl">
          Creative UI
        </h1>
        <span className="text-left text-xl sm:text-3xl md: text-4xl text-cyan-400">
          Designer
        </span>
        <div className="btns-container flex-gap-4">
          <button className="bg-cyan-400 p-2 rounded-full px-6 hover:bg-amber-500 hover:cursor-pointer">Hire Me</button>
          <button className="outline-1 outline-white p-2 rounded-full px-6 hover:bg-white hover:outline-cyan-400 hover:text-black">
            <a download={Heropic}>Download CV </a>
          </button>
          <div>
            <img src={Heropic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
