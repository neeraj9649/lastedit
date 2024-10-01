import React from 'react'
import { useState } from 'react'
import Navdata from './Navdata'
import logo from './logo.png'
import Navdetails from './Navdetails';

function Navbar() {
    const [open, setopen] = useState(false);
  return (
    <nav className='bg-white'>
      <div className='flex justify-between items-center gap-4 p-4'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
          <img src={logo} className='h-9 md:cursor-pointer'></img>
          <div className='md:hidden text-3xl' onClick={()=>(setopen(!open))}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className='md:flex hidden items-center gap-7 uppercase'>
          <Navdetails/>
        <div className='flex gap-4'>
          <button>phone</button>
          <button>Apply for internship</button>
        </div>
        </ul>
        {/* mobile menu */}
        <ul className=
        {`md:hidden absolute bg-white w-full h-full bottom-0 left-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
          <Navdetails/>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar