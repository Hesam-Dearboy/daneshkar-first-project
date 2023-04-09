import React from 'react'

function OurClientsCard({image}) {
  return (
    <div className=' px-8 hover:bg-slate-100 cursor-pointer'>
        <img src={image} /> 
    </div>
  )
}

export default OurClientsCard