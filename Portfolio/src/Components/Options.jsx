import React from 'react'

const Options = ({name}) => {
  return (
    <button className=' text-white bg-gray-600 rounded-full p-1 px-4 hover:bg-cyan-400 hover:cursor-pointer'>
        {name}
    </button>
  )
}

export default Options