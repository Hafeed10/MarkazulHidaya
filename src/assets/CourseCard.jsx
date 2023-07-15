import React from 'react'

function CourseCard({ img, title, description, buttonTo }) {
  return (
    <div className='w-full bg-white h-auto shadow-md hover:shadow-xl text-center lg:text-start transition-all duration-500 cursor-grabbing rounded-md lg:rounded-3xl'>
        <img src={img} className='w-full h-auto object-cover' alt="" />
        <div className='p-3 md:p-4 xl:p-8 space-y-1.5 lg:space-y-3'>
            <h2 className='text-[#CCA65D] text-xl md:text-[1.35rem] lg:text-3xl'>{title}</h2>
            <p className='font-sans text-sm lg:text-lg'>{description}</p>
            <div className='w-full py-1.5 lg:py-4 cursor-pointer text-center'>
                <a herf={buttonTo} className='rounded-lg w-auto bg-[#555555] text-[#555555] bg-opacity-10 p-0.5 lg:p-1 px-5 pb-1.5 text-sm lg:text-lg font-sans  '>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default CourseCard