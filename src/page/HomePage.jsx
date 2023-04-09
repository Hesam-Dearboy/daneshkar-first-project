import React, { useEffect, useState } from 'react'
import YellowButton from '../components/YellowButton'
import { motion } from 'framer-motion'
import FeaturesCard from '../components/FeaturesCard'
import AboutUsCounter from '../components/AboutUsCounter'
import ServicesCard from '../components/ServicesCard'
import OurClientsCard from '../components/OurClientsCard'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const featuresCard = [
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-home-icon1.png',
        title: 'Great experience',
        desceription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus!'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-home-icon2.png',
        title: 'Effective strategy',
        desceription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus!'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-home-icon3.png',
        title: ' Powerfull tools',
        desceription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus!'
    },
]

const servicesCard = [
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon1.png',
        title: 'Design & Layout',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon2.png',
        title: 'Digital Marketing',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon3.png',
        title: 'Google Ads',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon4.png',
        title: 'Social Media Marketing',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon5.png',
        title: 'Marketing Analysis ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon6.png',
        title: 'Content Marketing',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
    },
]

const ourClientCard = [
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-client1-145x75.png'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-client2-145x75.png'
    },

    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-client3-145x75.png'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-client4-145x75.png'
    },
    {
        image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-client5-145x75.png'
    },
]
function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Set scroll position to (0, 0) on component mount
      }, []);
    const navigate = useNavigate()
    return (
        <div
            className=''>
            {/* Banner Section */}
            <section className="bg-fit mt-16  md:mt-0 flex w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg8.png')" }}>
                <div className=' flex w-full px-8 md:pl-40 md:flex-row md:items-center flex-col mt-20  md:mt-40 md:justify-between relative'>
                    <div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
                            viewport={{ once: true }}
                        >
                            <YellowButton type='Welcome to BESEO' />
                        </motion.div>
                        <motion.h1
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .6 } }}
                            viewport={{ once: true }}
                            className=' mt-4 text-4xl md:text-4xl lg:text-6xl font-semibold   text-[#473288]'>
                            We can make your <br />
                            business visible
                        </motion.h1>
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .7 } }}
                            viewport={{ once: true }}
                            className=' mt-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Nostrum explicabo nisi vel necessitatibus eaque alias.
                        </motion.p>

                        <motion.button
                            onClick={() => navigate('/about-us')}
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .9 } }}
                            viewport={{ once: true }}
                            className=' mr-4 mt-8 mb-4 bg-[#7b66ef] py-2 px-5 w-fit rounded-full text-white'>
                            Read more
                        </motion.button>
                        <motion.button
                            onClick={() => navigate('/contact-us')}
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .9 } }}
                            viewport={{ once: true }}
                            className=' mt-8 mb-4 bg-[#c5c4fc] py-2 px-5 w-fit rounded-full text-white'>
                            Contact us
                        </motion.button>
                    </div>

                    <div>
                        <img src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-home-pic2.png' />
                    </div>


                </div>

            </section>

            {/* Features Section */}
            <section
                className="bg-fit py-32   mx-auto  md:py-60  flex felx-col items-center justify-center bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg8.png')" }}
            >
                <div className=' max-w-5xl '>
                    <div className=' flex flex-col w-full justify-center items-center '>
                        <YellowButton type='FEATURES' />
                        <h1
                            className=' mt-6 text-4xl md:text-4xl lg:text-6xl font-semibold   text-[#473288]'>
                            Our core Features
                        </h1>
                        <p className=' text-center text-sm mx-5 mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi explicabo velit repudiandae, itaque rerum quia commodi natus, in consequuntur omnis voluptatem accusantium iure nostrum perferendis quis veritatis fugit minima neque!
                        </p>
                    </div>
                    <div className=' flex mt-8 flex-col space-y-8 md:space-x-10 md:flex-row w-full justify-center items-center '>
                        {
                            featuresCard.map((card, index) => (
                                <FeaturesCard description={card.desceription} title={card.title} image={card.image} />
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* About us Section */}

            <section
                className="bg-fit pb-32   mx-auto  md:pb-60  bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg2.png')" }}
            >

                <div className=' flex flex-col md:flex-row  items-center space-x-6 justify-between max-w-5xl mx-auto '>
                    <img className=' md:w-[480px] lg:w-[600px] ' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-about-pic1.png' />
                    <div>
                        <div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
                            viewport={{ once: true }}
                        >
                            <YellowButton type='About us' />
                        </div>
                        <h1
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .6 } }}
                            viewport={{ once: true }}
                            className=' mt-4 text-4xl md:text-4xl lg:text-6xl font-semibold   text-[#473288]'>
                            About our <br className=' md:block hidden' />
                            agency
                        </h1>
                        <p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .7 } }}
                            viewport={{ once: true }}
                            className=' mt-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Nostrum explicabo nisi vel necessitatibus eaque alias.
                        </p>

                        <button
                            onClick={() => navigate('/about-us')}
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: .9 } }}
                            viewport={{ once: true }}
                            className=' mr-4 mt-8 mb-4 bg-[#7b66ef] py-2 px-5 w-fit rounded-full text-white'>
                            About us
                        </button>

                    </div>
                </div>

                <div

                    className=' mt-20 px-8'>

                    <AboutUsCounter />

                </div>


            </section>


            {/* Services Section */}

            <section
                className="bg-fit pb-32  px-4  mx-auto  md:pb-40   items-center justify-center bg-no-repeat h-full " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg3.png')" }}
            >
                <div className=' flex flex-col w-full justify-center items-center '>
                    <YellowButton type='SERVICES' />
                    <h1
                        className='  mt-6 text-3xl md:text-4xl lg:text-6xl font-semibold   text-[#473288]'>
                        What we can do for you ?
                    </h1>
                </div>

                <div className=' mx-auto space-x-0 md:space-x-4  space-y-8 mt-8 max-w-5xl grid grid-cols-1 md:grid-cols-2'>
                    {servicesCard.map((service, index) => (
                        <ServicesCard image={service.image} title={service.title} text={service.text} />
                    ))}
                </div>

                <div className=' mx-auto w-full flex items-center justify-center'>
                    <button
                        onClick={() => navigate('/services')}
                        className=' mr-4 mt-8 mb-4 bg-[#7b66ef] py-4 px-8 w-fit rounded-full text-white'>
                        Read more
                    </button>
                </div>

            </section>

            {/* Our Work section  */}

            <section

                className="bg-fit pb-32  px-4  mx-auto  md:pb-40   items-center justify-center bg-no-repeat h-full " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg4.png')" }}
            >
                <div className=' flex w-full max-w-5xl mx-auto px-8  md:flex-row md:items-center flex-col md:justify-between relative'>
                    <div>
                        <div>
                            <YellowButton type='OUR WORK' />
                        </div>
                        <h1
                            className=' mt-4 text-4xl md:text-4xl lg:text-6xl font-semibold   text-[#473288]'>
                            Why Customers <br />
                            loves us ?
                        </h1>
                        <p
                            className=' mt-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Nostrum explicabo nisi vel necessitatibus eaque alias.
                        </p>

                        <div className=' flex relative mt-4 space-x-4 items-center'>
                            <div>
                                <img src="https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-home-icon4.png" />
                            </div>
                            <p className=' text-[#473288] text-lg font-semibold'>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                        <div className=' flex relative mt-4 space-x-4 items-center'>
                            <div>
                                <img src="https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-home-icon5.png" />
                            </div>
                            <p className=' text-[#473288] text-lg font-semibold'>
                                Lorem, ipsum dolor.
                            </p>
                        </div>



                        <button
                            onClick={() => navigate('/about-us')}
                            className=' mr-4 mt-8 mb-4 bg-[#7b66ef] py-3 px-10 w-fit rounded-full text-white'>
                            About us
                        </button>

                    </div>

                    <div>
                        <img className=' md:w-[480px] lg:w-[600px] ' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-home-pic2.png' />
                    </div>


                </div>

            </section>

            {/* Our Client Section */}

            <section
                className="bg-fit   px-4  mx-auto     items-center justify-center bg-no-repeat h-full " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg5.png')" }}
            >

                <div className=' max-w-5xl mx-auto flex flex-col items-center  '>

                    <h1
                        className=' mt-4 text-4xl md:text-4xl lg:text-6xl font-semibold   text-[#473288]'>
                        Our clients
                    </h1>

                    <div className=' grid mt-8 gap-y-8 grid-cols-2 md:flex md:items-center'>
                        {
                            ourClientCard.map((client, index) => (
                                <OurClientsCard key={index} image={client.image} />
                            ))
                        }
                    </div>

                </div>



            </section>





        </div>
    )
}

export default HomePage