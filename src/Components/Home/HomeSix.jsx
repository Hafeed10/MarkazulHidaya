// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import bgAcademic from "../../assets/Img/bgPattern.jpg";
import DirectorImg from "../../assets/Img/img.jpg";
import { Home_six } from '../../Data/HomeSixone';

function HomeSix() {
  return (
    <div
      style={{ backgroundImage: `url(${bgAcademic})` }}
      className="relative flex flex-col items-center w-full h-auto px-3 pt-10 space-y-12 bg-no-repeat md:space-y-16 lg:space-y-20 md:px-10 lg:px-10 xl:px-36 md:pt-16"
    >
      <div className="w-full h-full bg-[#619A46] opacity-5 absolute top-0 left-0"></div>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures it runs once when in view
        className="text-center"
      >
        <h2 className="z-10 text-3xl text-[#133755] md:text-4xl lg:text-5xl">
          Message from the Founder
        </h2>
        <h2 className="text-base text-[#133755] mt-2">
          KP. Muhammed Muslyar :
          General Secretary Markazul Hidaya
        </h2>
      </motion.div>
      <div className="z-10 flex flex-col-reverse items-center justify-center w-full h-full md:flex-row md:justify-between gap-10">
        <motion.img
          src={DirectorImg}
          className="w-full md:w-auto object-cover h-fit md:h-80 rounded-xl lg:rounded-xl"
          alt="Director"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="flex flex-col items-start w-full h-full gap-4 md:gap-7 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Home_six.map((item) => (
            <p key={item.id} className="w-full md:w-5/6 text-base font-sans lg:text-xl">
              {item.content}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HomeSix;
