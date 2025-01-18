// eslint-disable-next-line no-unused-vars
import React from "react";
import groundtwo from "../../assets/Img/150.jpg";

function HomeFive() {
  return (
    <div className="w-full h-50">
      <img
        src={groundtwo}
        className="w-full h-fit object-cover md:h-auto"
        alt=""
      />
      <div className="w-full h-auto  px-3 md:px-10 lg:px-10 xl:px-36 py-10 md:py-16 lg:py-20 xl:py-28 bg-white">
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-4 lg:space-y-6 xl:space-y-8 w-full h-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Central Library
          </h2>
          <p className="font-sans text-base md:text-lg lg:text-xl ">
            The Central Library is a key resource for students and researchers,
            offering an extensive collection of books, journals, and digital
            resources. It provides a quiet and conducive environment for study
            and research, along with access to knowledgeable staff for
            assistance. The library is committed to supporting academic success
            and lifelong learnin
          </p>
          <a
            href="#"
            className="rounded-lg cursor-pointer w-36 md:w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 px-6 pb-1 text-base xl:text-lg font-sans"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeFive;
