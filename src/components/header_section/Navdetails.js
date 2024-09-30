import React from 'react'

function Navdetails({name, title, src, data}) {
  return (
    <div>
        <a href='#' className='group text-xl text-white'>
          {name}
          <div className='scale-x-0 group-hover:scale-x-100 duration-300 h-2 bg-white '></div>
          </a>
        {/* <h3 className='text-xl text-white'>{name}</h3> */}
        
        
        <div>
          <div>
            <p>{title}</p>
            <img src={src}></img>
          </div>
          <div>
            <ul>
              <li>{data.name}</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navdetails