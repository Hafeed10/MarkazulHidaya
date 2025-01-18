/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import icon2 from "./Img/icon2.svg";
import instructorImg from "./Img/img.jpg";
import { Course } from '../Data/CourseDetiel'

function CourseDetielsTab() {
  const [activeTab, setActiveTab] = useState("AboutCourse");

  const Tabs = [
    {
      tabKey: "AboutCourse",
      title: "About Course",
    },
    {
      tabKey: "Syllabus",
      title: "Syllabus",
    },
    {
      tabKey: "instructor",
      title: "instructor",
    },
  ];

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <div>
      <div className="w-full py-4 border-b-2 border-[#5555553e] md:py-5 lg:py-8">
        <ul
          className="flex items-start  justify-between md:justify-start w-full h-full px-2 list-none  md:gap-10 lg:gap-14 xs:text-xl sm:text-2xl lg:text-3xl"
          role="tablist"
        >
          {Tabs.map((tab) => (
            <li key={tab.tabKey} className="text-center cursor-pointer">
              <button
                className={`hover:text-[#CCA65D] text-[#CCA65D]  ${activeTab === tab.tabKey
                  ? "border-[#6E8B3D] border-b-2 lg:border-b-4"
                  : ""
                  }`}
                onClick={() => handleTabSelect(tab.tabKey)}
                role="tab"
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* ============================================================================================================================== */}

      {/* ============================================================================================================================== */}
      <div className={`w-full py-12 h-full`} id={activeTab}>
        {activeTab === "AboutCourse" && (
          <div className="flex flex-col items-center md:items-start text-center w-full h-full gap-8 md:gap-6   md:text-start">
            <div className="flex flex-col md:flex-row  items-center justify-start w-full gap-5 md:gap-10 ">
              <h2 className="text-[#555555] text-3xl md:text-5xl lg:text-[3.5rem]">
                Certificate Courese in <br />
                Markazul Hidaya
              </h2>
              <div className="flex items-center gap-4 md:gap-6">
                <div className=" text-[#555555] justify-center  cursor-pointer w-auto font-normal px-3 lg:px-4 space-x-1.5 flex items-center  py-1 bg-[#CDCDCD] rounded-lg ">
                  <img src={icon2} alt="" className="w-4 lg:w-5" />
                  <p className=" text-sm lg:text-base  font-sans tracking-wide">
                    2 weeks
                  </p>
                </div>
                <div className=" text-[#555555] justify-center  cursor-pointer w-auto font-normal px-3 lg:px-4 space-x-1.5 flex items-center  py-1 bg-[#CDCDCD] rounded-lg ">
                  <img src={icon2} alt="" className="w-4 lg:w-5 h-4 lg:h-5 " />
                  <p className=" text-sm lg:text-base  font-sans tracking-wide">
                    12000/-
                  </p>
                </div>
              </div>
            </div>
            <p className="pb-2 font-sans xs:text-base sm:text-lg  lg:text-xl">
              {Course.map((item) => (
                <p key={item.id}>{item.content}</p>
              ))}
            </p>
            <div className="justify-center  cursor-pointer w-auto px-4 lg:px-6 flex items-center  py-1.5 lg:py-2 bg-[#ffb134] rounded-md lg:rounded-lg">
              <p className="text-white text-base font-normal font-sans tracking-wide">
                Apply Now
              </p>
            </div>
          </div>
        )}
        {/* ============================================================================================================================== */}

        {/* ============================================================================================================================== */}
        {activeTab === "Syllabus" && (
          <div className="flex flex-col items-start w-full h-full gap-6 md:gap-8 text-start">
            <h2 className="text-[#555555] text-3xl md:text-5xl lg:text-[3.5rem]">
              Certificate Courese in <br />
              Markazul Hidaya
            </h2>
            <ul className=" font-sans text-base md:text-lg list-disc list-inside">
              <h1>Coming Soon....</h1>
            </ul>
          </div>
        )}
        {/* ============================================================================================================================== */}

        {/* ============================================================================================================================== */}
        {activeTab === "instructor" && (
          <div className="flex flex-col md:flex-row items-start w-full h-full gap-8 md;gap-10 lg:p-12">
            <img
              src={instructorImg}
              className="w-full md:w-auto object-cover h-fit md:h-80 rounded-xl lg:rounded-xl"
              alt=""
            />
            <div className="flex flex-col items-start w-full h-full gap-4 md:gap-6 text-start">
              <h2 className="text-2xl font-normal text-[#ffb134] select-none lg:text-3xl xl:text-4xl">
                KP Muhammed Musliyar
              </h2>
              <p className="font-sans text-base lg:text-lg xl:text-xl">
                {Course.map((item) => (
                  <p key={item.id}>{item.content}</p>
                ))}
              </p>
            </div>
          </div>
        )}
        {/* ============================================================================================================================== */}

        {/* ============================================================================================================================== */}
      </div>
    </div>
  );
}

export default CourseDetielsTab;
