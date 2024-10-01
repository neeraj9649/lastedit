import React from 'react'
import Navdata from './Navdata'

function Navdetails() {
  return (
    <>
        {Navdata.map(value=>(
          <div>
            <div className='px-3 text-left md:cursor-pointer'>
              <h1 className='py-7'>
                {value.menu}
              </h1>
              {value.content && 
                <div>
                  <div>
                    <div>
                      <div>{value.title}</div>
                      <div>
                        <img src={value.src}></img>
                      </div>
                    </div>
                    {/* <div>
                      {value.submenu.map(submen=>(<div>{submen.map(sublink=>(<div>{sublink.name}</div>))}</div>))}
                    </div> */}
                  </div>
                </div>}
            </div>
          </div>
        ))}
    </>
  )
}

export default Navdetails