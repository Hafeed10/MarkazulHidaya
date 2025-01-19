// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import bgAcademic from "../../assets/Img/bgPattern.jpg";
import DirectorImg from "../../assets/Img/img.jpg";
import { Home_six } from '../../Data/HomeSixone';

function HomeSix() {
  useEffect(() => {
    async function fetchDescription() {
      try { /* empty */ } catch (error) {
        console.error("Error fetching the data:", error);
      }
    }
    fetchDescription();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgAcademic})` }}
      className="relative flex flex-col items-center w-full h-auto px-3 pt-10 space-y-12 bg-no-repeat md:space-y-16 lg:space-y-20 md:px-10 lg:px-10 xl:px-36 md:pt-16"
    >
      <div className="w-full h-full bg-[#619A46] opacity-5 absolute top-0 left-0"></div>
      <h2 className="z-10 text-3xl md:text-4xl lg:text-5xl">
        Message from the Director
      </h2>
      <div className="z-10 flex flex-col-reverse items-center justify-center w-full h-full md:flex-row md:justify-end">
        <img
          src={DirectorImg}
          className="w-full md:w-auto object-cover h-fit md:h-80 rounded-xl lg:rounded-xl"
          alt="Director"
        />
        <div className="flex flex-col items-start w-full h-full gap-4 md:gap-7 text-start pl-10">
          <p className="w-full text-base font-sans lg:text-xl  ">
            {Home_six.map((item) => (
              <p key={item.id}>{item.content}</p>
            ))}
          </p>
          <div>
            <h2 className="text-base sm:text-lg text-[#555555] lg:text-xl font-medium xl:text-2xl">
              KP. Muhammed Muslyar
            </h2>
            <h1 className="text-sm font-normal md:text-base lg:text-lg">
              General Secretary  Markazul Hidaya
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSix;

