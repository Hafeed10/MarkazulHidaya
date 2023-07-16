import React from 'react'
import { useCountUp } from 'react-countup';
import groupone from '../assets/Img/Groupone.svg'
import grouptwo from '../assets/Img/Grouptwo.svg'
import groupthree from '../assets/Img/Groupthree.svg'

function Status() {
  useCountUp({ ref: '1', end: 22, duration: 10 });
	useCountUp({ ref: '2', end: 22, duration: 10 });
	useCountUp({ ref: '3', end: 22, duration: 10 });
	useCountUp({ ref: '4', end: 22, duration: 10 });

    const countitems = [
        {
            id:'1',
            img:groupone,
            name:'Students',
            measurement:'k+',
        },
        {
            id:'2',
            img:grouptwo,
            name:'Programs',
            measurement:'k+',
        },
        {
            id:'3',
            img:groupthree,
            name:'Faculties',
            measurement:'k+',
        },
        {
            id:'4',
            img:groupone,
            name:'Alumni',
            measurement:'k+',
        }
    ]
  return (
    <div className='w-full px-3 md:px-10 lg:px-10 xl:px-36 py-10 bg-white md:py-12 lg:py-14 h-auto'>
      <div className='w-full h-full grid grid-cols-2 gap-y-4 md:grid-cols-4 items-center justify-center md:justify-between  '>
        {countitems.map((item)=>(
        <Items count={<span id={item.id}/>} img={item.img} measurement={item.measurement} name={item.name}/>
        ))}
      </div>
    </div>
  )
}

export default Status



function Items(props) {
  return (
    <div className='flex flex-col hover:shadow-md transition-all justify-center p-4 md:p-8 space-y-7 w-full h-full items-center  '>
        <div className='bg-[#F5DBA7] w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full p-4 md:p-5'>
            <img className='w-full h-full' src={props.img} alt="" />
        </div>
        <div className='font-sans flex flex-col justify-center  items-center text-center w-auto'>
            <div className='font-semibold   text-2xl md:text-4xl flex items-center'>
                <h2 className='text-[#555555] '>{props.count}</h2> 
                <h2 className='text-[#555555] '>{props.measurement}</h2>
            </div>
            <p className='font-normal tracking-wide text-gary-700 text-xl lg:text-2xl '>{props.name}</p>
        </div>
    </div>
  )
}

