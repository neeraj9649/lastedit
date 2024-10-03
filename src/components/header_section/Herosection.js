import React from 'react';
import ProductSection from './Hero/Productsection';
import shapeBackground from './Hero/images/shape/shape-12.svg'; // Importing the image

const HeroSection = () => {
    return (
        <div className="z-0 relative  px-5 md:px-2 flex min-h-screen overflow-y-auto bg-gradient-to-r from-[#554ff5] to-[#f6ad78]">
            {/* Background image */}
            <div className="absolute inset-0 opacity-5">
                <div 
                    className="w-full h-full z-10" 
                    style={{ backgroundImage: `url(${shapeBackground})` }} // Using imported image as background
                />
            </div>
            
            {/* Content */}
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="z-10 mt-20 ms-3 sm:mt-24 sm:ms-5 md:ms-20 text-white w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold font-serif">Welcome to <br></br> VerSai</h1>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-xl font-semibold text-green-950">Discover amazing things with us</p>
                    <button className="px-5 sm:px-6 py-2 sm:py-3 mt-3 sm:mt-5 rounded-3xl bg-[#ff7688] w-40">Explore</button>
                </div>

                {/* Displaying another image */}
                <div className="w-full md:w-1/2 -mt-6 sm:mt-10 md:mt-0">
                    <ProductSection />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
