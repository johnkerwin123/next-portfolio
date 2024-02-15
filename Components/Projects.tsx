import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
          Pro<span className='text-yellow-400'>jects</span> 
        </h1>
        <div className='w-[80%] h-[90%} pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration relative w-[100%] h-[200px]
                  md:h-[300px]'
                >
                  <Image 
                      src="/images/ark.png" alt="motorrental" layout='fill' 
                      className='object-contain'
                  />
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration relative w-[100%] h-[200px]
                  md:h-[300px]'
                >
                  <Image 
                      src="/images/rent.png" alt="rentcar" layout='fill' 
                      className='object-contain'
                  />
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration relative w-[100%] h-[200px]
                  md:h-[300px]'
                >
                  <Image 
                      src="/images/hotel.png" alt="hotelwebsite" layout='fill' 
                      className='object-contain'
                  />
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration relative w-[100%] h-[200px]
                  md:h-[300px]'
                >
                  <Image 
                      src="/images/portfolio.png" alt="portfolio" layout='fill' 
                      className='object-contain'
                  />
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration relative w-[100%] h-[200px]
                  md:h-[300px]'
                >
                  <Image 
                      src="/images/fleming.png" alt="flemingwebsite" layout='fill' 
                      className='object-contain'
                  />
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration relative w-[100%] h-[200px]
                  md:h-[300px]'
                >
                  <Image 
                      src="/images/rockpaper.png" alt="rockpaper" layout='fill' 
                      className='object-contain'
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;
