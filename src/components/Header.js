import React from 'react'
import { useState } from 'react'
import Navbar from './header_section/Navbar'
import Herosection from './header_section/Herosection'
function Header() {
  return (

    <div>
        <Navbar/>
        <Herosection/>
    </div>
  )
}

export default Header