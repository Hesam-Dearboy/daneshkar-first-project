import React, { useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from './components/Footer'
import AboutUsPage from './page/AboutUsPage'
import ServicesPage from './page/ServicesPage'
import FaqPage from './page/FaqPage'
import ContactUsPage from './page/ContactUsPage'


function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className=' w-full'>
      <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <AnimatePresence>
      <motion.div
        animate={isOpenMenu ? { x: -100, transition: { duration: .4 } } : { x: 0, transition: { duration: .4 } }}
        key='all-routes'
      >
        <Routes>
          <Route path='' element={<HomePage isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />} />
          <Route path='about-us/' element={<AboutUsPage />} />
          <Route path='services/' element={<ServicesPage />} />
          <Route path='faq/' element={<FaqPage />} />
          <Route path='contact-us/' element={<ContactUsPage />} />
        </Routes>
      </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App