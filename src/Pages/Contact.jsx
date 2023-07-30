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
                        <div className='bg-[#CCA65D] rounded-xl p-2 text-xl md:text-xl'><FiPhoneCall/></div>
                        <div className='tracking-wide flex flex-col items-start w-full text-lg md:text-xl font-normal'>
                            <p>00914933 - 270439</p>
                            <p>00 914933 - 270565</p>
                        </div>
                    </div>
                    <div className='tracking-wide flex items-start w-full h-auto gap-2 md:gap-5'>
                        <div className='bg-[#CCA65D] rounded-xl p-2 text-xl  md:text-xl'><FiMail/></div>
                        <p className=' text-lg md:text-xl font-normal'>aljamiaalislamiya@gmail.com</p>
                    </div>
                    <div className='tracking-wide flex items-start w-full h-auto gap-2 md:gap-5'>
                        <div className='bg-[#CCA65D] rounded-xl p-2 text-xl  md:text-xl'><FiMapPin/></div>
                        <div className='flex flex-col items-start w-full text-lg md:text-xl font-normal'>
                            <p>SANTHAPURAM , P.O. PATTIKKAD</p>
                            <p>679 325 , MALAPPURAM, KERALA</p>
                        </div>
                    </div>
                </div>
                <iframe className='w-full h-full rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.267055762801!2d76.22156737487161!3d11.018578854680792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd2a01624cbd%3A0xacc202556b7e348d!2sAl%20Jamia%20Al%20Islamiya!5e0!3m2!1sen!2sin!4v1690725917954!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
  )
}

export default Contact