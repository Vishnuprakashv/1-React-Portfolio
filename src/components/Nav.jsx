import React from 'react'
import style from "./nav.module.css"
import { IoHome } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import { AiTwotoneContacts } from "react-icons/ai";
import { useState } from 'react';
// import { Link } from 'react-router-dom';
const Nav = () => {
  const [activeNav,setActiveNav] = useState("#home")
  return (
    <>
    <section className={style.nav}>
    <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''}><IoHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUserCircle /></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><GrUserExpert /></a>
    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine /></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiTwotoneContacts /></a>
  </section>
    
    
    </>
  )
}

export default Nav