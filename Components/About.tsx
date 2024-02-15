import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
              <Image 
                src="/images/johnpic.jpg" 
                alt="user" 
                layout="fill" 
                objectFit='contain' 
                className='relative z-[11] w-[100%] h-[100%] object-contain'
                />
                <div className='absolute w-[75%] h-[100%] z-[9] bg-[#55e6a5] top-[-1rem] left-[3rem]'></div>
        </div>
        <div>
            <h1 className='text-[20px] font-semibold uppercase text-[#55e6a5] mb-[1rem]'>ABOUT ME</h1>
            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem]
             capitalize mb-[3rem] font-medium text-white'>
              Transforming <span className='text-yellow-400'>Visions</span>
            </h2>
            <div className='mb-[3rem] flex items-center md:space-x-10'>
              <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
              <p className='text-[19px] text-slate-300 w-[80%]'>
                Keep exploring new technologies and methodologies, and keep pushing the boundaries of what&apos;s possible as a full-stack developer. Powers the digital innovations that shape our world, 
                and the passion for innovation that drives its evolution.
              </p>
            </div>
            <button className='px-[1.2rem] rounded-md hover:bg-yellow-400 transition-all duration-200 py-[0.7rem] text-[18px]
             font-semibold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
             <p>Download CV</p>
             <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default About;