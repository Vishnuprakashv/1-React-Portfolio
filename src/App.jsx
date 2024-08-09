import React from 'react'
import style from "./app.module.css"
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div className={style.body}>
      
        <div className={style.body_box}>
        <Header/>
        <Nav />
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        
        </div>
        
        <div className={style.footer_main_box}>
        <Footer/>
        </div>
    </div>
  )
}

export default App

