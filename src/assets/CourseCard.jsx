/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function CourseCard({ img, title, description }) {
  const [showPopup, setShowPopup] = useState(false);

  // Close modal when Esc key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPopup]);

  return (
    <>
      {/* Course Card */}
      <div
        className="w-full h-auto text-center transition-all duration-500 bg-white border-2 border-[#1e7594] rounded-lg p-3 
        lg:text-start cursor-pointer hover:scale-105 shadow-md hover:shadow-lg"
      >
        {/* Clickable Image for Popup */}
        <img
          src={img}
          className="object-cover w-full h-auto cursor-pointer rounded-lg"
          alt={title}
          onClick={() => setShowPopup(true)}
        />
        <div className="p-3 md:p-3 xl:py-5 xl:px-8 space-y-1.5 lg:space-y-2.5">
          <h2 className="text-[#133755] text-xl md:text-[1.35rem] lg:text-2xl font-semibold">
            {title}
          </h2>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full transition-all duration-300 transform scale-100 animate-fade-in"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <h2 className="text-[#133755] text-2xl font-bold">{title}</h2>
            <img src={img} className="object-cover w-full h-auto mt-2 rounded-lg" alt={title} />
            <p className="text-sm lg:text-lg mt-2 font-sans">{description}</p>
            <button
              className="mt-4 px-4 py-2 bg-[#1e7594] text-white rounded-lg hover:bg-[#1c6b85] transition-all duration-200"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseCard;
