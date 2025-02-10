/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useCountUp } from "react-countup";
import {countitems} from '../../Data/Counties'


function HomeThree() {
  useCountUp({ ref: "1", end: 120, duration: 5 });
  useCountUp({ ref: "2", end: 100, duration: 5 });
  useCountUp({ ref: "3", end: 10, duration: 5 });
  useCountUp({ ref: "4", end: 1000, duration: 5 });

  return (
    <div className="w-full px-3 md:px-10 lg:px-10 xl:px-36 py-10  md:py-12 lg:py-14 h-auto">
      <div className="w-full h-full grid grid-cols-2 gap-y-4 md:grid-cols-4 items-center justify-center md:justify-between  ">
        {countitems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Items
            count={<span id={item.id} />}
            img={item.img}
            measurement={item.measurement}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}
export default HomeThree;



function Items(props) {
  return (
    <div className="flex flex-col  transition-all justify-center p-4 md:p-8 space-y-7 w-full h-full items-center  ">
      <div className="bg-[#62bbdecf]  w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full p-4 md:p-5">
        <img className="w-full h-full text-white" src={props.img} alt="" />
      </div>
      <div className="font-sans flex flex-col justify-center  items-center text-center w-auto">
        <div className="font-semibold   text-2xl md:text-4xl flex items-center">
          <h2 className="text-[#555555] ">{props.count}</h2>
          <h2 className="text-[#555555] ">{props.measurement}</h2>
        </div>
        <p className="font-normal tracking-wide text-gary-700 text-xl lg:text-2xl ">
          {props.name}
        </p>
      </div>
    </div>
  );
}
