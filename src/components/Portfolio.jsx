import React from 'react'
import style from "./portfolio.module.css"
import PORTFOLIO_01 from "./My_Document/image/portfolio_01.webp"
import PORTFOLIO_02 from "./My_Document/image/portfolio_02.jpg"
import PORTFOLIO_03 from "./My_Document/image/portfolio_03.jpg"
import PORTFOLIO_04 from "./My_Document/image/portfolio_04.jpg"
import PORTFOLIO_05 from "./My_Document/image/portfolio_05.png"
import PORTFOLIO_06 from "./My_Document/image/portfolio_06.jpg"


const Portfolio = () => {
  return (
    <section className={style.portfolio} >
      <h4>Get To Know</h4>
      <h1>About Project</h1>
        <div className={style.portfolio_box}>
          <div className={style.portfolio_content_box}>
            <div className={style.portfolio_img_box}>
              <img src={PORTFOLIO_01} className={style.img} alt="" />
            </div>
            <div className={style.button_box}>
              <button id={style.btn_01}><a href="https://github.com/Vishnuprakashv/1-Django_project">Github</a></button>
            </div>
          </div>
          <div className={style.portfolio_content_box}>
            <div  className={style.portfolio_img_box}>
              <img src={PORTFOLIO_02} className={style.img} alt="" />
            </div>
            <div className={style.button_box}>
              <button id={style.btn_01}><a href="https://github.com/Vishnuprakashv/1-Data_Analysis_project">Github</a></button>
              
            </div>
          </div>
          <div className={style.portfolio_content_box}>
            <div  className={style.portfolio_img_box}>
              <img src={PORTFOLIO_03} className={style.img} alt="" />
            </div>
            <div className={style.button_box}>
              <button id={style.btn_01}><a href="https://github.com/Vishnuprakashv/1-PowerBi_project">Github</a></button>
              
            </div>
          </div>
          <div className={style.portfolio_content_box}>
            <div  className={style.portfolio_img_box}>
              <img src={PORTFOLIO_04} className={style.img} alt="" />
            </div>
            <div className={style.button_box}>
              <button id={style.btn_01}><a href="https://github.com/Vishnuprakashv/2-Data_Analysis_project">Github</a></button>
              
            </div>
          </div>
          <div className={style.portfolio_content_box}>
             <div  className={style.portfolio_img_box}>
              <img src={PORTFOLIO_05} className={style.img} alt="" />
             </div>
             <div className={style.button_box}>
              <button id={style.btn_01}><a href="https://github.com/Vishnuprakashv/2-PowerBi_project">Github</a></button>
              
             </div>
          </div>
          <div className={style.portfolio_content_box}>
            <div  className={style.portfolio_img_box}>
              <img className={style.img} src={PORTFOLIO_06} alt="" />
            </div>
            <div className={style.button_box}>
              <button id={style.btn_01}><a href="https://github.com/Vishnuprakashv/1-Data_Science-and-Machine_learning">Git Hub</a></button>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default Portfolio