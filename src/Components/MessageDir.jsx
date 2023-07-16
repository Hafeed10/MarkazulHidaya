import React from 'react'
import bgAcademic from '../assets/Img/bgPattern.jpg';
import DirectorImg from '../assets/Img/Director.png';

function MessageDir() {
  return (
    <div style={{ backgroundImage: `url(${bgAcademic})` }} className='relative w-full h-auto bg-no-repeat px-3 flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-20 md:px-10 lg:px-10 xl:px-36 pt-10 md:pt-16 '>
        <div className='w-full h-full bg-[#619A46]  opacity-10 absolute top-0 left-0 '></div>
        <h2 className='z-10 text-3xl md:text-4xl lg:text-5xl'>Meassage from the Director</h2>
        <div className='flex z-10 flex-col-reverse md:flex-row items-center justify-center md:justify-end w-full h-full'>
            <img src={DirectorImg} className=' h-full w-full md:w-1/2 ' alt="" />
            <div className='flex h-full w-full  md:w-1/2 flex-col text-[#555555] items-center text-center md:text-start md:items-start font-sans space-y-6 '>
                <p className='text-base lg:text-xl w-full '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.</p>
                <div>
                    <h2 className='text-base sm:text-lg text-[#555555] lg:text-xl font-medium xl:text-2xl'>Dr Abduslam Ahmed</h2>
                    <h1 className='text-sm md:text-base lg:text-lg font-normal'>Rector, Al Jamia Al Islamiya</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageDir