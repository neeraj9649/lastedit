import React, { useState } from 'react'
import Navdata from './Navdata'
import {Link} from 'react-dom'


function Navdetails() {
  const[open ,setopen]= useState('')
  const[sublinks, setsublinks] = useState('')
  return (
    <>
        {Navdata.map(value=>(
          <div className=''>
            <div className=' px-3 text-left md:cursor-pointer group flex flex-col-reverse md:py-7 py-2 cursor-pointer'>
              <h1 className=' font-semibold  md:hover:text-green-950 px-5 uppercase   ' 
              onClick={()=>{
                
                  open === value.menu ? setopen('') : 
                setopen(value.menu)
                
              }}>

                {value.menu}
                
              {/* <div className=' w-full hover:scale-x-100 h-2 bg-black'></div> */}
              </h1>
                     
              {value.content && 
                <div>
                  <div className='absolute top-[58px] bg-white duration-500 hidden group-hover:md:block hover:md:block w-full left-0'>
                  <div className='md:grid hidden grid-rows-1 grid-cols-2' >
                    <div className='flex flex-col py-5 items-center gap-5'>
                      <div className='font-semibold text-xl border-b-2 flex gap-1  '>{value.title}<div className='text-lg pt-1'><ion-icon name="chevron-forward-circle"></ion-icon></div> </div>
                      <div>
                        <img src={value.src} className='w-[250px] h-[80px] rounded-md'></img>
                      </div>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-2 gap-8 justify-center  px-7 py-5'>
                      
                        {
                          value.submenu.map((sub)=>(
                            <div className='flex flex-col gap-2'>
                              {sub.subtitle && <h1 className='font-semibold border-b-2 ' >{sub.title}</h1>}
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
                <div className='md:hidden flex flex-col justify-between items-start px-5 pb-6 gap-6 font-semibold uppercase'>
                <button className='uppercase'>About Us</button>
                <button className='uppercase'>Contact Us</button>
                </div>
            </div>
            {/* moblie menus */}
            
            <div className={`
              ${open === value.menu ? 'md:hidden' : 'hidden'}
              `}>
              {value.submenu.map(subl=>(
                <div>
                  <div>
                    <h1 className=' py-2 pl-12 font-semibold md:pr-0  pr-5 cursor-pointer' onClick={()=>sublinks === subl.title ? setsublinks('') : setsublinks(subl.title)}>{subl.title}</h1>
                  </div>
                  <div className={`${sublinks ===  subl.title? 'md:hidden' : 'hidden'}`}>
                    {subl.sublinks.map(names=>(
                      <li className='py-2 pl-16 cursor-pointer'>
                        {names.name}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='md:hidden py-5 pl-8 text-md font-semibold uppercase md:pr-0 pr-5'>Carrier</div>
          </div>
        ))}
    </>
  )
}

export default Navdetails