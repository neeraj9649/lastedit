import React from 'react'
import { useState } from 'react'
import Navdata from './Navdata'
import logo from './logo1.png'
import Navdetails from './Navdetails';

function Navbar() {
    const [open, setopen] = useState(false);
  return (
    <nav className='bg-white border-b-black border-b-2 border-opacity-35 z-100'>
      <div className='flex h-14  justify-between items-center gap-4 px-6'>
        <div className=' z-50 px-5 py-4 md:w-auto w-full flex justify-between items-center '>
          <img src={logo} className='h-24 md:cursor-pointer'></img>
          <div className='md:hidden text-4xl' onClick={()=>(setopen(!open))}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className='md:flex hidden items-center gap-7 '>
          <h1 className='font-semibold cursor-pointer hover:text-green-950 uppercase z-50'>Home</h1>
          <Navdetails/>
          <div className='md:flex hidden gap-4 items-center'>
                <button className='text-2xl w-11 h-[41px] bg-green-950 rounded-full text-center pt-1 text-white '><ion-icon name="call"></ion-icon></button>
                <button className='px-4 h-10 bg-blue-700 hover:bg-blue-600 duration-200 text-white text-md font-semibold rounded-2xl'>Contact Us</button>
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