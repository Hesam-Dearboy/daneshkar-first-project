import React, { useEffect } from 'react'
import YellowButton from '../components/YellowButton'
import FaqQA from '../components/FaqQ&A'
import FaqStepsBox from '../components/FaqStepsBox'
import { useNavigate } from 'react-router-dom'


const QAndAList = [
  {
    title: 'Dapibus risus ante sodales lectus blandit?',
    text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
  },
  {
    title: 'Gravida vitae, dapibus risus ante sodales lectus?',
    text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
  },
  {
    title: 'Lorem ipsum primis in nibh vel risus?',
    text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
  },
  {
    title: 'Nullam viverra consectetuer?',
    text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
  },
  {
    title: 'Quisque cursus et, porttitor risus?',
    text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
  },
  {
    title: 'Dapibus risus ante sodales lectus blandit?',
    text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
  },
]



function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to (0, 0) on component mount
  }, []);
  const navigate  = useNavigate()
  return (
    <div>

      {/* Banner Section */}
      <section className="bg-fit mt-16  md:mt-0 flex w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg8.png')" }}>
        <div className=' flex w-full max-w-7xl mx-auto px-8 md:pl-40 md:flex-row md:items-center flex-col mt-20  md:mt-40 md:justify-between relative'>
          <div>
            <div

            >
              <YellowButton type='FAQ' />
            </div>
            <h1

              className=' mt-4 text-4xl md:text-4xl lg:text-7xl font-semibold    text-[#473288]'>
              Frequently <br /> Asked <br /> Questions
            </h1>

          </div>

          <div>
            <img className=' md:w-[480px] lg:w-[600px] ' src='https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-faq-pic1.png' />
          </div>


        </div>
      </section>


      {/* Q & A Section */}

      <section className="bg-fit mt-16  md:mt-0 flex flex-col w-full   bg-no-repeat h-full  " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg1.png')" }}>
        <div className=' flex w-full max-w-7xl mx-auto  px-8   flex-col mt-20  md:mt-40  relative'>
          {
            QAndAList.map((item, index) => (
              <FaqQA text={item.text} index={index} title={item.title} />
            ))
          }

        </div>

        <div className=' max-w-7xl  mx-8 xl:mx-auto  mt-20'>
          <FaqStepsBox />
        </div>

      </section>



      {/* Our Work section  */}

      <section

        className="bg-fit pb-32  px-4  mx-auto  md:pb-40   items-center justify-center bg-no-repeat h-full " style={{ backgroundImage: "url('https://themes.muffingroup.com/be/seo3/wp-content/uploads/2019/08/seo3-sectionbg4.png')" }}
      >
        <div className=' flex w-full max-w-7xl mx-auto px-8 pt-20 md:p-40  md:flex-row md:items-center flex-col md:justify-between relative'>
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

export default FaqPage