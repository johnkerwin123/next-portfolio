import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
      <p className='heading'>
        My <span className='text-yellow-400'>Services</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem]
       mt-[4rem] text-white'>
          <div>
              <div 
                className='bg-blue-700 hover:scale-110 transform transition-all rounded-lg  
                duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] cursor-pointer'
                >
                  <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    Frontend
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Architect of digital landscapes, shaping how users interact with web applications 
                    and ensuring that every click, swipe, and scroll is intuitive and delightful. Empathizing their experiences.
                  </p> 
              </div>
          </div>
          <div>
              <div 
                className='bg-orange-700 hover:scale-110 transform transition-all rounded-lg 
                duration-300 uppercase font-semibold text-center p-[2rem] cursor-pointer'
                >
                  <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    Backend
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Ensure that data is processed securely, transactions are handled seamlessly, and performance is optimized for peak efficiency
                    from designing databases to building APIs.
                  </p> 
              </div>
          </div>
          <div>
              <div 
                className='bg-red-700 hover:scale-110 transform transition-all rounded-lg 
                duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] cursor-pointer'
                >
                  <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    Web Design
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                     Sculpting layouts, refining typography, attention to detail and flair for aesthetics elevate mere websites into immersive digital journeys.
                     From wireframes to mockups.
                  </p> 
              </div>
          </div>
      </div>
    </div>
  )
}

export default Services;
