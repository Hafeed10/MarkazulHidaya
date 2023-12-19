import React from 'react'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

function Contact() {
  return (
        <div className='relative flex flex-col items-center justify-center w-full h-full px-3 py-7 md:py-16 lg:py-22 gap-10 lg:gap-16  xl:gap-20 md:px-10 lg:px-10 xl:px-36'>
            <div className='w-full h-full bg-[#619A46] opacity-5 absolute top-0 left-0'></div>
            <h2 className='text-[#619A46]  text-4xl md:text-5xl lg:text-[3.5rem]'>Contact us</h2>
            <div className='font-sans grid gird-cols-1 w-full h-full grid-rows-auto  md:grid-cols-2 items-center gap-10 lg:gap-16 py-5 lg:py-10'>
                <div className='flex  w-full h-full flex-col items-start justify-start gap-y-5'>
                    <p className='text-lg md:text-xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatum obcaecati exercitationem, vel laudantium ratione eos a cum aut aliquid?</p>
                    <div className='flex items-start w-full h-auto gap-2 md:gap-5 lg:mt-10'>
                        <div className='bg-[#ffb134] rounded-xl p-2 text-xl md:text-xl'><FiPhoneCall/></div>
                        <div className='tracking-wide flex flex-col items-start w-full text-lg md:text-xl font-normal'>
                            <p>7558847558 - 270439</p>
                            <p>7510231588 - 270565</p>
                        </div>
                    </div>
                    <div className='tracking-wide flex items-start w-full h-auto gap-2 md:gap-5'>
                        <div className='bg-[#ffb134] rounded-xl p-2 text-xl  md:text-xl'><FiMail/></div>
                        <p className=' text-lg md:text-xl font-normal'>Markazulhidaya@gmail.com</p>
                    </div>
                    <div className='tracking-wide flex items-start w-full h-auto gap-2 md:gap-5'>
                        <div className='bg-[#ffb134] rounded-xl p-2 text-xl  md:text-xl'><FiMapPin/></div>
                        <div className='flex flex-col items-start w-full text-lg md:text-xl font-normal'>
                            <p>KODAKKAD , P.O. MANNARKKAD</p>
                            <p>678583 , PALAKKAD, KERALA</p>
                        </div>
                    </div>
                </div>
                <iframe className='w-full h-full rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7131662339693!2d76.3844296748081!3d10.985009489176733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d5c0ff1c28bf%3A0x7e45942e5bc16b2e!2sMarkazul%20hidaya%20kombam!5e0!3m2!1sen!2sin!4v1702974408710!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
  )
}

export default Contact;