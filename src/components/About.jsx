import React from 'react';
import style from "./about.module.css";
import { useState } from 'react';
import { FaAward } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import APP_IMG from "./My_Document/image/Puran_img_icon.jpg"

const About = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
{/* About Content Box */}
      <section className={style.about} id="about" >
        <div>
          <h4 >Get To Know</h4>
          <h1>About me</h1>
        </div>
        
        <div className={style.about_box}>
          <div className={style.about_image_box}>
            <img src={APP_IMG} id={style.img_app} alt="" />
          </div>
        <div className={style.experience_project_paragraph_talk_box}>
            
            <div className={style.experience_project_box}>
              <div className={style.experience_box}>
                <div><h1><FaAward /></h1></div>
                <div>Experience</div>
                <div>Fresher</div>
              </div>
              <div className={style.project_box}>
                <div><h1><MdCreateNewFolder /></h1></div>
                <div>Projects</div>
                <div>5+ completed</div>
              </div>
            </div>
            <div className={style.paragraph_box}>
              <div className={style.paragraph_content_box}>
              <p>
              I'm a recent graduate with 8 months of Python development
              experience, excelling in Django, Flask, ReactJS, and data analysis. 
              I am detail-oriented and eager to contribute innovative ideas to the team.</p>
              </div>
            </div>
            <div className={style.talk_box}>
              <button onClick={showPopup} id={style.btn}>Read more</button>
            </div>
          </div>
          
        </div>
      </section>
{/* ... Popup Content Box ... */}
      {popupVisible && (
        <div className={style.popup}>
          <div className={style.popup_content}>
            <h3>Background and Expertise :</h3>
            <p>With a solid foundation in FullStack Developer, I specialize in Frontend Technologies like HTML, CSS, JavaScript. Over the years, I have honed my abilities in Python Programming Language, I have created a project based on Python.. </p>
            <h3>Passion and Motivation :</h3>
            <p>What motivates me each day is the opportunity to become a good Software Engineer. Whether it's a good impact on our organization, I find fulfillment in when my work is done then I am full happy.</p>
            <h3>Let's Connect :</h3>
            <p>I am always open to connecting with fellow professionals, sharing experiences, and exploring potential collaborations. If you'd like to discuss technologies and any project related, please feel free to reach out to me. Let's build a mutually beneficial professional relationship!
            </p>
            <span className={style.close} onClick={closePopup}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
