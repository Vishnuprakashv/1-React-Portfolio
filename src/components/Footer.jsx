import React from 'react'
import style from "./footer.module.css"
import { FaUserCircle } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import { AiTwotoneContacts } from "react-icons/ai";

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={style.footer} >
      <div className={style.footer_box}>
        <div className={style.footer_logo_box}>
            <a href="#about" className={style.footer_logo}>EGATOR</a>
        </div>

        <div className={style.footer_all_content_box}>
          <a href="#about"><FaUserCircle /></a>
          <a href="#experience"><GrUserExpert /></a>
          <a href="#services"><RiServiceLine /></a>
          <a href="#contact"><AiTwotoneContacts /></a>
        </div>
        
        <div className={style.footer_social_media}>
          <a href="https://www.instagram.com/i_vishu_raj/?hl=en"><FaInstagramSquare /></a>
          <a href="https://www.facebook.com/profile.php?id=100035006354006"><FaFacebookSquare /></a>
          <a href="https://api.whatsapp.com/send?phone=7050354791"><FaWhatsappSquare /></a>
        </div>
      </div>
    </section>
  )
}

export default Footer