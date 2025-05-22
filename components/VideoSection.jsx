import { degularRegular } from '@/font-loader/fonts';
import React from 'react'
import { IoIosPlay } from "react-icons/io";
const VideoSection = () => {
  return (
   <section className="relative bg-black p-[50px] overflow-hidden h-screen mb-8">
          <img
            src="/images/common/hero-image.jpg"
            alt="Example"
            className="filter grayscale transition duration-500 object-cover h-full w-full"
          />
          <button className='absolute translate-x-[-30px] translate-y-[-40px] top-1/2 left-1/2 w-[100px] h-[100px] rounded-[50px] bg-white flex flex-col items-center justify-center cursor-pointer'>
          <span><IoIosPlay size={30}/></span>
          {/* <span className={`${degularRegular.className} text-[20px]`}>Play</span> */}
          </button>
        </section>
  )
}

export default VideoSection