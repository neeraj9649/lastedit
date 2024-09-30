import React from 'react'
import { useState } from 'react'
import Navbar from './header_section/Navbar'
import Herosection from './header_section/Herosection'
function Header() {
  return (

    <div className='m-0 p-0 w-[100vw] h-[100vh]'>
        <Navbar/>
        <Herosection/>
    </div>
  )
}

export default Header