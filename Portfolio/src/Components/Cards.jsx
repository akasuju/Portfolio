import React from 'react'

const Cards = ({src}) => {
  return (
    <div className='h-[15vh] w-[60%] justify-self-center md:h-[30vh] md:w-[30%] custom-bg flex items-center justify-center rounded-sm relative'>
        <img src={src} className='h-[50%] w-[50%] md:h-[80%] md:w-[80%] '/>
    </div>
  )
}

export default Cards