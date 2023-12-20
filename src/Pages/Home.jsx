import React, { useEffect, useState } from 'react'
import hafe from '../assets/Img/hafe.jpg'
import HomeOne from '../Components/Home/HomeOne';
import HomeTwo from '../Components/Home/HomeTwo';
import HomeThree from '../Components/Home/HomeThree';
import HomeFour from '../Components/Home/HomeFour';
import HomeFive from '../Components/Home/HomeFive';
import HomeSix from '../Components/Home/HomeSix';
import HomeSeven from '../Components/Home/HomeSeven';
import HomeEight from '../Components/Home/HomeEight';

function Home() {
    const [activeTab, setActiveTab] = useState('Certificate');

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  const Tabs = [
    {
      tabKey: '1',
    },
    {
      tabKey: '2',
    },
    {
      tabKey: '3',
    },
    {
      tabKey: '4',
    },
    {
      tabKey: '5',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Tabs.findIndex((tab) => tab.tabKey === activeTab);
      const nextIndex = (currentIndex + 1) % Tabs.length;
      setActiveTab(Tabs[nextIndex].tabKey);
    }, 2500 );

    return () => clearInterval(timer);
  }, [activeTab, Tabs]);

  return (
    <div className='w-full h-full'>
    <div id='Home' style={{backgroundImage:`url(${hafe})`}} className='relative flex flex-col items-center justify-end w-full h-screen px-3 py-16 space-y-5 bg-top bg-no-repeat md:px-10 lg:px-10 xl:px-36 lg:py-20 xl:py-24'>
        <div className="flex flex-col items-center justify-center w-full h-auto space-y-5 text-center md:text-start md:items-start">
          <div className="w-full h-auto">
             <ul className="flex items-center justify-start w-full space-x-3 md:space-x-4" role="tablist">
               {Tabs.map((tab) => (
                 <li
                   key={tab.tabKey}
                   className=''
                   onClick={() => handleTabSelect(tab.tabKey)}
                   role="tab"
                 >
                  {activeTab && <div className={`cursor-pointer transition-all shadow-lg duration-500 rounded-full opacity-90 ${activeTab === tab.tabKey ? 'bg-[#619A46] w-7 h-3 ' : 'bg-white  w-3 h-3' }`}></div> }
                 </li>
               ))}
             </ul>
          </div>
          <div className="w-full h-full text-5xl md:w-2/3 lg:w-1/2 md:text-6xl lg:text-7xl" id={activeTab}>
            {activeTab === '1' && <h2 className='text-white'>MARKAZUL HIDAYA.  1</h2>}
            {activeTab === '2' && <h2 className='text-white'> HIDAYA ZAHRATUL QURAN. 2</h2>}
            {activeTab === '3' && <h2 className='text-white'> HADIYA ISLAMIYA ARABIC COLLEGE. 3</h2>}
            {activeTab === '4' && <h2 className='text-white'> MOULANA ENGLISH MEDIUM SCHOOL. 4</h2>}
            {activeTab === '5' && <h2 className='text-white'> HIDAYA HIFZQURHAN COLLAGE. 5</h2>}
          </div>
        </div>
    </div>
       <HomeOne/>
      <HomeTwo/>
      <HomeThree/>
      <HomeFour/>
      <HomeFive/>
      <HomeSix/>
      <HomeSeven/>
      <HomeEight/>
    </div>
  )
}

export default Home