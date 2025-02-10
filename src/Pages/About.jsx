// eslint-disable-next-line no-unused-vars
import React from "react";
import MissionImg from "../assets/Img/Faculties/images.jpeg";
import PatternBg from "../assets/Img/bgPattern.jpg";
import Life1 from "../assets/Img/Faculties/images.jpeg";
import Life2 from "../assets/Img/palikku.jpg";
import Life3 from "../assets/images.jpeg";
import Life4 from "../assets/images (1).jpeg";
import { About_dat, Our_Vision, Our_Mission } from '../Data/AboutData';
import { motion } from "framer-motion";


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};


function About() {
  return (
    <div className="w-full h-full py-32">
      <div className="flex flex-col items-center justify-center h-full space-y-7 lg:space-y-12 bg-white py-12 md:py-16 lg:py-22 w-full">
        <h2 className="text-[#133755] text-4xl md:text-5xl lg:text-[3.5rem]">About Us</h2>
      </div>
      <div
        style={{ backgroundImage: `url(${PatternBg})` }}
        className="relative flex flex-col items-center justify-center w-full h-full px-3 py-16 md:py-20 lg:py-24 bg-no-repeat gap-y-10 md:gap-y-12 xl:gap-y-20 md:px-10 lg:px-10 xl:px-36"
      >
        <div className="w-full h-full opacity-5 absolute top-0 left-0"></div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 grid-rows-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            className="object-cover w-full h-60 md:h-96 rounded"
            src={MissionImg}
            alt="Mission"
            variants={slideLeft}
          />
          <motion.div className="space-y-3 md:space-y-4 lg:space-y-3" variants={slideRight}>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-[#133755]">About Us</h2>
            <motion.p className="font-sans text-sm md:text-base lg:text-xl" variants={fadeIn}>
              {About_dat.map((iteme) => (
                <p key={iteme.id}>{iteme.content}</p>
              ))}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <section
        style={{ backgroundImage: `url(${PatternBg})` }}
        className="relative flex flex-col md:flex-row items-center  justify-center w-full h-full px-3 py-16 md:py-20 lg:py-24 bg-no-repeat gap-y-10 md:gap-x-12 xl:gap-x-20 md:px-10 lg:px-10 xl:px-36"
      >
        <div className="w-full h-full opacity-5 absolute top-0 left-0 bg-[#134456]"></div>
        <motion.div
          className="flex flex-col md:flex-row items-center bg-[#1f6781d8] p-6 rounded-md justify-center w-full md:w-1/2 space-y-6 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-3 md:space-y-4 lg:space-y-8"
            variants={slideLeft}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-[#0f1b2cbd] text-center">Our Vision</h2>
            <motion.p className="font-sans  w-full text-sm md:text-base lg:text-xl" variants={fadeIn}>
              {Our_Vision.map((item) => (
                <p className="text-white" key={item.id}>{item.content}</p>
              ))}
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-center bg-[#1f6781d8] p-6 rounded-md justify-center w-full md:w-1/2 space-y-6 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-3 md:space-y-4 lg:space-y-8"
            variants={slideRight}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-[#0f1b2cbd] text-center">Our Mission</h2>
            <motion.p className="font-sans text-sm md:text-base lg:text-xl" variants={fadeIn}>
              {Our_Mission.map((iteme) => (
                <p className="text-white" key={iteme.id}>{iteme.content}</p>
              ))}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>


      {/* ======================================================================================================================================= */}
      <div className="flex flex-col items-start justify-center w-full h-auto px-3 py-16 md:py-20 lg:py-24 space-y-12 md:px-10 lg:px-10 xl:px-36">
        <h2 className="text-4xl md:text-5xl lg:text-[3rem] text-[#133755]">Campus Life</h2>
        <div className="grid w-full h-full grid-cols-1 grid-rows-auto md:grid-cols-2 gap-3 md:gap-5">
          <img className="w-full object-cover h-72 md:h-full lg:h-[80vh] opacity-60 bg-[#22a2d1e4]" src={Life1} alt="Campus Life 1" />
          <div className="grid grid-cols-2 h-[80vh] w-full gap-3 md:gap-5 grid-rows-2">
            <img className="object-cover w-full h-full col-span-2" src={Life2} alt="Campus Life 2" />
            <img className="object-cover w-full h-full" src={Life4} alt="Campus Life 3" />
            <div className="relative flex items-center justify-center w-full h-full">
              <img className="object-cover w-full h-full" src={Life3} alt="Campus Life Highlight" />
              <h2 className="absolute text-6xl font-extrabold tracking-wider text-white">22+</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
