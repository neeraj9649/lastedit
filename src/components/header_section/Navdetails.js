import React, { useState } from 'react'
import Navdata from './Navdata'


function Navdetails() {
  const[open ,setopen]= useState(false)
  return (
    <>
        {Navdata.map(value=>(
          <div>
            <div className=' px-3 text-left md:cursor-pointer group flex flex-col-reverse '>
              <h1 className='py-7 font-semibold  hover:text-green-950 px-5 uppercase flex gap-2  '>

                {value.menu}
                <div className=''>
                <ion-icon name="chevron-down" className='pt-2'></ion-icon>
                </div>
              {/* <div className=' w-full hover:scale-x-100 h-2 bg-black'></div> */}
              </h1>
             
              {value.content && 
                <div>
                  <div className='absolute top-[58px]  bg-white duration-500 hidden group-hover:block hover:block w-full left-0'>
                  <div className='md:grid hidden grid-rows-1 grid-cols-2' >
                    <div className='flex flex-col py-5 items-center gap-5'>
                      <div className='font-semibold text-xl border-b-2 flex gap-1'>{value.title}<div className='text-lg pt-1'><ion-icon name="chevron-forward-circle"></ion-icon></div> </div>
                      <div>
                        <img src={value.src} className='w-[250px] h-[80px] rounded-md'></img>
                      </div>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-2 gap-8 justify-center  px-7 py-5'>
                      
                        {
                          value.submenu.map((sub)=>(
                            <div className='flex flex-col gap-2'>
                              {sub.subtitle && <h1 className='font-semibold border-b-2'>{sub.title}</h1>}
                              <div className='text-md text-gray-700  flex flex-col gap-1'>
                              {sub.sublinks.map((subname)=>(
                                <li className='hover:text-gray-800'>{subname.name}</li>
                              ))}
                              </div>
                              
                            </div>
                          ))
                        }
                      
                    </div>
                  </div>
                  </div>
                </div>}
              {value.content && 
                <div>
                  <div className='absolute top-[58px]  bg-white duration-500 hidden group-hover:block hover:block w-full left-0'>
                  <div className='md:grid hidden grid-rows-1 grid-cols-2' >
                    <div className='flex flex-col py-5 items-center gap-5'>
                      <div className='font-semibold text-xl border-b-2 flex gap-1'>{value.title}<div className='text-lg pt-1'><ion-icon name="chevron-forward-circle"></ion-icon></div> </div>
                      <div>
                        <img src={value.src} className='w-[250px] h-[80px] rounded-md'></img>
                      </div>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-2 gap-8 justify-center  px-7 py-5'>
                      
                        {
                          value.submenu.map((sub)=>(
                            <div className='flex flex-col gap-2'>
                              {sub.subtitle && <h1 className='font-semibold border-b-2'>{sub.title}</h1>}
                              <div className='text-md text-gray-700  flex flex-col gap-1'>
                              {sub.sublinks.map((subname)=>(
                                <li className='hover:text-gray-800'>{subname.name}</li>
                              ))}
                              </div>
                              
                            </div>
                          ))
                        }
                      
                    </div>
                  </div>
                  </div>
                </div>}
                {/* Mobile button */}
                <div className='md:hidden flex flex-col justify-between items-start px-5  gap-8 font-semibold uppercase'>
                <button className='uppercase'>About Us</button>
                <button className='uppercase'>Contact Us</button>
                </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Navdetails