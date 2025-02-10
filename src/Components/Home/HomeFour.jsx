// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import book from "../../assets/book.jpg";
import code from "../../assets/code.jpeg";
import qurhan from "../../assets/qur.jpg";

const programs = [
  {
    title: "Central Library",
    description:
      "Exhibiting as unrivalled knowledge centre Baitul Hikma Library is the main attraction of Ahlussufa Dars. Contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities.",
    image: book,
    link: "#",
  },
  {
    title: "Hidaya Hifiz",
    description:
      "Hidaya Hifiz is an academy established for Quranic studies and staying in the hearts of more than 30 mutha'allim huffaz of Ahlussufa. The aim is to inculcate ahlul of the noble Quran and demanded by the society by providing opportunities for hifz daura and special qirath training classes.",
    image: qurhan,
    link: "#",
  },
  {
    title: "Hidaya Digi Kiosk",
    description:
      "Hidaya Digi Kiosk is a project initiated with the aim of molding the learned community to understand and address the possibilities of deeni da’wath in this fast-moving modern age. Apart from that, Digi world is molding students who excel in different fields like web designing, graphic designing, etc.",
    image: code,
    link: "#",
  },
];

const HomeFour = () => {
  return (
    <div className="bg-[#f0f7f1] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#133755] mb-10">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all duration-500 transform hover:scale-150"
            >
              <img
                src={program.image}
                alt={program.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="text-lg font-bold mt-4 text-[#133755] font-sans">
                {program.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2 font-sans">
                {program.description}
              </p>
              <a
                href={program.link}
                className="items-center text-white bg-[#1e7594] hover:bg-[#1e7494df] p-2 px-4 rounded-lg font-semibold mt-3 inline-block transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Learn more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFour;
