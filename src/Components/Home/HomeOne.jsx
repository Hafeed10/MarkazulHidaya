// eslint-disable-next-line no-unused-vars
import React from "react";
import icon1 from "../../assets/Img/icon1.svg";
import afa from "../../assets/Img/afa.png";

function HomeOne() {
  return (
    <div className="relative w-full h-auto flex flex-col -z-50 py-12 md:p-16 lg:py-20 xl:py-32 pb-20 md:pb-40 lg:pb-64 xl:pb-80  px-3 md:px-10 lg:px-10 xl:px-36 space-y-7 lg:space-y-10 xl:space-y-12 items-center justify-center text-center">
      <h1 className="text-[#133755] text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem]">
        Welcome to Mrkazul Hidaya{" "}
      </h1>
      <p className="md:px-8 font-sans lg:px-16 xl:px-24 text-center text-[#555555] text-lg md:text-xl  lg:text-2xl font-normal leading-snug tracking-wide">
        Markazul Hidaya started a new programme to secure the life of those who
        lost either fathers or wealth.Hundreds of orphans and destitute have
        been taken care of in the Markazul Hidayawithout making them feel the
        absence of it. Some of them are permitted to live with their family.On
        the same time, Markazul Hidaya gives complete assistances to accomplish
        their educational and infrastructural needs and desires, facilitating
        them to study under the institution various ways of studies.
      </p>
      <div className="justify-center  cursor-pointer mt-3 w-auto px-4 lg:px-6 space-x-1.5 flex items-center  py-1 lg:py-2 bg-[#1e7594] rounded-lg lg:rounded-xl">
        <img src={icon1} alt="" className="w-5 lg:w-6" />
        <p className="text-white text-base lg:text-lg font-normal font-sans tracking-wide">
          Take a Tour
        </p>
      </div>
      <img src={afa} className="-z-10 bottom-0 h-50 w-full absolute" alt="" />
    </div>
  );
}

export default HomeOne;
