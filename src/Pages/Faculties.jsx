import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatternBg from "../assets/Img/bgPattern.jpg";
import { Leadershipdata, ShariaFacultiesdata } from "../Data/FacultiesData";
import FacultiCard from "../Components/Faculties/FacultiCard";
import Facultimodal from "../Components/Faculties/Facultimodal";
import { Facult } from '../Data/Facultie'

function Faculties() {
  const [showModalId, setShowModalId] = useState(null);
  const navigate = useNavigate();
  
  function showEventModal(itemId, itemName) {
    navigate(`/Faculties/${itemName}`);
    if (!showModalId) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
    }
    setShowModalId(itemId);
  }

  function closeModal() {
    document
      .getElementsByTagName("html")[0]
      .classList.remove("overflow-y-hidden");
    setShowModalId(null);
  }

  return (
    <div className="w-full h-full  py-32">
      <div className="flex flex-col items-center justify-center w-full h-full  space-y-7 lg:space-y-12 bg-white py-7 md:py-16 lg:py-22">
        <h2 className="text-[#133755]  text-4xl md:text-5xl lg:text-[3.5rem]">
          Faculties
        </h2>
        <p className="px-3 font-sans md:px-10 lg:px-10 xl:px-36 mt-4 text-center text-[#555555] text-base md:text-xl lg:text-2xl font-normal leading-snug tracking-wide">
          {Facult.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${PatternBg})` }}
        className="relative flex flex-col items-center justify-center w-full h-full px-3 py-16 md:py-20 lg:py-24 bg-no-repeat gap-10 lG:gap-16  xl:gap-20 md:px-10 lg:px-10 xl:px-36"
      >
        <div className="w-full h-full  opacity-5 absolute top-0 left-0"></div>
        <h1 className="text-[#133755] text-3xl md:text-4xl lg:text-5xl">
          Our Leadership
        </h1>
        <div className="z-10 grid w-full h-full grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 grid-rows-auto">
          {Leadershipdata.map((item) => (
            <div
              className="w-full h-full"
              key={item.id}
              onClick={() => showEventModal(item.id, item.name)}
            >
              <FacultiCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full flex flex-col px-3 gap-10 lg:gap-20 text-center md:px-10 lg:px-10 xl:px-36 py-16 md:py-20 lg:py-24">
        <h1 className="text-[#133755] text-3xl md:text-4xl lg:text-5xl">
          Hidaya Faculties
        </h1>
        <div className="grid w-full h-full md:grid-cols-3 gap-5 lg:gap-10  grid-rows-auto">
          {ShariaFacultiesdata.map((item) => (
            <FacultiCard key={item.id} item={item}/>
          ))}
        </div>
      </div>
      {Leadershipdata.map((item) => (
        <React.Fragment key={item.id}>
          {showModalId === item.id && (
            <Facultimodal
              onClose={closeModal}
              onRequest={() => showEventModal(item.id)}
              closePath="/Faculties"
              item={item} // Pass the selected item to the modal
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Faculties;
