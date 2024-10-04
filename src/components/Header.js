import React from 'react'
import { useState } from 'react'
import Navbar from './header_section/Navbar'
import HeroSection from './header_section/Herosection'
function Header() {
  return (

    <div>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Header