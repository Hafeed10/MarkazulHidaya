// eslint-disable-next-line no-unused-vars
import React from "react";
import AboutImg from "../assets/Img/Faculties/images (1).jpeg"; // Update the path to your image file

function OldGallery() {
  return (
    <div className="w-full h-full  py-32">
      <div className="flex flex-col items-center justify-center h-full space-y-7 lg:space-y-12 bg-white py-12 md:py-16 lg:py-22 w-full">
        <h2 className="text-[#133755] text-4xl md:text-5xl lg:text-[3.5rem]">
          GALLERY
        </h2>
        <img
          src={AboutImg}
          className="object-cover w-full h-72 "
          alt="About us"
        />
        <p className="px-3 md:px-10 lg:px-10 xl:px-36 mt-4 font-sans text-start text-[#555555] text-base md:text-xl lg:text-2xl font-normal leading-snug tracking-wide">
          COMING SOON . . . .
        </p>
      </div>
    </div>
  );
}

export default OldGallery;
