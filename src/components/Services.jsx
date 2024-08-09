import React from 'react'
import style from "./services.module.css"
import { FaRegSquareCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section className={style.services} id="services">
        <h4> </h4>
        <h1>Contact for Services!</h1>
        <div className={style.services_box}>
    {/* 3D Creativity Content Box */}
            <div className={style.creativity_box}>
                <h2 className={style.all_box}>Data Analysis</h2>
                <div className={style.multiline_box}>
                <div className={style.list_box}>
                    <div className={style.multiline_01}>
                        <FaRegSquareCheck />
                        <p>Prepare data for accuracy.</p>
                    </div>
                    <div className={style.multiline_01} >
                        <FaRegSquareCheck />
                        <p>Create engaging, clear visuals.</p>
                    </div>
                    <div className={style.multiline_01}>
                        <FaRegSquareCheck />
                        <p>Analyze patterns and trends.</p>
                    </div>
                    <div className={style.multiline_01}>
                        <FaRegSquareCheck />
                        <p>Extract Insightful Intelligence</p>
                    </div>
                </div>
                </div>
            </div>
    {/*Blender Content Box  */}
            <div className={style.blender_box}>
                <h2 className={style.all_box}>Power BI Dashboard</h2>
                <div className={style.multiline_box}>
                <div className={style.list_box}>
                    <div className={style.multiline_01}>
                        <FaRegSquareCheck />
                        <p>Dynamic Data Visualizations.</p>
                    </div>
                    <div className={style.multiline_01}>
                        <FaRegSquareCheck />
                        <p>Seamless data source integration.</p>
                    </div>
                    <div className={style.multiline_01}>
                        <FaRegSquareCheck />
                        <p>Real-time analytics and reporting.</p>
                    </div>
                    <div className={style.multiline_01}>
                        <FaRegSquareCheck />
                        <p>Advanced AI-driven insights.</p>
                    </div>
                </div>
                </div>
            </div>
    {/* Web Development Content Box */}
            <div className={style.web_box}>
                <h2 className={style.all_box}>Web Development</h2>
                <div className={style.multiline_box} >
                    <div className={style.list_box}>
                        <div className={style.multiline_01}>
                            <FaRegSquareCheck />
                            <p>Basic static site development.</p>
                        </div>
                        <div className={style.multiline_01}>
                            <FaRegSquareCheck />
                            <p>Robust backend with Django.</p>
                        </div>
                        <div className={style.multiline_01}>
                            <FaRegSquareCheck />
                            <p>Dynamic frontend using React.</p>
                        </div>
                        <div className={style.multiline_01}>
                            <FaRegSquareCheck />
                            <p>Responsive, feature-rich design.</p>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>

    </section>
  )
}

export default Services