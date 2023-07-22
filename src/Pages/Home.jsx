import React, { useEffect, useState } from 'react'
import homebg from '../assets/Img/homebg.png'
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
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Tabs.findIndex((tab) => tab.tabKey === activeTab);
      const nextIndex = (currentIndex + 1) % Tabs.length;
      setActiveTab(Tabs[nextIndex].tabKey);
    }, 3500);

    return () => clearInterval(timer);
  }, [activeTab, Tabs]);

  return (
    <div className='h-full w-full'>
    <div id='Home' style={{backgroundImage: `url(${homebg})`}} className='relative w-full px-3 md:px-10 lg:px-10 xl:px-36 space-y-5 py-16 lg:py-20 xl:py-24 h-screen bg-top bg-no-repeat flex flex-col items-center  justify-end'>
        <div className="w-full  h-auto space-y-5 flex flex-col text-center md:text-start items-center md:items-start justify-center">
          <div className="h-auto w-full">
             <ul className="w-full flex items-center justify-start space-x-3 md:space-x-4" role="tablist">
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
          <div className="w-full md:w-2/3 lg:w-1/2 text-5xl md:text-6xl  lg:text-7xl h-full" id={activeTab}>
            {activeTab === '1' && <h2 className='text-white'>Lorem  sit amet ipsum amet dolor sit amet.  1</h2>}
            {activeTab === '2' && <h2 className='text-white'> Lorem  sit amet ipsum amet dolor sit amet. 2</h2>}
            {activeTab === '3' && <h2 className='text-white'> Lorem  sit amet ipsum amet dolor sit amet. 3</h2>}
            {activeTab === '4' && <h2 className='text-white'> Lorem  sit amet ipsum amet dolor sit amet. 4</h2>}
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