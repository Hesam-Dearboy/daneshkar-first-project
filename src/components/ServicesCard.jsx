import React from 'react'

function ServicesCard({image , title , text}) {
    return (
        <div className=' px-10 py-16 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center'>
            <img src={image} />
            <h1
                className='  mt-6 text-2xl  font-semibold   text-[#473288]'>
                {title}
            </h1>
            <p className=' text-[#222228] mt-4'>
                {text}
            </p>
        </div>
    )
}

export default ServicesCard