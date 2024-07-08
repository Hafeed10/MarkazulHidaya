import React from "react";
import AboutImg from "../assets/Img/Faculties/images (1).jpeg"; // Update the path to your image file

function OldGallery() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-full space-y-7 lg:space-y-12 bg-white py-12 md:py-16 lg:py-22 w-full">
        <h2 className="text-[#619A46] text-4xl md:text-5xl lg:text-[3.5rem]">
          GALLERY
        </h2>
        <img
          src={AboutImg}
          className="object-cover w-full h-72 "
          alt="About us"
        />
        <p className="px-3 md:px-10 lg:px-10 xl:px-36 mt-4 font-sans text-start text-[#555555] text-base md:text-xl lg:text-2xl font-normal leading-snug tracking-wide">
          Markazul Hidayathil Islamiyya, established in the year 1996, is a
          unique centre of education comprising of more than 12 institutions
          with nearly thousand students on the rolls. It is a pioneer
          institution rendering socio-cultural and educational service to the
          Kerala Society. It stands as a praiseworthy establishment to mould a
          new generation having high academic values, IT tricks, soft skills,
          and deep knowledge in theology and Islamic studies. The major
          institutions are Hifzul Quran College, College of Arts and Islamic
          Studies, Moulana English Medium School, Institute of Tailoring and
          Embroidery, Computer Centre, Boarding Madarasa for boys, care for
          orphans and destitute, Science Lab, Masjid, Library and Reading Room,
          and Charitable Activities.
        </p>
      </div>
    </div>
  );
}

export default OldGallery;
