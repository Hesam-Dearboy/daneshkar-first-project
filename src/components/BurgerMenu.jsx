import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

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


function BurgerMenu({ setIsOpenMenu }) {
  return (
    <div

      className='  fixed top-0 z-30 bottom-0 left-0 right-0  bg-[#000005be]'
    >
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          setIsOpenMenu(false);
        }}
        className=' flex justify-end'>
        <motion.div
          key='menu-sidebar'
          initial={{ x: '150%', opacity: 0 }}
          animate={{ opacity: 1, x: '0', transition: { type: 'spring', stiffness: 300, damping: 40, duration: .4 } }
          }
          exit={{ x: '150%', transition: { duration: .3 } }}
          className=' flex flex-col bg-[#1f1945]  py-8  h-screen w-[250px] '
        >
          <div className=' w-full flex items-center justify-end'>
            <XMarkIcon onClick={() => setIsOpenMenu(false)} className=' h-8 mx-4 cursor-pointer text-[#bfb9f3]' />
          </div>
          <button className='  duration-150 flex  justify-center mt-4 mx-4 ease-in  items-center rounded-full text-lg px-10 py-2 bg-[#c5c4fc] hover:bg-[#afaef8] text-white'>
            <p>Buy now</p>
            <ChevronRightIcon className=' ml-2 h-4 ' />
          </button>
          <div className=' mt-6 border-t-[0.5px] text-[#bfb9f3] text-lg  border-[#bfb9f3]'>
            {headerList.map(item => (
              <Link to={item.link} key={item.text} >
                <div  className=' py-3 px-3  cursor-pointer border-b border-[#bfb9f3]'  >
                  <h1 className=' text-' >
                    {item.text}
                  </h1>
                </div>
              </Link>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default BurgerMenu