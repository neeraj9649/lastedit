import React from 'react'
import Navdata from './Navdata'

function Navdetails() {
  return (
    <>
        {Navdata.map(value=>(
          <div>
            <div className='px-3 text-left md:cursor-pointer'>
              <h1 className='text-white'>
                {value.menu}
              </h1>
              <h1 className='md:hidden text-black'>
                {value.menu}
              </h1>
            </div>
          </div>
        ))}
    </>
  )
}

export default Navdetails