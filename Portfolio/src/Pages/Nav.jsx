import React from 'react'

const Nav = () => {
  return (
    <div>
        <h1 className='h-[10vh] w-[100vw] bg-[#222831] text-white justify-around item center'>Sujan</h1>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            <ul className='links'>
                <li><a href="Home"></a></li>
                <li><a href="About Me"></a></li>
                <li><a href="Contact"></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav