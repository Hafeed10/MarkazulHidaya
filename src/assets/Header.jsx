// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import logo1 from "../assets/WhatsApp_Image_2025-02-08_at_14.13.37_5a852b1d-removebg-preview.png";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const location = useLocation();

  const navigations = [
    { option: "Home", path: "/" },
    { option: "About Us", path: "/AboutUs" },
    { option: "Our Courses", path: "/OurCourses" },
    { option: "Faculties", path: "/Faculties" },
    { option: "Event", path: "/Events" },
    { option: "Gallery", path: "/Gallery", dropdown: true },
    { option: "Contact", path: "/Contacts" },
    { option: "Donation", path: "/Donation" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navOpen]);

  return (
    <div
      className={`w-full h-auto fixed left-0 top-0 px-3 md:px-10 lg:px-10 xl:px-36 py-2 z-50 
      ${
        location.pathname === "/"
          ? fix
            ? "bg-white shadow-lg drop-shadow-md shadow-[#cca55d34] py-4"
            : "md:py-8 lg:py-10"
          : "bg-white shadow-lg drop-shadow-md py-4"
      }`}
    >
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/" className="flex items-center">
          <img
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            className="w-[110px] h-auto object-contain"
            src={logo1}
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="xl:flex hidden space-x-7">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className={`font-medium text-sm xl:text-base ${
                location.pathname === "/"
                  ? fix
                    ? "text-[#555555]"
                    : "text-[#fff]"
                  : "text-[#000000]"
              } hover:text-[#5d89cc] font-medium tracking-wider uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              <Link
                to={navigation.path}
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
              >
                {navigation.option}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="w-fit xl:hidden">
          <CgMenuRightAlt
            className={`text-[30px] lg:text-[40px] ${
              fix
                ? "text-[#0d1d39]"
                : location.pathname === "/"
                ? "text-[#fff]"
                : "text-[#555555]"
            } font-bold cursor-pointer`}
            onClick={() => setNavOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`xl:hidden fixed top-0 right-0 w-full md:w-1/2 lg:w-1/2 h-screen bg-white px-3 py-2 md:px-10 lg:px-20 transition-transform ${
          navOpen ? "right-0" : "right-[-100%]"
        } shadow-3xl z-50 duration-300`}
      >
        <div className="flex items-center justify-between w-full h-auto">
          <Link to="/">
            <img
              onClick={() => {
                setNavOpen(false);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer w-52 md:w-60 xl:w-80 md:hidden"
              src={logo1}
              alt="Logo"
            />
          </Link>
          <CgClose
            className="text-[30px] lg:text-[35px] text-[#555555] hover:text-[#605e5e79] font-bold cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-start space-y-4 py-8 w-full">
          {navigations.map((navigation, index) => (
            <li key={index} className="w-full">
              {navigation.dropdown ? (
                <div className="flex items-center cursor-pointer font-semibold uppercase transition-all duration-200 ease-in">
                  <FaArrowRightLong className="mr-2 text-[#4577cedf]" />
                  {navigation.option}
                </div>
              ) : (
                <Link
                  to={navigation.path}
                  onClick={() => {
                    setNavOpen(false);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="flex items-center font-semibold uppercase transition-all duration-200 ease-in hover:text-[#0d1d39]"
                >
                  <FaArrowRightLong className="mr-2 text-[#4577cedf]" />
                  {navigation.option}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
