// eslint-disable-next-line no-unused-vars
import React from "react";

import AboutImg from "../assets/Img/silver.jpg";
import VisionImg from "../assets/Img/Faculties/welcome.jpg";
import MissionImg from "../assets/Img/Faculties/images.jpeg";
import PatternBg from "../assets/Img/bgPattern.jpg";

import Life1 from "../assets/Img/hafe.jpg";
import Life2 from "../assets/Img/palikku.jpg";
import Life3 from "../assets/Img/500.jpg";
import Life4 from "../assets/Img/500.jpg";
import { About_dat, Our_Vision, Our_Mission } from '../Data/AboutData'

function About() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-full space-y-7 lg:space-y-12 bg-white py-12 md:py-16 lg:py-22 w-ful">
        <h2 className="text-[#619A46] text-4xl md:text-5xl lg:text-[3.5rem]">
          About us
        </h2>
        <img
          src={AboutImg}
          className="object-cover w-full h-48 md:h-auto "
          alt=""
        />
        <p className="px-3 md:px-10 lg:px-10 xl:px-36 mt-4 font-sans text-start text-[#555555] text-base md:text-xl  lg:text-2xl font-normal leading-snug tracking-wide">
          {About_dat.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </p>
      </div>
      {/* ======================================================================================================================================= */}

      {/* ======================================================================================================================================= */}
      {/* Vission and mission  */}
      <div
        style={{ backgroundImage: `url(${PatternBg})` }}
        className="relative flex flex-col items-center justify-center w-full h-full px-3 py-16 md:py-20 lg:py-24 bg-no-repeat gap-y-10 md:gap-y-12 xl:gap-y-20 md:px-10 lg:px-10 xl:px-36"
      >
        <div className="w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 grid-rows-auto">
          <div className=" order-2 space-y-3 md:space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] ">Our Vision</h2>
            <p className="font-sans text-sm md:text-base lg:text-xl">
              {Our_Vision.map((item) => (
                <p key={item.id}>{item.content}</p>
              ))}
            </p>
          </div>
          <img
            className="md:order-2 object-cover w-full h-60 md:h-full rounded"
            src={VisionImg}
            alt=""
          />
        </div>
        {/* ======================================================================================================================================= */}

        {/* ======================================================================================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 grid-rows-auto">
          <img
            className="object-cover w-full h-60 md:h-3/4 rounded"
            src={MissionImg}
            alt=""
          />
          <div className="space-y-3 md:space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] ">
              Our Mission
            </h2>
            <p className="font-sans text-sm md:text-base lg:text-xl">
              {Our_Mission.map((iteme) => (
                <p key={iteme.id}>{iteme.content}</p>
              ))}
            </p>
          </div>
        </div>
      </div>
      {/* ======================================================================================================================================= */}

      {/* ======================================================================================================================================= */}
      <div className="flex flex-col items-start justify-center w-full h-auto px-3 py-16 md:py-20 lg:py-24 space-y-12 md:px-10 lg:px-10 xl:px-36">
        <h2 className="text-4xl md:text-5xl lg:text-[3rem]">Campus Life</h2>
        <div className="grid w-full h-full grid-cols-1 grid-rows-auto md:grid-cols-2 gap-3 md:gap-5 ">
          <img
            className="w-full  object-cover h-72 md:h-full lg:h-[80vh]"
            src={Life1}
            alt=""
          />
          <div className="grid grid-cols-2 h-[80vh] w-full gap-3 md:gap-5 grid-rows-2">
            <img
              className="object-cover w-full h-full col-span-2"
              src={Life2}
              alt=""
            />
            <img className="object-cover w-full h-full" src={Life4} alt="" />
            <div className="relative flex items-center justify-center w-full h-full">
              <img className="object-cover w-full h-full" src={Life3} alt="" />
              <h2 className="absolute text-6xl font-extrabold tracking-wider text-white">
                22+
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
