/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FiXCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Facultimodal({ onClose, closePath, item }) {
  const navigate = useNavigate();

  return (
    <div className='fixed inset-0 z-30 transition-all duration-500 font-general-medium'>
      {/* Modal Backdrop */}
      <div className='absolute inset-0 z-20 w-full h-full bg-black bg-opacity-50 bg-filter'></div>
      {/* Modal Content */}
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='z-30 flex items-center modal-wrapper'>
          <div className='relative grid max-w-md max-h-screen grid-rows-2 md:grid-rows-1 md:grid-cols-5 pt-9 md:pt-0 p-5 lg:p-10 mx-5 bg-white shadow-lg gap-5 lg:gap-10 rounded-3xl modal  lg:max-w-3xl md:max-w-2xl backdrop-blur-lg bg-opacity-90'>
            <div className='bg-[#E5E7EB] md:col-span-2 cursor-pointer h-full w-full rounded-3xl overflow-hidden relative'>
              <img className='absolute inset-0 bottom-0 object-cover w-full h-full' src={item.img} alt='' />
            </div>
            <div className='flex flex-col items-start w-full h-full md:col-span-3 space-y-3'>
              <div className='-space-y-1 '>
                <h2 className='text-base font-normal text-[#133755] select-none md:text-xl lg:text-2xl'>{item.name}</h2>
                <h1 className='font-sans text-sm font-normal select-none opacity-90 md:text-lg '>{item.position}</h1>
              </div>
              <p className='font-sans text-xs sm:text-base lg:text-lg'>{item.about}</p>
            </div>
            <div onClick={onClose}>
              <FiXCircle className='absolute text-xl font-light cursor-pointer top-3 right-3  md:top-7 md:right-7 opacity-70' onClick={() => navigate(closePath)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facultimodal;
