// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import HomeOne from "../Components/Home/HomeOne";
import HomeTwo from "../Components/Home/HomeTwo";
import HomeThree from "../Components/Home/HomeThree";
import HomeFour from "../Components/Home/HomeFour";
import HomeSix from "../Components/Home/HomeSix";
import HomeEight from "../Components/Home/HomeEight";

function Home() {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  const Tabs = ["1", "2", "3", "4"];

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Tabs.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % Tabs.length;
      setActiveTab(Tabs[nextIndex]);
    }, 2500);

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <div className="w-full h-full">
      <div id="Home" className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
          <div className="text-4xl md:text-6xl font-semibold text-white transition-all duration-500">
            {activeTab === "1" && "Empowering Minds, Enriching Souls"}
            {activeTab === "2" && "Guided by Faith, Strengthened by Knowledge"}
            {activeTab === "3" && "Shaping Tomorrow with Islamic Values"}
            {activeTab === "4" && "Where Tradition Meets Modern Education"}
          </div>
          <ul className="flex space-x-4 mb-10">
            {Tabs.map((tab) => (
              <li key={tab} onClick={() => handleTabSelect(tab)} role="tab">
                <div
                  className={`cursor-pointer rounded-full transition-all duration-500 shadow-lg"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="bg-[#1e7594] hover:bg-[#1e7494cc] text-white font-sans p-3 px-14 rounded-md">
              <h1>Learn More</h1>
            </div>
            <div className="bg-[#ededed49] hover:bg-[#fcfcfcf0] text-white hover:text-black font-sans p-3 px-14 rounded-md border-2 outline-none transition-all duration-200">
              <h1>Know Us</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <HomeOne />
      <HomeThree />
      <HomeTwo />
      <HomeFour />
      <HomeSix />
      <HomeEight />
    </div>
  );
}

export default Home;
