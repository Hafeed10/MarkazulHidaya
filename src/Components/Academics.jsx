import React, { useState } from 'react';
import bgAcademic from '../assets/Img/bgPattern.jpg';
import CourseCard from '../assets/CourseCard';
import { CertificateData, DiplomaData, ShortTermData } from '../Data/CourseData';

function Academics() {
  const [activeTab, setActiveTab] = useState('Certificate');

  const Tabs = [
    {
      tabKey: 'Certificate',
      title: 'Certificate'
    },
    {
      tabKey: 'Diploma',
      title: 'Diploma'
    },
    {
      tabKey: 'ShortTerm',
      title: 'Short Term'
    },
  ];

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  const renderCourseCards = (courses) => {
    return courses.map((course, index) => (
      <CourseCard
        key={index}
        img={course.img}
        title={course.title}
        description={course.description}
        buttonTo={course.buttonTo}
      />
    ));
  };

  return (
    <div
      id="Academics"
      style={{ backgroundImage: `url(${bgAcademic})` }}
      className="h-full bg-no-repeat space-y-8 md:space-y-14 px-3 md:px-10 lg:px-10 xl:px-36 py-24 w-full items-center text-center md:text-start flex flex-col"
    >
      <div className="space-y-4 md:space-y-8">
        <h2 className="text-[2.5rem] lg:text-5xl">Our Courses</h2>
        <p className="text-lg lg:text-xl leading-7 lg:leading-8 font-sans tracking-wide">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Similique, commodi!
        </p>
      </div>

      <div className="h-12 sm:h-16 lg:h-20  bg-white w-full">
        <ul className="w-full shadow-lg flex items-center justify-evenly taxt-lg sm:text-2xl lg:text-3xl rounded-md h-full px-2 list-none" role="tablist">
          {Tabs.map((tab) => (
            <li key={tab.tabKey} className="text-center cursor-pointer">
              <button
                className={`hover:text-[#CCA65D] text-[#CCA65D]  ${activeTab === tab.tabKey ? 'border-[#6E8B3D] border-b-2 lg:border-b-4' : ''}`}
                onClick={() => handleTabSelect(tab.tabKey)}
                role="tab"
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-5 lg:gap-4 xl:gap-10 md:grid-rows-2 h-full`} id={activeTab}>
        {activeTab === 'Certificate' && renderCourseCards(CertificateData)}
        {activeTab === 'Diploma' && renderCourseCards(DiplomaData)}
        {activeTab === 'ShortTerm' && renderCourseCards(ShortTermData)}
      </div>
    </div>
  );
}

export default Academics;
