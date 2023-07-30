import React from 'react'
import icon1 from '../../assets/Img/icon1.svg'
import groundone from '../../assets/Img/groundone.png'

function HomeOne() {
  return (
    <div className='relative w-full h-auto flex flex-col -z-50 py-12 md:p-16 lg:py-20 xl:py-32 pb-20 md:pb-40 lg:pb-64 xl:pb-80  px-3 md:px-10 lg:px-10 xl:px-36 space-y-7 lg:space-y-10 xl:space-y-12 items-center justify-center text-center'>
        <h1 class="text-[#619A46]  text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem]">Welcome to Al Jamia al Islamia </h1>
        <p class="md:px-8 font-sans lg:px-16 xl:px-24 text-center text-[#555555] text-lg md:text-xl  lg:text-2xl font-normal leading-snug tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.</p>
            <div className='justify-center  cursor-pointer mt-3 w-auto px-4 lg:px-6 space-x-1.5 flex items-center  py-1 lg:py-2 bg-[#CCA65D] rounded-lg lg:rounded-xl'>
                 <img src={icon1} alt="" className='w-5 lg:w-6'/>
                <p class="text-white text-base lg:text-lg font-normal font-sans tracking-wide">Take a Tour</p>
             </div>
        <img src={groundone} className='-z-10 bottom-0 h-auto w-full absolute' alt="" />
    </div>
  )
}

export default HomeOne