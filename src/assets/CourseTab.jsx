import React, { useState } from "react";
import CourseCard from "./CourseCard";
import {
  CertificateData,
  DiplomaData,
  ShortTermData,
} from "../Data/CourseData";

function CourseTab() {
  const [activeTab, setActiveTab] = useState("Certificate");

  const Tabs = [
    {
      tabKey: "Certificate",
      title: "ALL PROGRAMMES",
    },
    {
      tabKey: "Diploma",
      title: "PG PROGRAMMES",
    },
    {
      tabKey: "ShortTerm",
      title: "UG PROGRAMMES",
    },
  ];
  const Tabse = [
    {
      tabKey: "Certificate",
      title: "ALL ",
    },
    {
      tabKey: "Diploma",
      title: "PG ",
    },
    {
      tabKey: "ShortTerm",
      title: "UG ",
    },
  ];
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  const renderCourseCards = (courses) => {
    return courses.map((course, index) => (
      <CourseCard
        key={index}
        img={course.img}
        title={course.title}
        description={course.description}
        buttonTo={course.buttonTo}
      />
    ));
  };

  return (
    <div className="relative flex flex-col  items-center w-full h-full py-24 space-y-8 text-center bg-no-repeat md:space-y-14 md:text-start">
      <div className="space-y-4 md:space-y-8">
        <h2 className="text-[2.5rem] lg:text-5xl">Our Courses</h2>
        <p className="font-sans text-lg leading-7 tracking-wide lg:text-xl lg:leading-8">
          Explore a variety of courses designed to enrich your knowledge and
          skills. From foundational religious studies to advanced theological
          education, we offer programs for all levels. Join us to deepen your
          understanding and grow in your faith!
        </p>
      </div>

      <div className="w-full h-12 bg-white md:block hidden rounded-md shadow-lg sm:h-16 lg:h-20">
        <ul
          className="flex items-center  w-full h-full px-2 list-none justify-evenly taxt-lg sm:text-2xl lg:text-3xl"
          role="tablist"
        >
          {Tabs.map((tab) => (
            <li key={tab.tabKey} className="text-center cursor-pointer">
              <button
                className={`hover:text-[#ffb134] text-[#ffb134]  ${
                  activeTab === tab.tabKey
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

      <div className="w-full h-12 bg-white md:hidden xl:hidden rounded-md shadow-lg sm:h-16 lg:h-20">
        <ul
          className="flex items-center   w-full h-full px-2 list-none justify-evenly taxt-lg sm:text-2xl lg:text-3xl"
          role="tablist"
        >
          {Tabse.map((tab) => (
            <li key={tab.tabKey} className="text-center cursor-pointer">
              <button
                className={`hover:text-[#ffb134] text-[#ffb134]  ${
                  activeTab === tab.tabKey
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
      <div
        className={`grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-5 lg:gap-4 xl:gap-10 md:grid-rows-2 h-full`}
        id={activeTab}
      >
        {activeTab === "Certificate" && renderCourseCards(CertificateData)}
        {activeTab === "Diploma" && renderCourseCards(DiplomaData)}
        {activeTab === "ShortTerm" && renderCourseCards(ShortTermData)}
      </div>
    </div>
  );
}

export default CourseTab;
