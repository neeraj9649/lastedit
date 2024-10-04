import React, { useEffect, useRef } from "react";
import './ProductSection.css'; // Custom CSS for styling, including gradients.

const ProductSection = () => {
 
  const productContainerRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Clean up on component unmount
  }, []);

  const startAutoScroll = () => {
    const productContainer = productContainerRef.current;
    if (!productContainer) return;

    scrollInterval.current = setInterval(() => {
      productContainer.scrollLeft += 1; // Adjust scroll speed if needed
      if (productContainer.scrollLeft >= productContainer.scrollWidth / 2) {
        productContainer.scrollLeft = 0; // Reset scroll to create a loop
      }
    }, 9); // Adjust interval speed for smoothness
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  const products = [
    { id: 1, name:"Mobile Application Development", img: require("./images/card1.png"), gradient: 'card-gradient-1' },
    { id: 2, name:"Website Development", img: require("./images/card2.png"), gradient: 'card-gradient-2' }, 
    { id: 3, name:"Digital Marketing", img: require("./images/card4.png"), gradient: 'card-gradient-4' },
    { id: 4, name:"Startup Solutions", img: require("./images/card5.png"), gradient: 'card-gradient-5' },
    { id: 5, name:"Software Development", img: require("./images/card6.png"), gradient: 'card-gradient-6' },
    
  ];

  return (
    <section className="product text-white py-5 mt-32">
      <h2 className="font-serif text-2xl font-semibold pb-2 capitalize text-center md:text-left px-5 ">
        Transforming your
      </h2>
      <h2 className=" text-2xl font-serif text-green-950 font-semibold mb-10 capitalize text-center md:text-left px-5" >
        Idea of Growth into Reality
      </h2>
      <div className="relative">
        <div
          className="product-container flex overflow-x-scroll hide-scrollbar px-10"
          ref={productContainerRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {[...products, ...products].map((product, index) => (
            <div
              key={index}
              className={`product-card flex-shrink-0 w-48 h-72 mr-8 ${product.gradient}`}
            >
              <div className="product-image pt-2 px-2 rounded-3xl relative h-full overflow-hidden">
                <img
                  src={product.img}
                  alt={`Product ${product.id}`}
                  
                />
              </div>
                <h1 className=" text-left pl-5 text-black font-semibold text-lg">{product.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
