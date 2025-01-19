// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import logo from "../assets/Img/Life/hidaya1.png";
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navigations = [
    { option: "Home", path: "/" },
    { option: "About Us", path: "/AboutUs" },
    { option: "Admission", path: "/Admission" },
    { option: "Faculties", path: "/Faculties" },
    { option: "Event", path: "/Events" },
    { option: "Gallery", path: "/Gallery" },
    { option: "Contact", path: "/Contacts" },
    { option: "Donation", path: "/Donation" },
  ];

  const Navfix = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", Navfix);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full h-auto ${location.pathname === "/" ? "fixed left-0 top-0" : ""
        } px-3 md:px-10 lg:px-10 xl:px-36 py-2 z-50 ${fix && location.pathname === "/"
          ? "bg-[#ffffff] shadow-lg drop-shadow-md shadow-[#cca55d34] py-4"
          : "md:py-8  lg:py-10"
        }`}
    >
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/">
          <img
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className={`${fix && location.pathname === "/"
                ? "w-44 md:w-52 xl:w-72"
                : "w-44 md:w-52 xl:w-72"
              }`}
            src={logo}
            alt=""
          />
        </Link>
        <ul className="xl:flex hidden space-x-7">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className={`font-medium text-sm xl:text-base ${location.pathname === "/" ? "text-[#fff]" : "text-[#555555]"
                } hover:text-[#CCA65D] font-sans tracking-wider uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              {navigation.option === "Gallery" ? (
               <div className="relative" ref={dropdownRef}>
               <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
                 Gallery
                 <RiArrowDropDownLine size={30} />
               </div>
               {isDropdownOpen && (
                 <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40 z-10">
                   <li className="px-4 py-2 hover:bg-gray-200">
                     <Link to="/gallery/photos" onClick={() => setIsDropdownOpen(false)}>New Photos</Link>
                   </li>
                   <li className="px-4 py-2 hover:bg-gray-200">
                     <Link to="/gallery/videos" onClick={() => setIsDropdownOpen(false)}>Old Photos</Link>
                   </li>
                 </ul>
               )}
             </div>
              ) : (
                <Link
                  to={navigation.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className={`cursor-pointer ${fix && "text-[#555555]"}`}
                >
                  {navigation.option}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="w-fit xl:hidden">
          <CgMenuRightAlt
            className={`text-[30px] lg:text-[40px] ${fix
                ? "text-[#0d1d39]"
                : location.pathname === "/"
                  ? "text-[#fff]"
                  : "text-[#555555]"
              } font-bold cursor-pointer`}
            onClick={() => setNavOpen(true)}
          />
        </div>
      </div>
      <div
        className={`xl:hidden w-full md:w-1/2 lg:w-1/2 md:shadow-lg h-screen ${navOpen ? "flex opacity-100" : "hidden opacity-0 -z-50"
          } bg-white px-3 py-2 md:px-10 lg:px-20 xl:px-36 md:py-8 lg:py-10 flex-col border-b border-[#0d1d39] justify-start items-start z-50 right-0 top-0 md:right-0 absolute`}
      >
        <div className="flex items-center justify-between md:justify-end w-full h-auto">
          <Link to="/">
            <img
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer w-52 md:w-60 xl:w-80 md:hidden"
              src={logo}
              alt=""
            />
          </Link>
          <CgClose
            className={`text-[30px] lg:text-[35px] ${location.pathname === "/" ? "text-[#0d1d39]" : "text-[#555555]"
              } hover:text-[#605e5e79] font-bold cursor-pointer`}
            onClick={() => setNavOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-start justify-start space-y-4 py-8 w-full h-full transition-all text-start duration-1000">
          {navigations.map((navigation, index) => (
            <li
              onClick={() => setNavOpen(false)}
              key={index}
              className="font-semibold font-sans text-sm md:text-base hover:text-[#605e5e79] text-[#000000bb] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer"
            >
              <Link
                to={navigation.path}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="cursor-pointer"
              >
                {navigation.option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;