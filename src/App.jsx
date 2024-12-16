import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import MainVeiw from './components/mainVeiw/MainVeiw.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
// import { useState } from 'react'

export default function App() {
  return (
    <>
    <Navbar />
    <MainVeiw />
    <Portfolio />
    <About />
    <Contact/>
    <Footer />
   
    
    </>
  )
}
