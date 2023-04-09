import React, { useEffect } from 'react'
import YellowButton from '../components/YellowButton'
import { motion } from 'framer-motion'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import AboutUsCounter from '../components/AboutUsCounter'
import OurClientsCard from '../components/OurClientsCard'


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

function AboutUsPage() {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to (0, 0) on component mount
  }, []);
  return (
    <div>

      {/* Banner Section */}
      <section className="bg-fit mt-16  md:mt-0 flex w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg8.png')" }}>
        <div className=' flex w-full max-w-7xl mx-auto px-8 md:pl-40 md:flex-row md:items-center flex-col mt-20  md:mt-40 md:justify-between relative'>
          <div>
            <div

            >
              <YellowButton type='ABOUT US' />
            </div>
            <h1

              className=' mt-4 text-4xl md:text-4xl lg:text-7xl font-semibold    text-[#473288]'>
              A few words<br />
              about us
            </h1>

          </div>

          <div>
            <img className=' md:w-[480px] lg:w-[600px] ' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-about-pic1.png' />
          </div>


        </div>
      </section>

      {/* Status Section */}
      <section className="bg-fit mt-16 px-6  md:mt-0  w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg1.png')" }}>
        <div className=' flex gap-x-0 md:gap-x-20 max-w-7xl items-start mx-auto flex-col md:flex-row '>
          <div>
            <h1
              className=' mt-4 text-4xl md:text-4xl lg:text-5xl font-semibold    text-[#473288]'>
              Fusce lobortis porttitor
            </h1>
            <p className=' text-sm md:text-base mt-10'>
              Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci.
            </p>
            <p className=' text-sm md:text-base mt-6'>
              Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci fermentum ultricies. Mauris maximus velit commodo, varius ligula vel, consequat est.
            </p>
          </div>

          <div>
            <p className=' mt-4 text-sm md:text-base'>
              Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci fermentum ultricies. Mauris maximus velit commodo, varius ligula vel, consequat est.
            </p>

            <ul className=' mt-5  divide-y gap-3  flex flex-col  items-start'>
              <li className=' gap-1 flex' >
                <IoCheckmarkSharp className=' text-xl ' />
                <p className=' text-gray-500' >
                  Suspendisse a pellentesque dui, non felis.
                </p>
              </li>
              <li className=' gap-1 flex' >
                <IoCheckmarkSharp className='  text-xl ' />
                <p className=' text-gray-500' >
                  Suspendisse a pellentesque dui, non felis.
                </p>
              </li>
              <li className=' gap-1 flex' >
                <IoCheckmarkSharp className=' text-xl ' />
                <p className=' text-gray-500' >
                  Suspendisse a pellentesque dui, non felis.
                </p>
              </li>
              <li className=' gap-1 flex' >
                <IoCheckmarkSharp className=' text-xl ' />
                <p className=' text-gray-500' >
                  Suspendisse a pellentesque dui, non felis.
                </p>
              </li>
            </ul>


            <button
              onClick={() => navigate('/services')}
              className=' mr-4 mt-8 mb-4 bg-[#7b66ef] py-3 px-10 w-fit rounded-full text-white'>
              See all services
            </button>


          </div>

        </div>

        <div className=' my-32'>
          <AboutUsCounter />
        </div>
      </section>


      {/* How to work Section */}

      <section className="bg-fit mt-16 px-10 md:px-32 py-40 md:mt-0  w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg7.jpg')" }}>
        <div className=' py-16 px-12 w-fit max-w-lg  flex flex-col items-center bg-[#41348e] rounded-3xl  '>
          <h1 className='  text-4xl md:text-4xl lg:text-5xl font-semibold  text-[#fca80f]'>
            How to work
          </h1>
          <p className=' text-white mt-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus.
          </p>
          <a target='_blank' href='https://www.youtube.com/watch?v=z0jjTU-H43M'>
            <img className=' self-start mt-6' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-about-icon1.png' />
          </a>
        </div>
      </section>

      {/* Our Clients Section */}
      <section
        className="bg-fit py-36   px-4  mx-auto     items-center justify-center bg-no-repeat h-full " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg5.png')" }}
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

export default AboutUsPage