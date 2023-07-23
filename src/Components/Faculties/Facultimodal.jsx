import React from 'react';
import { FiX, FiXCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Facultimodal({ onClose, onRequest, closePath, item }) {
  const navigate = useNavigate();

  return (
    <div className='fixed inset-0 z-30 transition-all duration-500 font-general-medium'>
      {/* Modal Backdrop */}
      <div className='absolute inset-0 z-20 w-full h-full bg-black bg-opacity-50 bg-filter'></div>

      {/* Modal Content */}
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='z-30 flex items-center modal-wrapper'>
          <div className='relative grid max-w-md max-h-screen grid-cols-5 p-10 mx-5 bg-white shadow-lg gap-x-10 rounded-3xl modal xl:max-w-3xl lg:max-w-xl md:max-w-xl backdrop-blur-lg bg-opacity-90'>
              <div className='bg-[#E5E7EB] col-span-2 cursor-pointer h-full w-full rounded-3xl overflow-hidden relative'>
               <img className='absolute inset-0 bottom-0 object-cover w-full h-full' src={item.img} alt='' />
             </div>
              <div className='flex flex-col items-start w-full h-full col-span-3 space-y-3'>
                <div className='-space-y-1 '>
                  <h2 className='text-base font-normal text-[#CCA65D] select-none md:text-xl lg:text-2xl'>{item.name}</h2>
                  <h1 className='font-sans text-sm font-normal select-none opacity-90 md:text-lg '>{item.position}</h1>
                </div>
                <p className='font-sans lg:text-lg'>{item.about}</p>
              </div>
              <div onClick={onClose}>
              <FiXCircle className='absolute text-xl font-light cursor-pointer top-7 right-7 opacity-70' onClick={() => navigate(closePath) } />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facultimodal;
