import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-9'>
        <Link className='text-[7vw] border-3 rounded-full px-10 leading-[7vw] pt-3 text-white hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/work'>WORK</Link>
        <Link className='text-[7vw] border-3 rounded-full px-10 leading-[7vw] pt-3 text-white hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agency'>AGENCY</Link>
    </div>
  )
}

export default HomeBottomText