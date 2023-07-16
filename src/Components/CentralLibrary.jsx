import React from 'react'
import groundtwo from '../assets/Img/groundtwo.jpg'

function CentralLibrary() {
  return (
    <div className='w-full h-auto'>
        <img src={groundtwo} className='w-full h-52 object-cover md:h-auto' alt="" />
        <div className='w-full h-auto  px-3 md:px-10 lg:px-10 xl:px-36 py-10 md:py-16 lg:py-20 xl:py-28 bg-white'>
            <div className='flex flex-col items-center md:items-start text-center md:text-start space-y-4 lg:space-y-6 xl:space-y-8 w-full h-full'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Central Library </h2>
                <p className='font-sans text-base md:text-lg lg:text-xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.</p>
                <a href='#'  className='rounded-lg cursor-pointer w-36 md:w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 px-6 pb-1 text-base xl:text-lg font-sans'>
                    Learn More
                </a>
            </div>
        </div>
    </div>
  )
}

export default CentralLibrary