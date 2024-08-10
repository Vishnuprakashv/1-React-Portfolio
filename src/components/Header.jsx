import React, { useEffect } from 'react';
import Typed from 'typed.js';  
import style from "./header.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CV from "./My_Document/pdf/Resume_A.pdf";
import ME from "./My_Document/image/IMG_20230502_090629_922-removebg-preview.png";


const Header = () => {
  
  useEffect(() => {
    const typed = new Typed('#Single-text', {
      strings: ['VISHNU PRAKASH'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 3000,
      loop: true,
    });
    const typed1 = new Typed('#Multiple-text', {
        strings: ['Python Full Stack Developer','Data Analyst','Data Science'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 3000,
        loop: true,
      });

    
    return () => {
      typed.destroy();
      typed1.destroy();
    };
  }, []); 

  return (
    <section className={style.header} id="home">
      <div className={style.header_box}>
        <h4 id={style.header_text_01}>Hello I'm </h4>
        <h1 id={style.header_name}><span id="Single-text"></span></h1>
        <h4 id={style.header_text_02}><span id="Multiple-text"></span></h4>
        <div className={style.button}>
          <div className={style.btn_box_01}><a id={style.btn_01} href={CV} download>Download CV</a></div>
          <div className={style.btn_box_02}><a id={style.btn_02} href="https://api.whatsapp.com/send?phone=7050354791">Let's talk</a></div>
        </div>
        
        <div className={style.anchor_image_scroll_box}>
          <div className={style.anchor_box}>
            <a id={style.linkdin} href="https://www.linkedin.com/in/vishnu-prakash-33b080234" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a id={style.github} href="https://github.com/Vishnuprakashv" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
          <div className={style.img_box}>
            <img id={style.img} src={ME} alt="me" />
          </div>
          <div className={style.scroll_box}>
            <a href="#contact"  className={style.scroll}>scroll down</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
