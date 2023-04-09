import React, { useState } from 'react'
import { ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/solid'
import BurgerMenu from './BurgerMenu'
import { AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const headerList = [
    {
        text: 'Home',
        link: '',
    },
    {
        text: 'About Us',
        link: 'about-us/',
    },
    {
        text: 'Services',
        link: 'services/',
    },
    {
        text: 'FAQ',
        link: 'faq/',
    },
    {
        text: 'Contact us',
        link: 'contact-us/',
    },
]

function Header({ isOpenMenu, setIsOpenMenu }) {
    const location = useLocation()
    console.log('/' + location.pathname)



    return (
        <div className=' w-full'>
            <div className=' z-20 fixed top-0 left-0 right-0 '>
                <div className=' flex bg-white items-center justify-between p-4 md:py-7  w-full '>
                    <a href='/'>
                        <img className=' h-10 md:h-16' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/retina-seo31.png' />
                    </a>


                    <Bars3Icon onClick={() => setIsOpenMenu(true)} className=' md:hidden text-[#fca80f] h-8' />

                    <div className=' hidden md:flex '>
                        <div className=' flex items-center space-x-8'>
                            {
                                headerList.map((item) => (
                                    <Link to={item.link} key={item.text} className={` ${'/' + item.link === location.pathname  ? 'text-[#7964ef]' : 'text-black'} md:block hover:text-[#7964ef] cursor-pointer hidden text-lg`}>
                                        {item.text}
                                    </Link>
                                ))
                            }
                            <button className='  duration-150 lg:flex hidden ease-in  items-center rounded-full text-lg px-10 py-2 bg-[#c5c4fc] hover:bg-[#afaef8] text-white'>
                                <p>Buy now</p>
                                <ChevronRightIcon className=' ml-2 h-4 ' />
                            </button>
                        </div>



                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpenMenu && <BurgerMenu setIsOpenMenu={setIsOpenMenu} />}
            </AnimatePresence>
        </div>
    )
}

export default Header