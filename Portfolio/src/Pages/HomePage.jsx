import React from 'react'
import homeImage from '../assets/home.png'

const HomePage = () => {
  return (
    <div className='h-[calc(100vh-10vh)] w-[100vw] bg-[#222831] grid grid-cols-1 md:grid-cols-2 '>
      <div className="content text-white flex flex-col items-center justify-center gap-4">
        <h1 className='text-left text-xl sm:text-3xl md:text-6xl'>Creative UI</h1>
        <span className='text-left text-xl sm:text-3xl md:text-6xl text-cyan-400'>Designer</span>
        <div className="btns-container flex gap-4">
          <button className='bg-cyan-400 p-2 rounded-full px-6 hover:bg-orange-400 hover:cursor-pointer'>Hire me</button>
          <button className='outline-1 outline-white rounded-full px-6 hover:bg-white hover:outline-black hover:text-black cursor-pointer'><a href={homeImage} download={"Home Image"}>Download CV</a></button>
        </div>
      </div>
      <div className="img flex items-center justify-center">
          <img src={homeImage} alt="Home Image" className='h-[30vh] md:h-[60vh]'/>
      </div>
    </div>
  )
}
export default HomePage