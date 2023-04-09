import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

function FaqQA({ text, index, title }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div
                onClick={() => setIsOpen(state => !state)}
                className={` ${isOpen ? ' block border-l-[#fca80f] border-l-2' : ' border-l'}   max-w-7xl border-l w-full cursor-pointer  flex  mx-auto items-center justify-between`}>
                <div className=' flex  items-center'>
                    <h1 className={`m-4 mx-8 font-serif text-xl ${isOpen && 'text-[#fca80f]'}`}>
                        {index + 1}
                    </h1>
                    <p className={`${isOpen ? 'text-[#fca80f]' : ' text-gray-700'} text-sm`}>
                        {title}
                    </p>
                </div>
                <div className=' text-xl text-gray-500 relative'>
                    {isOpen ? <BiMinus /> : <BsPlus />}
                </div>
            </div>

            <div
                className={`ease-in duration-300  ${isOpen ? ' border-l-[#fca80f] border-l-2' : ' hidden'} border-l w-full cursor-pointer  flex  mx-auto items-center justify-between`}>
                <h1 className=' ml-16 m-4'>

                    {
                        text
                    }
                </h1>
            </div>




        </div>
    )
}

export default FaqQA