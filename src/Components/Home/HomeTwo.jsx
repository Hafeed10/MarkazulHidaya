// eslint-disable-next-line no-unused-vars
import React from "react";
import bgAcademic from "../../assets/Img/img2.jpg"; // Update the path as needed

const HomeTwo = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgAcademic})` }}
      ></div>
      <div className="relative z-10 text-center text-white px-4">
        <h3 className="text-lg md:text-xl font-sans font-light uppercase tracking-widest">
          JOIN THE MARKAZUL HIDAYA FAMILY TODAY
        </h3>
        <h1 className="text-2xl font-sans md:text-4xl font-bold mt-2">
          Join With Us To Experience
        </h1>
        <h1 className="text-2xl md:text-4xl font-sans font-bold text-[#7babd2]">
          Real Edutainmental Atmosphere
        </h1>
        <button className="mt-6 px-6 py-3 bg-[#1e7594] hover:bg-[#1e7494dd] text-white font-sans font-semibold text-lg rounded-md transition-all">
          REGISTER NOW →
        </button>
      </div>
    </div>
  );
};

export default HomeTwo;
