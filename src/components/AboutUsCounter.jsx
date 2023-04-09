import React from 'react'
import ReverseCounter from './Counter'

function AboutUsCounter() {
    return (
        <div className=' rounded-3xl max-w-md space-y-10 md:space-y-0 md:space-x-20  mx-auto py-8  md:max-w-5xl   flex flex-col  md:flex-row items-center justify-center  bg-[#372b7d]'>

            <div className=' flex flex-col  items-center '>
                <ReverseCounter endNum={850} />
                <h3 className=' text-[#fca80f]  text-lg mt-4'>
                    Lorem ipsum
                </h3>
            </div>


            <div className=' flex flex-col   items-center '>
                <ReverseCounter endNum={50} />
                <h3 className=' text-[#fca80f]  text-lg mt-4'>
                    Lorem ipsum
                </h3>
            </div>

            <div className=' flex flex-col items-center '>
                <ReverseCounter endNum={100} />
                <h3 className=' text-[#fca80f]  text-lg mt-4'>
                    Lorem ipsum
                </h3>
            </div>


            <div className=' flex flex-col items-center '>
                <ReverseCounter endNum={450} />
                <h3 className=' text-[#fca80f]  text-lg mt-4'>
                    Lorem ipsum
                </h3>
            </div>
        </div>
    )
}

export default AboutUsCounter