import React from 'react'

const Nav = () => {
  return (
    <nav className='h-[10vh] w-[100vw] bg-[#222831] text-white flex justify-around items-center'>
        <h1 className='text-xl sm:text-2xl md:text-3xl'>Sujan</h1>
        <div className="links">
            <ul className='flex justify-evenly w-[100%] items-center gap-6 text-lg sm:text-xl md:text-xl'>
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav