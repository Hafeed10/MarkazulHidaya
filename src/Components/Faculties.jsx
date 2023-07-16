import React from 'react'
import icon1 from '../assets/Img/icon1.svg'


function Faculties() {
  return (
    <div className='w-full h-auto  px-3 md:px-10 lg:px-10 xl:px-36 py-10 md:py-16 lg:py-20 xl:py-28 bg-white'> 
    <div className='flex flex-col items-center md:items-start text-center md:text-start space-y-5 lg:space-y-7 xl:space-y-9 w-full h-full'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Faculties </h2>
        <p className='font-sans text-base md:text-lg lg:text-xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.</p>
        <div className='justify-center  cursor-pointer mt-3 w-auto px-4 lg:px-6 space-x-1.5 flex items-center  py-1 lg:py-1.5 bg-[#CCA65D] rounded-lg lg:rounded-xl'>
            <img src={icon1} alt="" className='w-5 lg:w-6'/>
           <p class="text-white text-base lg:text-lg font-normal font-sans tracking-wide">Take a Tour</p>
        </div>
    </div>
    </div>
  )
}

export default Faculties