import React from 'react'
import style from "./testimonials.module.css"
import Avtar_01 from "./My_Document/image/Avtar_01.jpg"
import Avtar_02 from "./My_Document/image/Avtar_01.jpg"
import Avtar_03 from "./My_Document/image/Kapin_patel.jpg"
import Avtar_04 from "./My_Document/image/Avtar_01.jpg"
import Avtar_05 from "./My_Document/image/Manish_image.jpg"
import Avtar_06 from "./My_Document/image/Avtar_01.jpg"

import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
 let testimonials=[
  {Avtar:Avtar_01,
    name:"Vansh",
    lorem:""
  },
  {Avtar:Avtar_02,
    name:"Navneet",
    lorem:""
  },
  {Avtar:Avtar_03,
    name:"Kapin",
   
    lorem:""
  },
  {Avtar:Avtar_04,
    name:"Bhaskar",
    lorem:""
  },
  {Avtar:Avtar_05,
    name:"Manish",
    lorem:""
  },
  {Avtar:Avtar_06,
    name:"Uttam",
    lorem:""
  }
  
 ]
    
  return (
    <section className={style.testimonials}>
       <h4>Get To Know</h4>
        <h1>Project Overview</h1>
      <Swiper className={style.testimonials_box} modules={[ Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {testimonials.map(({name,Avtar,lorem},index)=>{
          return(
            <SwiperSlide key={index}  className={style.testimonials_content_box}>
              
              <img src={Avtar} id={style.testimonials_img}  alt="" />
              <br />
              
              <h1>{name}</h1>
              <p>{lorem}</p>
              
            </SwiperSlide>   
          )
        })}
          
      </Swiper>
    </section>
  )
}

export default Testimonials