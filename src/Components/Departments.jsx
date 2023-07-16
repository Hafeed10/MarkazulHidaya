import React from 'react';
import bgAcademic from '../assets/Img/bgPattern.jpg';
import DepartImg from '../assets/Img/DepartImg.png';
import { DepartData } from '../Data/DepartData';


// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// import required modules
import { Pagination } from 'swiper/modules';

function Departments() {
  return (
    <div style={{ backgroundImage: `url(${bgAcademic})` }} className='w-full h-full text-center bg-no-repeat px-3 md:px-10 lg:px-10 xl:px-36 space-y-10 py-10 md:py-16 lg:py-20 xl:py-24'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Departments</h2>
        <p className='font-sans text-base md:text-lg lg:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.</p>
        <Swiper
           slidesPerView={1}
           spaceBetween={10}
           autoplay={{
             delay:200
           }}
           pagination={{
             clickable: true,
             dynamicBullets:true
           }}
           breakpoints={{
             '@0.00': {
               slidesPerView: 1,
               spaceBetween: 10,
             },
             '@0.75': {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             '@1.00': {
               slidesPerView: 3,
               spaceBetween: 40,
             },
             '@1.50': {
               slidesPerView: 4,
               spaceBetween: 50,
             },
           }}
           modules={[Pagination]}
             className="h-auto pt-5 pb-16 px-2 overflow-y-visible w-full"
           >
            {DepartData.map((dep)=>(
             <SwiperSlide className=" hover:shadow-xl transition-all  drop-shadow-lg bg-white rounded-3xl">
                <img src={dep.img} className='h-1/2 w-full object-cover' alt="" />
                <div className='w-full flex flex-col text-center space-y-4 items-center justify-center p-3 h-1/2'>
                  <h2 className='text-[#CEA553] text-2xl leading-7'>{dep.title}</h2>
                  <a href={dep.buttonTo}  className='rounded-md lg:rounded-lg cursor-pointer w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 px-4 xl:px-6 pb-1 text-xs xl:text-sm font-sans'>
                     Learn More
                   </a>
                </div>
             </SwiperSlide>
            ))}
           </Swiper>
    </div>
  )
}

export default Departments



