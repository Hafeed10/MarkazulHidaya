import React from 'react'
import AdmissionBg from '../assets/Img/Admission/AdmissionBg.png'
import bgAcademic from '../assets/Img/bgPattern.jpg';
import CourseTab from '../assets/CourseTab';
import CourseDetielsTab from '../assets/CourseDetielsTab';


function Admission() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full pt-20 space-y-12 text-center '>
        <div className='w-full h-full px-3 md:px-10 lg:px-10 xl:px-36'>
            <div className='relative flex items-start justify-center w-full h-auto text-start'>
                <img src={AdmissionBg} className='rounded-3xl w-full h-72 md:h-full' alt="" />
                <h2 className='absolute inset-0 h-full text-4xl lg:text-5xl xl:text-6xl text-white top-[30%] left-12 md:left-20'>Maqasid <br /> Al Sharia <br /> (Intermediate)</h2>
            </div>
            <div className=' pt-20 lg:pt-24'>
                <CourseDetielsTab/> 
            </div>
        </div>
        <div style={{ backgroundImage: `url(${bgAcademic})` }} className='relative w-full h-full px-3 md:px-10 lg:px-10 xl:px-36'>
             <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
            <CourseTab/>
        </div>
    </div>
  )
}

export default Admission