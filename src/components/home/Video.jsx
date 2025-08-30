import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
        <video autoPlay muted loop className='w-full h-full object-cover' src="../../../public/video/videoHome.mp4"></video>
    </div>
  )
}

export default Video