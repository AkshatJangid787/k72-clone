import React, { useRef } from 'react'

const Agency = () => {
  const imageDivRef = useRef(null)

  return (
    <div>
      <div className='section1'>
        <div className='h-[20vw] w-[15vw] absolute top-40 left-114 bg-red-500 rounded-2xl overflow-hidden'>
          <img className='w-full h-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='font-[font2] relative'>
          <div className=' mt-[60vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>SEVEN7Y
              <br /> TWO</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-6xl w-[90%] leading-14'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

      <div className='section2'>

      </div>
    </div>
  )
}

export default Agency