// eslint-disable-next-line no-unused-vars
import React from 'react'

import { EventData, EventUpData } from '../../Data/Eventdata'


function EventStories() {
  return (
    <div className='w-full h-full py-20 lg:h-auto px-3 md:px-10 lg:px-10 xl:px-36 overflow-visible flex flex-col md:flex-row items-start justify-start'>
      {EventUpData.slice(0, 1).map((Event) => (
        // eslint-disable-next-line react/jsx-key
        <div className='font-sans flex flex-col items-start justify-start gap-y-1.5 md:gap-y-1 xl:gap-y-1.5 md:pr-3 lg:pr-5 xl:pr-8 w-full md:w-2/5 h-full '>
          <div className='flex flex-col w-full space-y-4 md:space-y-3 items-start h-full'>
            <img
              src={Event.img}
              className='w-full h-72 md:h-40 lg:h-40 xl:h-72 rounded-lg lg:rounded-lg object-cover'
              alt=''
            />
            <div className='flex text-sm md:flex-col lg:flex-row gap-x-1.5 lg:text-[1.05rem] items-center w-full text-start font-thin'>
              <h2 className='py-0.5 px-3 bg-[#1e7594] text-white rounded-md'>UP Coming Event</h2>
              <p className='text-xs md:text-sm lg:text-[1.05rem] text-[#133755] '>{Event.time} MINUTES AGO</p>
            </div>
          </div>
          <div className='flex space-y-3 md:space-y-1.5 lg:py-1.5 xl:py-1 w-full h-full flex-col items-start justify-center'>
            <h2 className='text-2xl xl:text-3xl leading-6 text-[#133755]'>{Event.title}</h2>
            <p className='text-sm lg:text-base xl:text-lg leading-4'>
              {Event.description}
            </p>
            <div className='bg-[#e2e4e5]  text-gray-600 rounded-lg flex items-center'>
              <a
                href={Event.buttonTo}
                className='rounded-lg cursor-pointer w-auto  bg-opacity-10 pt-0.5 px-6 pb-1 text-sm mt-1 font-sans'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      ))}
      <hr className='md:hidden my-5 w-full' />
      <div className='w-full md:w-3/5 md:pl-3 lg:pl-5 xl:pl-8 h-full flex flex-col items-start justify-start md:border-l-2'>
        {EventData.slice(0, 3).map((Event) => (
          <div
            key={Event.id}
            className='h-44 lg:h-48 xl:h-52 pb-3 w-full flex items-start justify-evenly gap-x-1 lg:gap-x-1.5 xl:gap-x-5 rounded-md'
          >
            <div className='font-sans h-full w-2/3 lg:w-1/2 flex flex-col items-start justify-start xl:justify-between xs:gap-y-1.5 xl:gap-0'>
              <h2 className='text-sm lg:text-lg xl:text-xl leading-5 text-[#133755]  xl:leading-6'>{Event.title}</h2>
              <p className='flex text-xs xl:text-sm items-center leading-5 w-full'>
                {Event.date} <hr className='ml-2 w-1/2 text-black font-extrabold' />
              </p>
              <p className='text-xs xl:text-base'>{Event.description}</p>
              <div className='bg-[#e2e4e5]  text-gray-600  rounded-lg flex items-center'>
              <a
                href={Event.buttonTo}
                className='rounded-lg cursor-pointer w-auto   bg-opacity-10 pt-0.5 px-6 pb-1 text-sm mt-1 font-sans'
              >
                Learn More
              </a>
            </div>
            </div>
            <img src={Event.img} className='w-1/3 rounded-sm lg:w-1/2 object-cover h-full' alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventStories