import React from "react";
import ProductSection from "./Hero/Productsection";
import shapeBackground from "./Hero/images/shape/shape-12.svg"; // Importing the image





const HeroSection = () => {
  return (
    <section className=" z-0 relative xl:h-[90%] px-5 md:px-2 flex first-line:overflow-hidden bg-[#D1E9F6] ">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full  z-10"
          style={{ backgroundImage: `url(${shapeBackground})` }} // Using imported image as background
        />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="z-10 text-white flex flex-col w-full relative md:top-20 md:w-1/2 top-24 text-center md:text-left">
          <div className="w-[75%] h-[75%] m-auto md:mr-0 flex flex-col gap-4">
            <h1 className="text-5xl sm:text-4xl md:text-5xl text-blue-700 font-bold font-serif text-center md:text-left w-full m-0">
              Welcome to <br />
              <span className="gradient-text">VerSai</span>
            </h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-xl font-semibold text-[#304463] w-[75%] m-auto md:m-0 text-center md:text-left">
              Unlock New Achievements and Kickstart Your Digital Transformation
              with{" "}
              <span className="text--[#7D8ABC] font-bold block ">
                Versai Tech Solutions{" "}
              </span>
            </p>

            <button
              className="px-5 m-auto md:mx-0 sm:px-6 py-2 sm:py-3 mt-3 sm:mt-5 rounded-3xl bg-[#769bff] w-40"
              
            >
              Explore
            </button>
          </div>
        </div>

        {/* Displaying another image */}
        <div className="w-full md:w-1/2 -mt-6 sm:mt-2 md:mt-0">
          <ProductSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
