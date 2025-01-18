/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import icon1 from "../../assets/Img/icon1.svg";

function HomeSeven() {
  return (
    <div className="w-full h-auto  px-3 md:px-10 lg:px-10 xl:px-36 py-10 md:py-16 lg:py-20 xl:py-28 bg-white">
      <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-5 lg:space-y-7 xl:space-y-9 w-full h-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Faculties{" "}
        </h2>
        <p className="font-sans text-base md:text-lg lg:text-xl ">
          Hifzul Qur-an College facilitates the students to learn by heart the
          Holy Quran with Thajveed. By five years, from fifth standard to ten,
          students are provided high school education too. Completing the
          course, the students shall be capable of performing Qira'ath with good
          rhyme and rhythm and having high school level education.
        </p>
        <div className="justify-center  cursor-pointer mt-3 w-auto px-4 lg:px-6 space-x-1.5 flex items-center  py-1 lg:py-1.5 bg-[#ffb134] rounded-lg lg:rounded-xl">
          <img src={icon1} alt="" className="w-5 lg:w-6" />
          <p className="text-white text-base lg:text-lg font-normal font-sans tracking-wide">
            Take a Tour
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSeven;
