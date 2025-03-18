import React from 'react'
import AboutImage from '../assets/AboutImage.png'
import music from '../assets/music.png'
import lightbulb from '../assets/lightbulb.png'

const AboutMe = () => {
  return (
    <div className='h-[50vh] grid grid-cols-1 md:grid-cols-2 bg-[#222831]'>
      <div className="content flex items-center justify-center flex-col text-white p-4 gap-4 relative">
      <h1 className='text-xl sm:text-3xl md:text-6xl'>About<span className='text-cyan-400'>me</span></h1>
      <p className='text-sm sm:text-base md:text-md w-[50%] text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea.</p>
      <img src={music} alt="music icon" className='h-[5vh] md:h-[7vh] absolute top-0 md:left-[13rem] left-0'/>
      <img src={lightbulb} alt="light bulb" className='h-[5vh] md:h-[7vh] absolute md:right-20 md:top-20 right-0 bottom-0'/>
      </div>
      <div className="image flex items-center justify-center">
        <img src={AboutImage} alt="About me Image" className='h-[15vh] md:h-[40vh] '/>
      </div>
    </div>
  )
}

export default AboutMe