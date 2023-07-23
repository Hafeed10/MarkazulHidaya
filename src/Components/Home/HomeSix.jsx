import React from 'react'
import bgAcademic from '../../assets/Img/bgPattern.jpg';
import DirectorImg from '../../assets/Img/Director.png';

function HomeSix() {
  return (
    <div style={{ backgroundImage: `url(${bgAcademic})` }} className='relative flex flex-col items-center w-full h-auto px-3 pt-10 space-y-12 bg-no-repeat md:space-y-16 lg:space-y-20 md:px-10 lg:px-10 xl:px-36 md:pt-16 '>
        <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
        <h2 className='z-10 text-3xl md:text-4xl lg:text-5xl'>Meassage from the Director</h2>
        <div className='z-10 flex flex-col-reverse items-center justify-center w-full h-full md:flex-row md:justify-end'>
            <img src={DirectorImg} className='w-full h-full  md:w-1/2' alt="" />
            <div className='flex h-full md:py-5 w-full  md:w-1/2 flex-col text-[#555555] items-center text-center md:text-start md:items-start font-sans space-y-6 '>
                <p className='w-full text-base lg:text-xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.</p>
                <div>
                    <h2 className='text-base sm:text-lg text-[#555555] lg:text-xl font-medium xl:text-2xl'>Dr Abduslam Ahmed</h2>
                    <h1 className='text-sm font-normal md:text-base lg:text-lg'>Rector, Al Jamia Al Islamiya</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSix