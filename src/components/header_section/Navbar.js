import React from 'react'
import { useState } from 'react'
import Navdata from './Navdata'
import Navdetails from './Navdetails';

function Navbar() {
    //const [data, setdata] = useState(Navdata);
  return (
    <nav className='w-[100%] h-16 bg-inherit flex justify-between items-center p-4'>
      <div className='text-4xl font-bold text-white'>
        logo
      </div>
      <div className='flex'>
        <ul className='flex gap-4 '>
          {Navdata.map((value)=>{
            return(<Navdetails key={value.id} {...value}/>)
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar