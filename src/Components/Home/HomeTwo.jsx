import React from 'react';
import CourseTab from '../../assets/CourseTab';
import bgAcademic from '../../assets/Img/bgPattern.jpg';




function HomeTwo() {

  return (
    <div id="Academics" style={{ backgroundImage: `url(${bgAcademic})` }} className='relative w-full h-full px-3 md:px-10 lg:px-10 xl:px-36'>
      <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
      <CourseTab/>
    </div>
  );
}

export default HomeTwo;
