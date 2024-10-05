import React, { useState, useEffect } from "react";
import logo from "./logo1.png";
import Navdetails from "./Navdetails";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  // Function to handle toggle
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle open state
  };

  // Effect to handle body scroll when the menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on component unmount or when the menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="bg-white border-b-black border-b-2 border-opacity-35 fixed w-full top-0 z-50">
      <div className="flex h-20 justify-between items-center gap-4 px-6">
        <div className="z-50 px-5 py-4 md:w-auto w-full flex justify-between items-center ">
          <Link to="/">
            <img
              src={logo}
              className="h-32 pt-2 md:cursor-pointer"
              alt="Logo"
            />
          </Link>
          <div className="md:hidden text-4xl" onClick={handleToggle}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex z-50 hidden items-center gap-4 ">
          <Link
            to="/"
            className="font-semibold cursor-pointer hover:text-green-950 uppercase z-50"
          >
            Home
          </Link>
          <Navdetails resetMenu={open} />
          <div className="md:flex hidden gap-4 items-center">
            <Link
              to="/About-us"
              className="text-md font-semibold mr-6 uppercase"
            >
              About Us
            </Link>
            <Link className="text-md font-semibold mr-6 uppercase">Career</Link>
            <button className="text-2xl w-11 h-[41px] bg-green-950 rounded-full text-center pt-1 text-white ">
              <ion-icon name="call"></ion-icon>
            </button>
            <button className="px-4 h-10 bg-blue-700 hover:bg-blue-600 duration-200 text-white text-md font-semibold rounded-2xl">
              Contact Us
            </button>
          </div>
        </ul>
        {/* mobile menu */}
        <ul
          className={`md:hidden fixed z-40 bg-white w-full h-full left-0 py-24 pl-4 duration-500 ${
            open ? "top-0" : "top-[-100%]"
          }`}
        >
          <Navdetails resetMenu={open} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
