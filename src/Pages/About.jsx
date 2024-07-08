import React from "react";
import AboutImg from "../assets/Img/silver.jpg";
import VisionImg from "../assets/Img/Faculties/welcome.jpg";
import MissionImg from "../assets/Img/Faculties/images.jpeg";
import PatternBg from "../assets/Img/bgPattern.jpg";
import Life1 from "../assets/Img/hafe.jpg";
import Life2 from "../assets/Img/palikku.jpg";
import Life3 from "../assets/Img/500.jpg";
import Life4 from "../assets/Img/500.jpg";

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
          Markazul Hidayathil Islamiyya, established in the year 1996, is a
          unique centre of education comprising of more than 12 institutions
          with nearly thousand students on the rolls. It is pioneer institution
          rendering socio cultural and educational service to the Kerala
          Society. It stands as a praiseworthy establishment to mould a new
          generation having high academic values, IT Tricks, soft skills and
          deep knowledge in theology and Islamic studies. The Major Institutions
          are Hifzul Qur'an college, College of Arts And Islamic studies,
          Moulana English Medium School, Institute of Tailoring and Embroidery,
          Computer Centre, Boarding madarasa for boys, Care for orphans and
          destitute, Science Lab, Masjid, Library and Reading Room and
          Charitable Activities.
        </p>
      </div>

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
              Our vision at Markazul Hidaya is to be a beacon of knowledge and
              spiritual enlightenment, empowering individuals to lead purposeful
              lives guided by Islamic principles. We strive to foster a
              community that embraces diversity, promotes education, and serves
              humanity with compassion and integrity. Join us in our journey
              towards excellence in faith, education, and community service.
            </p>
          </div>
          <img
            className="md:order-2 object-cover w-full h-60 md:h-full rounded"
            src={VisionImg}
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 grid-rows-auto">
          <img
            className="object-cover w-full h-60 md:h-full rounded"
            src={MissionImg}
            alt=""
          />
          <div className="space-y-3 md:space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] ">
              Our Mission
            </h2>
            <p className="font-sans text-sm md:text-base lg:text-xl">
              At Markazul Hidaya, our mission is to provide comprehensive
              Islamic education and spiritual guidance rooted in authentic
              teachings. We aim to nurture individuals to become knowledgeable,
              ethical, and compassionate leaders who contribute positively to
              society. Through educational programs, community outreach, and
              fostering a culture of excellence, we aspire to uphold Islamic
              values and promote unity and understanding among all people. Join
              us in fulfilling our mission of building a harmonious and
              enlightened community.
            </p>
          </div>
        </div>
      </div>
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
