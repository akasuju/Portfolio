import React from 'react'
import Cards from '../Components/Cards'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import Options from '../Components/Options'


const Works = () => {
  return (
    <div className='h-[70vh] md:h-[80vh] flex items-center justify-center gap-6 flex-col bg-custom'>
        <div className="heading text-white">
            <h1 className='text-xl sm:text-3xl md:text-5xl '> My Recent <span className='text-cyan-400'>works</span></h1>
        </div>
        <div className="options flex gap-4">
            <Options name={"All"}/>
            <Options name={"UI"}/>
            <Options name={"UX"}/>
            <Options name={"Web Design"}/>
        </div>
        <div className="cards grid grid-cols-1 gap-4 md:flex md:justify-around h-[60%] w-[100%] md:items-center">
            <Cards src={card1}/>
            <Cards src={card2}/>
            <Cards src={card3}/>
        </div>
    </div>
  )
}

export default Works