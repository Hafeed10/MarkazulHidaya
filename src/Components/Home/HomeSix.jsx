import React, { useEffect } from "react";
import bgAcademic from "../../assets/Img/bgPattern.jpg";
import DirectorImg from "../../assets/Img/Cours/images.jpeg";
import axios from "axios";

function HomeSix() {
  useEffect(() => {
    async function fetchDescription() {
      try {
        console.log("Fetching markaz...");
        const { data } = await axios.get("http://127.0.0.1:8000");
        console.log("Received api:", data);
        // const updatedData = data.map((product) => ({
        //   ...product,
        //   image: `http://127.0.0.1:8000${product.image}`,
        // }));
      } catch (error) {
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
          className="w-full h-fit p-4 md:w-1/2"
          alt="Director"
        />
        <div className="flex h-full md:py-5 w-full md:w-1/2 flex-col text-[#555555] items-center text-center md:text-start md:items-start font-sans space-y-6">
          <p className="w-full text-base lg:text-xl">
            Markazul Hidayathil Islamiyya, established in the year 1996, is a
            unique centre of education comprising of more than 12 institutions
            with nearly thousand students on the rolls. It is pioneer
            institution rendering socio cultural and educational service to the
            Kerala Society. It stands as a praiseworthy establishment to mould a
            new generation having high academic values, IT Tricks, soft skills
            and deep knowledge in theology and Islamic studies. The Major
            Institutions are Hifzul Qur'an college, College of Arts And Islamic
            studies, Moulana English Medium School, Institute of Tailoring and
            Embroidery, Computer Centre, Boarding madarasa for boys, Care for
            orphans and destitute, Science Lab, Masjid, Library and Reading Room
            and Charitable Activities,
          </p>
          <div>
            <h2 className="text-base sm:text-lg text-[#555555] lg:text-xl font-medium xl:text-2xl">
              KP Muhammed Muslyar
            </h2>
            <h1 className="text-sm font-normal md:text-base lg:text-lg">
              Rector, Markazul Hidaya
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSix;
