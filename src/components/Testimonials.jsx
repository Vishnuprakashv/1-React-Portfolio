import React from 'react'
import style from "./testimonials.module.css"
import Avtar from "./My_Document/image/Avtar_01.jpg"

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const Testimonials = () => {
 let testimonials=[
  {Avtar:Avtar,
    name:"Vansh",
    lorem:""
  },
  {Avtar:Avtar,
    name:"Navneet",
    lorem:""
  },
  {Avtar:Avtar,
    name:"Kapin",
   
    lorem:""
  },
  {Avtar:Avtar,
    name:"Bhaskar",
    lorem:""
  },
  {Avtar:Avtar,
    name:"Manish",
    lorem:""
  },
  {Avtar:Avtar,
    name:"Uttam",
    lorem:""
  }
  
 ]
    
  return (
    <section className={style.testimonials}>
       <h4>Get To Know</h4>
        <h1>Our Clients</h1>
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