import React from 'react';
import img1 from './icons/app.svg' 
import img2 from './icons/development.svg' 
import img3 from './icons/ecommerce.svg' 
import img4 from './icons/seo.svg' 
import img5 from './icons/tech.svg' 
import img6 from './icons/tech.svg' 

const ServiceCard = ({color, icon, title, description }) => {
  return (
    <div  className={`relative w-60 ${color} p-5 h-48 overflow-hidden rounded-lg shadow-lg cursor-pointer group`}>
      
      <div className=" w-20 h-20 transition-transform  duration-500 ease-in-out transform group-hover:scale-0 group-hover:-translate-y-5">
        <img src={icon} alt={title}/>
      </div>
        <div className="absolute bottom-20 left-0 right-0 bg-opacity-80 p-4 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-20">
          <h3 className="text-xl font-bold mb-4 ">{title}</h3> 
          <p className="text-sm opacity-0 group-hover:opacity-100 duration-700">{description}</p>
          <button className='text-sm font-bold mt-3 cursor-pointer text-blue-900'>Read more &#x27A4;</button>
      </div>
    </div>
  );
};

const CustomDevelopmentFeatures = () => {
  return (
    <section className="py-12 bg-yellow-50 flex flex-col gap-14">
      <div className='flex flex-col items-center gap-6 bg-yellow-50'>
        <div className='flex text-4xl gap-2 uppercase font-bold font-sans flex-wrap  text-center'>
          <h1 className='text-blue-950'>We Transform</h1>
          <h1 className='text-pink-900'>Ideas into Solutions</h1>
        </div>
        <div className='text-center w-[70%] flex flex-col gap-4 text-md text-lg '>
        <p>The primary aim of using a decentralized ledger technology is to eliminate the middle entities and third party from coming into the picture of any digital transaction. Because of this very reason, blockchain is gaining popularity like wildfire.</p>
        <p>Use of blockchain prevents a lot of traditional problems and streamlines every step of digital processes. At the same time, blockchain takes away excessive authority from a single user and enables collective consensus based authority, thereby making the whole system more democratic. However, the best part is the impregnable security that accompanies blockchain.</p>
        <p>At Versai Technology , we find innovative digital solutions to challenging problems. With our knowledge, expertise, experience and cutting-edge tools, we can assist you in removing roadblocks for your company’s growth.</p>
        </div>
      </div>
      <div className=" m-0 px-4 flex  gap-2 justify-center bg-gradient-to-t from-purple-50 to-yellow-50 py-5">
        <div className='w-[35%] flex flex-col gap-4 pl-7 pt-4 pr-4' >
          <h2 className='text-red-900'>INDUSTRIES WE WORK FOR</h2>
          <h1 className="text-4xl font-sans font-bold text-left text-blue-950 mb-6">
          Digital Marketing <br></br>And Services
          </h1>
          <p className='text-md '>
          We design and develop all sorts of Applications and Software for both Web and Mobile. Our expert team is adept to get the most out of your time and resources while maximizing efficiency.
          </p>
        </div>
        <div className="w-[60%] flex flex-wrap gap-5  justify-between ">
          <ServiceCard
            color="bg-sky-100"
            icon={img1}
            title="Mobile Application Development"
            description="Optimize your supply chain operations for efficiency and cost-effectiveness."
          />
          <ServiceCard
            color="bg-indigo-100"
           
            icon={img2}
            title="Website Development"
            description="Leverage the power of blockchain technology to build secure and transparent solutions."
          />
          <ServiceCard
            color="bg-rose-100"
           
            icon={img3}
            title="Ecommerce Solutions"
            description="Build decentralized applications that are secure, transparent, and community-driven."
          />
          <ServiceCard
            color="bg-green-100"
         
            icon={img4}
            title="Search Engine Optimization (SEO)"
            description="Optimize your supply chain operations for efficiency and cost-effectiveness."
          />
          <ServiceCard
            color="bg-orange-100"
          
            icon={img5}
            title="Ads (Social Media)"
            description="Leverage the power of blockchain technology to build secure and transparent solutions."
          />
          <ServiceCard
            color="bg-purple-100"
            
            icon={img6}
            title="Software Development"
            description="Build decentralized applications that are secure, transparent, and community-driven."
          />
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopmentFeatures;
