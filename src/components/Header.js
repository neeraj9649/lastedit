import React from "react";
import { useState } from "react";
import Navbar from "./header_section/Navbar";
import HeroSection from "./header_section/Herosection";
import Mainsection from "./Main";
import Footer from "./Footer";
function Header() {
  return (
    <div >
      <HeroSection />
      <Mainsection />
    </div>
  );
}

export default Header;
