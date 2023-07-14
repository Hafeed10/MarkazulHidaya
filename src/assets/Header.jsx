import React, { useState } from 'react'
import logo from './Img/logo.png'
import { Link } from 'react-scroll';
import {CgClose, CgMenuRightAlt} from 'react-icons/cg'

function Header() {

    const [navOpen, setNavOpen] = useState(false);

    const navigations = [
      { option: 'Home', path: 'Home' },
      { option: 'Academics', path: 'Academics' },
      { option: 'Admission', path: 'Admission' },
      { option: 'Examination', path: 'Examination' },
      { option: 'Event', path: 'Event' },
      { option: 'Contact', path: 'Contact' }
    ];
  
    
    const [fix, setfix] = useState(false);
     const Navfix = () =>{
        if (window.scrollY >= 100) {
          setfix(true)
        }else (
          setfix(false)
        ) 
     }
     window.addEventListener('scroll' , Navfix)
  return (
    <div className='w-full h-auto fixed top-0 px-3 py-5 md:px-10 md:py-8 lg:px-20 lg:py-10 '>
      <div className='flex items-center justify-between w-full h-full'>
        <img className='w-52 md:w-72 lg:w-80' src={logo} alt="" />
        <ul className="md:flex hidden space-x-7 ">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className="font-semibold text-sm md:text-base hover:text-[#909090a9] text-[#ffffffd4] tracking-wider uppercase transition-all duration-200 ease-in cursor-pointer"
            >
              {navigation.option === 'About' ? (
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={800}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Academics' ? (
                <Link
                  activeClass="active"
                  to="Academics"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Admission' ? (
                <Link
                  activeClass="active"
                  to="Admission"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Examination' ? (
                <Link
                  activeClass="active"
                  to="Examination"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Event' ? (
                <Link
                  activeClass="active"
                  to="Event"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Conatct' ? (
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : (
                <Link to={navigation.path}>{navigation.option}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className="w-fit md:hidden ">
          {navOpen ? (
            <CgClose
              className={`text-[30px] ${fix ? 'text-[#0d1d39]' : "text-[#fff]"} font-bold text-[#fff] cursor-pointer`}
              onClick={() => setNavOpen(false)}
            />
          ) : (
            <CgMenuRightAlt
              className={`text-[30px] ${fix ? 'text-[#0d1d39]' : "text-[#fff]"} font-bold text-[#fff] cursor-pointer`}
              onClick={() => setNavOpen(true)}
            />
          )}
        </div>
     </div>
     <div className={`md:hidden w-full h-screen ${ navOpen ? 'flex' : 'hidden -z-50'} bg-white px-3 flex-col border-b border-[#0d1d39] justify-start items-start z-50 left-0 top-0 absolute`}>

            <div className='flex items-center justify-between w-full h-auto py-5'>
                <img className='w-52 md:w-72 lg:w-80' src={logo} alt="" />
                <CgClose className={`text-[30px] ${fix ? 'text-[#0d1d39]' : "text-[#000]"} font-bold  cursor-pointer`} onClick={() => setNavOpen(false)} />
            </div>

          <ul
            className={`flex flex-col items-start justify-start space-y-4 py-8 w-full h-full transition-all text-start duration-1000 `}
          >
            {navigations.map((navigation, index) => (
            <li
              key={index}
              className="font-semibold text-sm md:text-base hover:text-[#605e5e79] text-[#000000bb] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer"
            > 
              {navigation.option === 'About' ? (
                    <Link
                      activeClass="active"
                      to="About"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={800}
                    >
                      {navigation.option}
                    </Link>
                  ) : navigation.option === 'Academics' ? (
                    <Link
                      activeClass="active"
                      to="Academics"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                    >
                      {navigation.option}
                    </Link>
                  ) : navigation.option === 'Admission' ? (
                    <Link
                      activeClass="active"
                      to="Admission"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                    >
                      {navigation.option}
                    </Link>
                  ) : navigation.option === 'Examination' ? (
                    <Link
                      activeClass="active"
                      to="Examination"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                    >
                      {navigation.option}
                    </Link>
                  ) : navigation.option === 'Event' ? (
                    <Link
                      activeClass="active"
                      to="Event"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                    >
                      {navigation.option}
                    </Link>
                  ) : navigation.option === 'Conatct' ? (
                    <Link
                      activeClass="active"
                      to="Contact"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                    >
                      {navigation.option}
                    </Link>
                  ) : (
                    <Link to={navigation.path}>{navigation.option}</Link>
                  )}
                </li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default Header