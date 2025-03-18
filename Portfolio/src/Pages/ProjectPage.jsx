import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'


const ProjectPage = () => {
  return (
    <div className='h-[80vh] bg-[#222831] flex items-center justify-center gap-6 flex-col'>
        <div className='headings text-white'>
            <h1 className='text-xl '>My Recent <span>Works</span></h1>
        </div>
        <div className='headings'></div>
        <div className='headings'></div>
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
    </div>
  )
}

export default ProjectPage