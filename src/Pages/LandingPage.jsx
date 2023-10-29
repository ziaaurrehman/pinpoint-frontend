import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import HowUse from '../Components/HowUse'
import Features from '../Components/Features'
import Fans from '../Components/Fans'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import GoToTop from '../Components/GoToTop'
const LandingPage = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <About/>
    <HowUse/>
    <Features/>
    <Fans/>
    <ContactUs/>
    <Footer/>
    <GoToTop/>
    </div>
  )
}

export default LandingPage