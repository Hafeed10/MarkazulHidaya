import React, {  useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';
import logo from './Img/logo.png';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [fix, setFix] = useState(false);

  const location = useLocation(); 

  const navigations = [
    { option: 'Home', path: '/' },
    { option: 'About Us', path: '/AboutUs' },
    { option: 'Admission', path: '/Admission' },
    { option: 'Examination', path: '/Examination' },
    { option: 'Event', path: '/Event' },
    { option: 'Contact', path: '/Contact' },
  ];

  const Navfix = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', Navfix);


  return (
    <div className={`w-full h-auto ${ location.pathname === '/' ? 'fixed left-0 top-0' : ''}  px-3 md:px-10 lg:px-10 xl:px-36 py-2 z-50 ${fix ? 'bg-[#ffffff] shadow-lg drop-shadow-md shadow-[#cca55d34] py-4' : 'md:py-8  lg:py-10'}`}>
      <div className="flex items-center justify-between   w-full h-full">
        <img className={` ${fix ? 'w-44 md:w-52 xl:w-72' : 'w-52 md:w-72 xl:w-80 '} `} src={logo} alt="" />
        <ul className="xl:flex hidden space-x-7">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className={`font-medium text-sm xl:text-base  ${ location.pathname === '/' ? 'text-[#fff]' : 'text-[#555555]'}  hover:text-[#CCA65D] font-sans tracking-wider uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              <Link
                to={navigation.path}
                className={`cursor-pointer ${fix && 'text-[#555555]'}`}
              >
                {navigation.option}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-fit xl:hidden">
          <CgMenuRightAlt
            className={`text-[30px] lg:text-[40px] ${fix ? 'text-[#0d1d39]' : 'text-[#fff]'} font-bold cursor-pointer`}
            onClick={() => setNavOpen(true)}
          />
        </div>
      </div>
      <div className={`xl:hidden w-full md:w-1/2 lg:w-1/2 md:shadow-lg h-screen ${navOpen ? 'flex opacity-100' : 'hidden opacity-0 -z-50  '} bg-white px-3 py-2 md:px-10  lg:px-20 xl:px-36 md:py-8  lg:py-10 flex-col border-b border-[#0d1d39] justify-start items-start z-50 right-0 top-0 md:right-0 absolute`}>
        <div className="flex items-center justify-between md:justify-end w-full h-auto">
          <img className="w-52 md:w-60 xl:w-80 md:hidden" src={logo} alt="" />
          <CgClose
            className={`text-[30px] lg:text-[35px] ${fix ? 'text-[#0d1d39]' : 'text-[#000000bb]'} hover:text-[#605e5e79] font-bold  cursor-pointer`}
            onClick={() => setNavOpen(false)}
          />
        </div>
        <ul className={`flex flex-col items-start justify-start space-y-4 py-8 w-full h-full transition-all text-start duration-1000`}>
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className={`font-semibold text-sm md:text-base hover:text-[#605e5e79] text-[#000000bb] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              <Link
                to={navigation.path}
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
