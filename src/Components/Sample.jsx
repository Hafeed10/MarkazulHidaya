import React, { useState, useEffect } from 'react';

function Sample() {
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
    <div className="w-full px-3 md:px-10 lg:px-10 xl:px-36 space-y-5 py-10 md:py-16 lg:py-20 xl:py-24 h-screen bg-gray-400">
      <div className="h-auto px-8 w-full">
        <ul className="w-full flex items-center justify-start space-x-3" role="tablist">
          {Tabs.map((tab) => (
            <li
              key={tab.tabKey}
              className=''
              onClick={() => handleTabSelect(tab.tabKey)}
              role="tab"
            >
              <div className={`cursor-pointer transition-all shadow-lg duration-500 rounded-full ${activeTab === tab.tabKey ? 'bg-[#CCA65D] w-7 h-4 ' : 'bg-white  w-4 h-4' }`}></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2  text-7xl h-full" id={activeTab}>
        {activeTab === '1' && <h2 className='text-white'>1 sit amet Lorem ipsum amet dolor sit amet.</h2>}
        {activeTab === '2' && <h2 className='text-white'>2 dolor Lorem ipsum amet sit amet.</h2>}
        {activeTab === '3' && <h2 className='text-white'>3 ipsum dolor sit ipsum sit amet.</h2>}
        {activeTab === '4' && <h2 className='text-white'>4 ipsum dolor sit ipsum sit amet.</h2>}
      </div>
    </div>
  );
}

export default Sample;
