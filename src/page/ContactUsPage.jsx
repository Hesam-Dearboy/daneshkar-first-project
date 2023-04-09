import React, { useEffect } from 'react'
import YellowButton from '../components/YellowButton'
import { AiFillTwitterCircle, AiFillFacebook, AiFillSkype } from 'react-icons/ai'
function ContactUsPage() {
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
              <YellowButton type='CONTACT US' />
            </div>
            <h1

              className=' mt-4 text-4xl md:text-4xl lg:text-7xl font-semibold    text-[#473288]'>
              Feel free to <br /> contact us
            </h1>

          </div>

          <div>
            <img className=' md:w-[480px] lg:w-[510px] ' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-contact-pic1.png' />
          </div>


        </div>
      </section>

      {/* Our Office Section */}

      <section className="bg-fit py-20 md:py-40  md:mt-0 flex w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg8.png')" }}>
        <div className=' mx-auto md:flex gap-5  max-w-7xl '>

          <div className=' gap-5 md:gap-10 grid md:grid-cols-2'>

            <h1
              className=' col-span-1 md:col-span-2 my-16 text-4xl md:text-4xl lg:text-7xl font-semibold    text-[#473288]'>
              Our office
            </h1>

            <div className=' flex  gap-8 items-start'>
              <img src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-contact-icon1.png' />
              <p className=' max-w-[200px]'>
                Level 13, 2 Elizabeth St,
                Melbourne, Victoria 3000,
                Australia
              </p>
            </div>


            <div className=' flex  gap-8 items-start'>
              <img src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-contact-icon2.png' />
              <div className=' max-w-[250px]'>
                <p>
                  Fax: +61 (0) 383 766 284
                </p>
                <p>
                  Phone: +61 (0) 383 766 284
                </p>
              </div>

            </div>


            <div className=' ml-20 max-w-[200px]'>
              Monday — Friday
              09:00 AM — 06:00 PM
            </div>

            <div className=' flex  gap-8 items-start'>
              <img src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-contact-icon3.png' />
              <p className=' max-w-[200px]'>
                noreply@envato.coma
              </p>
            </div>
          </div>
          <div className=' md:ml-10 grid md:grid-cols-1'>
            <h1
              className=' mt-16  text-4xl  md:text-4xl lg:text-7xl font-semibold    text-[#473288]'>
              Find us on
            </h1>

            <div className=' flex mt-10  text-[#fca80f] items-start gap-4 text-4xl'>
              <AiFillTwitterCircle className=' cursor-pointer hover:opacity-80' />
              <AiFillFacebook className=' cursor-pointer hover:opacity-80' />
              <AiFillSkype className=' cursor-pointer hover:opacity-80' />

            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-fit pb-20 md:pb-40  px-8 md:mt-0 flex w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg8.png')" }}>

        <div className=' mx-auto  w-full  max-w-7xl'>
          <div className=' bg-[#41348e]  flex  md:grid md:grid-cols-2 flex-col items-center rounded-3xl px-8 py-5 md:p-[70px]'>
            <h1
              className=' mt-4  md:col-span-2 text-center text-3xl md:text-3xl lg:text-5xl font-semibold   text-[#fca80f]'>
              Contact form
            </h1>

            <input
              placeholder='your name'
              className=' md:mr-8 py-2 text-white bg-[#5047a0] mt-8 outline-none px-4'
            />
            <input
              placeholder='your e-mail'
              className=' bg-[#5047a0] text-white py-2 mt-8 outline-none px-4'
            />
            <input
              placeholder=' Subject'
              className=' bg-[#5047a0] text-white py-2 md:col-span-2 mt-8 outline-none px-4'
            />
            <textarea
              placeholder='Message'
              className=' md:col-span-2 py-2 text-white bg-[#5047a0] mt-8 outline-none px-4'
            />
            <div className=' md:col-span-2  flex  justify-center items-center'>
              <button
                className='  mr-4 mt-8 mb-4 bg-[#fca80f] py-1 px-10 w-fit rounded-full text-white'>
                Send message
              </button>
            </div>


          </div>
        </div>

      </section>
    </div>
  )
}

export default ContactUsPage