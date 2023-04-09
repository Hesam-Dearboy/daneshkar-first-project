import React from 'react'
import YellowButton from '../components/YellowButton'
import ServicesCard from '../components/ServicesCard'
import { useNavigate } from 'react-router-dom'



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
  {
    image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon7.png',
    title: 'Sales optimization',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
  },
  {
    image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon8.png',
    title: 'Friendly URL',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
  },
  {
    image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon9.png',
    title: 'Startups',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
  },
  {
    image: 'https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-icon10.png',
    title: 'Wireframes',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, unde iure dolorem totam suscipit magnam consequatur pariatur labore culpa.'
  },
]

function ServicesPage() {
  const navigate = useNavigate()
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-fit mt-16  md:mt-0 flex w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg8.png')" }}>
        <div className=' flex w-full max-w-7xl mx-auto px-8 md:pl-40 md:flex-row md:items-center flex-col mt-20  md:mt-40 md:justify-between relative'>
          <div>
            <div

            >
              <YellowButton type='SERVICES' />
            </div>
            <h1

              className=' mt-4 text-4xl md:text-4xl lg:text-7xl font-semibold    text-[#473288]'>
              A wide range<br />
              of services
            </h1>

          </div>

          <div>
            <img className=' md:w-[480px] lg:w-[600px] ' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-services-pic1.png' />
          </div>


        </div>
      </section>


      {/* Services Section */}

      <section
        className="bg-fit pb-32  px-4  mx-auto  md:pb-40   items-center justify-center bg-no-repeat h-full " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg3.png')" }}
      >
        <div className=' flex max-w-5xl mx-auto flex-col w-full justify-center items-center '>
          <h1
            className='  mt-6 text-3xl self-start md:text-5xl  font-semibold   text-[#473288]'>
            Nunc id tellus finibus
          </h1>
          <div className=' flex mt-10 flex-col md:flex-row items-center w-full justify-between '>
            <p className=' max-w-2xl text-sm md:text-base '>
              Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante.
            </p>

            <button
              onClick={() => navigate('/faq')}
              className=' mr-4 mt-8 mb-4 self-end bg-[#7b66ef] py-3 px-10 w-fit rounded-full text-white'>
              FAQ
            </button>
          </div>
        </div>

        <div className=' mx-auto space-x-0 md:space-x-4  space-y-8 mt-8 max-w-5xl grid grid-cols-1 md:grid-cols-2'>
          {servicesCard.map((service, index) => (
            <ServicesCard image={service.image} title={service.title} text={service.text} />
          ))}
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
    </div>
  )
}

export default ServicesPage