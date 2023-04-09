import React from 'react'

function FeaturesCard({image , title , description}) {
    return (
        <div className=' max-w-xs flex flex-col items-center'>
            <img src={image} />
            <h1
                className=' mt-8 text-2xl md:text-3xl  font-semibold   text-[#473288]'>
                {title}
            </h1>
            <p className=' text-center mt-5'>
                {description}
            </p>
        </div>
    )
}

export default FeaturesCard