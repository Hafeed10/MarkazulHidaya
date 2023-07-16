import React from 'react';
import bgAcademic from '../assets/Img/bgPattern.jpg';
import EventUp from '../assets/Img/eventimg.jpg';
import Event from '../assets/Img/eventimgtwo.jpg';
import { EventData, EventUpData } from '../Data/Eventdata';

function Events() {
  return (
    <div
      id='Events'
      style={{ backgroundImage: `url(${bgAcademic})` }}
      className='h-full space-y-8 md:space-y-16 lg:space-y-20 xl:space-y-24 flex flex-col items-center justify-center px-3 md:px-10 lg:px-10 xl:px-36 py-10 md:py-16 lg:py-20 xl:py-24 bg-no-repeat w-full'
    >
      <h2 className='text-5xl md:text-5xl lg:text-6xl xl:text-7xl'>Events</h2>
      <div className='w-full h-full lg:h-auto overflow-visible flex flex-col md:flex-row items-start justify-start'>
      {EventUpData.slice(0, 1).map((Event) => (
        <div className='font-sans flex flex-col items-start justify-start gap-y-2 md:gap-y-4 md:pr-3 lg:pr-8 xl:pr-10 w-full md:w-2/5 h-full '>
          <div className='flex flex-col w-full space-y-4 xl:space-y-5 items-start h-full'>
            <img
              src={Event.img}
              className='w-full h-72 md:h-72 lg:h-72 xl:h-96 rounded-xl lg:rounded-3xl object-cover'
              alt=''
            />
            <div className='flex text-sm md:flex-col lg:flex-row gap-x-1.5 lg:text-[1.05rem] items-start w-full text-start font-thin'>
              <h2 className='py-0.5 px-3 bg-[#619A46] text-white rounded-md'>UP Coming Event</h2>
              <p className='text-xs md:text-sm lg:text-[1.05rem]'>{Event.time} MINUTES AGO</p>
            </div>
          </div>
          <div className='flex space-y-3 lg:py-1 w-full h-full flex-col items-start justify-center'>
            <h2 className='text-2xl lg:text-3xl leading-6'>{Event.title}</h2>
            <p className='text-sm md:text-base xl:text-xl leading-5'>
              {Event.description}
            </p>
            <a
              href={Event.buttonTo}
              className='rounded-lg cursor-pointer w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 px-6 pb-1 text-sm lg:text-base xl:text-lg font-sans'
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
        <hr className='md:hidden my-5 w-full' />
        <div className='w-full md:w-3/5 md:pl-3 lg:pl-8 xl:pl-10 h-full flex flex-col items-start justify-start md:border-l-2'>
          {EventData.slice(0, 3).map((Event) => (
            <div
              key={Event.id}
              className='h-44 lg:h-48 xl:h-52 pb-3 w-full flex items-start justify-evenly gap-x-1 lg:gap-x-1.5 xl:gap-x-5 rounded-md'
            >
              <div className='font-sans h-full w-2/3 lg:w-1/2 flex flex-col items-start justify-start xl:justify-between gap-y-1.5'>
                <h2 className='text-sm lg:text-lg xl:text-xl leading-5  xl:leading-6'>{Event.title}</h2>
                <p className='flex text-xs xl:text-sm items-center leading-5 w-full'>
                  {Event.date} <hr className='ml-2 w-1/2 text-black font-extrabold' />
                </p>
                <p className='text-xs xl:text-base'>{Event.description}</p>
                <a
                  href={Event.buttonTo}
                  className='rounded-md lg:rounded-lg cursor-pointer w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 px-4 xl:px-6 pb-1 text-xs xl:text-sm font-sans'
                >
                  Learn More
                </a>
              </div>
              <img src={Event.img} className='w-1/3 rounded-sm lg:w-1/2 object-cover h-full' alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
