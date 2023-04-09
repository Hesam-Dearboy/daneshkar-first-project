import React from 'react'
import YellowButton from './YellowButton'
import {
    AiFillFacebook,
    AiFillSkype,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoIosArrowUp } from 'react-icons/io'



function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
    };
    return (
        <div>
            {/* Join us Section */}

            <section
                className="bg-fit   px-4  mx-auto pt-[300px]     items-center justify-center bg-no-repeat h-full " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg6.jpg')" }}
            >

                <div className=' max-w-2xl mx-auto flex flex-col items-center  '>
                    <YellowButton type='JOIN US' />
                    <h1
                        className=' mt-8 text-4xl md:text-4xl lg:text-6xl font-semibold  text-white'>
                        Newsletter
                    </h1>

                    <input
                        placeholder='Your e-mail'
                        className=' mt-10 text-white py-2 bg-[#5047a0] focus:border-0 focus:outline-0 px-4 w-full'
                    />

                    <button
                        className=' mr-4 mt-8 mb-4 bg-[#fca80f] py-2 px-10 w-fit rounded-full text-white'>
                        Sign up
                    </button>

                </div>

            </section>

            <footer className=' bg-[#372b7d]'>

                <div className=' max-w-4xl mx-auto justify-between gap-20 px-6 flex-col flex md:flex-row md:items-center py-20' >
                    <div className=' text-white'>
                        Level 13, 2 Elizabeth St,<br />
                        Melbourne, Victoria 3000,<br />
                        Australia
                    </div>
                    <div className=' flex flex-col items-center text-white'>
                        <div>
                            Monday - Friday: 8am - 6pm
                        </div>
                        <div className=' flex gap-4 mt-4 text-2xl '>
                            <div className=' hover:text-[#fca80f] cursor-pointer'>
                                <AiOutlineTwitter />
                            </div>
                            <div className='hover:text-[#fca80f] cursor-pointer'>
                                <AiFillFacebook />
                            </div>
                            <div className='hover:text-[#fca80f] cursor-pointer'>
                                <AiFillSkype />

                            </div>
                        </div>
                    </div>
                    <div className=' flex self-end flex-col items-center text-white'>
                        <div className=' flex items-center '>
                            <FaMobileAlt className=' mr-3 text-2xl text-[#7b66ef]' />
                            <h1>
                                +61 (0) 383 766 284
                            </h1>
                        </div>

                        <div className=' mt-4 flex items-center '>
                            <MdEmail className=' mr-3 text-2xl text-[#7b66ef]' />
                            <h1>
                                noreply@envato.com
                            </h1>
                        </div>
                    </div>
                </div>

                <div className=' border-t py-4 px-2  mx-auto text-white '>
                    <div className=' max-w-5xl flex md:flex-row flex-col items-center justify-between mx-auto'>
                        <h1 className=' text-xs md:text-base'>
                            © 2021 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
                        </h1>
                        <IoIosArrowUp onClick={scrollToTop} className=' cursor-pointer text-2xl text-[#7b66ef] ' />
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer