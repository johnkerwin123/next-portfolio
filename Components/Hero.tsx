import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from "next/image";
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {

  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = '/images/RESUME.pdf'; 
    link.download = 'john_cv.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className='w-[84%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[26px] md:text-[42px] text-white font-semibold'>
            Hi, I&#39;m
            <div>
             <span className='text-yellow-400'>John Kerwin Oropeza</span>
            </div> 
          </h1>
          <TextEffect />
          <p className='text-[#ffffff92] mt-[1rem] text-[20px]'>
             I&apos;m a full-stack developer passionate about crafting elegant solutions to complex problems. With a keen eye for design and a love for clean, efficient code!
          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button className='px-[1.2rem] rounded-md hover:bg-yellow-400 transition-all duration-200 py-[0.7rem] text-[18px]
             font-semibold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
             onClick={handleDownload}
             >
             <p>Download CV</p>
             <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
            </button>
          </div>
        </div>
        <div className='w-[400px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[400px]'>
          <Image src="/images/johnpic.jpg" alt="user" layout="fill" className='object-cover rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Hero;