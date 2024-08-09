import React from 'react'
import style from "./experience.module.css"
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
  // Experience Content Box
    <section className={style.experience} id="experience" >
        <h4>What skills I have</h4>
        <h1>My Experience</h1>
          <div className={style.experience_box}>
    {/* Fornt Content Box */}
            <div className={style.fronted_developer_box}>
              <div className={style.tech_side}>
                <h2>Fornt End</h2>
              </div>
              <div className={style.tech_div}>
              <div className={style.fronted_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>HTML</h2></div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div>
              <div className={style.fronted_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>CSS</h2> </div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div >
              <div className={style.fronted_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>JavaScript</h2></div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div>
              <div className={style.fronted_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>React</h2></div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div>
              </div>
            </div>
      {/* Backend Content Box */}
            <div className={style.backend_developer_box}>
              <div className={style.tech_side}>
                <h2>Back-end</h2>
              </div>
              <div className={style.tech_div}>
              <div className={style.backend_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>Python</h2></div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div>
              <div className={style.backend_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>Django</h2></div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div>
              <div className={style.backend_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>MySQL</h2></div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div>
              <div className={style.backend_box}>
                <div><PiSealCheckFill /></div>
                <div><h2>Java</h2></div>
                <div className={style.font_medium_box}><h5>Experienced</h5></div>
              </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Experience