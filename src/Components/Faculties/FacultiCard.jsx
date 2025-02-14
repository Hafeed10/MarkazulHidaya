/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function FacultiCard({ item }) {
  return (
    <div className='w-full h-auto transition-all duration-300 bg-white shadow-md cursor-pointer hover:scale-95 rounded-2xl'>
      <div className='bg-[#E5E7EB]  h-[35vh] md:h-[25vh] lg:h-[35vh] w-full rounded-t-2xl overflow-hidden relative'>
        <img className='absolute inset-0 bottom-0 object-cover w-full' src={item.img} alt='' />
      </div>
      <div className='w-full h-full px-3 lg:px-8 py-6 text-center'>
        <h2 className='text-xl lg:text-2xl text-[#133755]'>{item.name}</h2>
        <p className='pb-3 lg:pb-5  text-base lg:text-xl'>{item.position}</p>
        <div className='w-full py-2 lg:py-2.5  text-center'>
          <a href={item.buttonTo} className='rounded-lg w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 lg:pt-1 px-5 pb-1.5 text-sm lg:text-lg font-sans  '>Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default FacultiCard;
