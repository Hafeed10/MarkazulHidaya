import React from 'react'
import AboutImg from '../assets/Img/groundtwo.jpg'
import VisionImg from '../assets/Img/groundtwo.jpg'
import MissionImg from '../assets/Img/groundtwo.jpg'
import PatternBg from '../assets/Img/bgPattern.jpg'
import Life1 from '../assets/Img/Life/Life1.png'
import Life2 from '../assets/Img/Life/Life2.png'
import Life3 from '../assets/Img/Life/Life3.png'
import Life4 from '../assets/Img/Life/Life4.png'

function About() {
  return (
    <div className='w-full h-full'>
      <div className='items-center flex flex-col space-y-12 py-7 md:py-16 lg:py-22 justify-center w-ful h-full bg-white'>
        <h2 className='text-[#619A46] text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem]'>About us</h2>
        <img src={AboutImg} className=' w-full h-auto object-cover'alt="" />
        <p className='md:px-8 mt-4 lg:px-16 xl:px-24 text-center text-[#555555] text-base md:text-xl  lg:text-2xl font-light leading-snug tracking-wide'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uns of Lorem Ipsum.Lorem Ipsum is simply dummy text of en the industry's standard dumm the 1500s, when an unknown printer took a galley of type and scrambled it to make a type splly unchanged. versions of Lorem Ipsum.</p>
      </div>
      <div  style={{backgroundImage: `url(${PatternBg})`}} className='flex flex-col items-center justify-center gap-y-20 px-3 md:px-10 lg:px-10 xl:px-36 w-full h-full bg-no-repeat py-24'>
        <div className='grid grid-cols-2 gap-12 grid-rows-auto'>
          <div className='space-y-8'>
            <h2 className='text-3xl md:text-4xl lg:text-[3rem] '>Our Vision</h2>
            <p className='text-xl font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of en the in.</p>
          </div>
          <img className='w-full rounded h-full object-cover' src={VisionImg} alt="" />
        </div>
        <div className='grid grid-cols-2 gap-12 grid-rows-auto'>
          <img className='w-full rounded h-full object-cover' src={MissionImg} alt="" />
          <div className='space-y-8'>
            <h2 className='text-3xl md:text-4xl lg:text-[3rem] '>Our Mission</h2>
            <p className='text-xl font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of en the in.</p>
          </div>
        </div>
      </div>
      <div className='px-3 md:px-10  lg:px-10 xl:px-36 space-y-12 flex flex-col items-start justify-center  py-24 w-full h-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-[3rem]'>Campus Life</h2>
        <div className='gap-5 grid grid-cols-2 w-full h-full'>
          <img className='w-full  object-cover h-[80vh]' src={Life1} alt="" />
          <div className='grid grid-cols-2 h-[80vh] w-full gap-5 grid-rows-2'>
             <img  className='w-full h-full object-cover col-span-2' src={Life2} alt="" />
             <img  className='w-full h-full object-cover' src={Life4} alt="" />
             <div className='relative w-full h-full flex items-center justify-center'>
                 <img  className='w-full h-full object-cover' src={Life3} alt="" />
                 <h2 className='absolute  text-white text-6xl font-extrabold tracking-wider'>22+</h2>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About