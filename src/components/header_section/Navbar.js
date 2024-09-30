import React from 'react'
import { useState } from 'react'
// import Navdata from './Navdata'

import Navdetails from './Navdetails';

function Navbar() {
    const [open, setopen] = useState(false);
  return (
    <nav className=' bg-black'>
      <div  className=' flex justify-around items-center gap-4'>
        <div className=' text-4xl font-bold text-white text-center'>
          logo
        </div>
        <div className={`md:hidden flex justify-between p-0 px-7 z-50 w-full text-start text-4xl font-bold text-black`}>
          logo
          <div onClick={()=> setopen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        
        
        
        <ul className='md:flex hidden items-center justify-around gap-8 uppercase'>
            <Navdetails/>
        </ul>
        <div className='md:flex hidden gap-7 justify-between items-center'>
          <button className='w-12 h-12 text-white text-xl bg-red-500 rounded-full p-1'>Ph</button>
          <button className='w-[200px] p-2 text-white text-xl bg-blue-500 rounded-lg'>Apply for Internship</button>
        </div>
        {/* mobile menu */}
        
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-10' : 'left-[100%]'}`}>
            <Navdetails/>
            
        </ul>

        
      </div>
    </nav>
  )
}

export default Navbar