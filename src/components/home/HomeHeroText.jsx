import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-2 text-center'>
            <div className='text-[9.5vw] uppercase leading-[9vw] flex justify-center items-center'>
                The spark for
            </div>
            <div className='text-[9.5vw] uppercase leading-[9vw] flex justify-center items-start'>
                all 
                  <div className='h-[7vw] w-[16vw] rounded-full mt-1 overflow-hidden'>
                    <Video />
                  </div>
                things
            </div>
            <div className='text-[9.5vw] uppercase leading-[9vw] flex justify-center items-center'>
                creative
            </div>
        </div>
    )
}

export default HomeHeroText