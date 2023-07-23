import React from 'react';
import bgAcademic from '../../assets/Img/bgPattern.jpg';
import EventStories from '../Event/EventStories';

function HomeFour() {
  return (
    <div
      id='Events'
      style={{ backgroundImage: `url(${bgAcademic})` }}
      className='relative flex flex-col items-center justify-center w-full h-full py-10 bg-no-repeat md:py-16 lg:py-20 xl:py-24'
    >
        <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
      <h2 className='text-5xl md:text-5xl lg:text-6xl xl:text-7xl'>Events</h2>
      <EventStories/>
    </div>
  );
}

export default HomeFour;
