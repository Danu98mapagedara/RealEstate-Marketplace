import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate,Link,useParams } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./homeslider.css"; 
import  sliderData from "../../constants/Homeimage";


const Homeslider = () => {
  return (
 <div className="homeslider-container">
  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
             
                 spaceBetween={0}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 autoplay={{ delay: 3000, disableOnInteraction: false }}
         className="custom-swiper"
  >

{sliderData.map((land, index) => (
            console.log(land),
          <SwiperSlide key={index} className="homeswiper-slide">
            <div
              className="homeslide-content"
              style={{
                backgroundImage: `url(${land.image})`
              }}
            >
          
            
            </div>
          
          </SwiperSlide>
            ))}

  </Swiper>
 </div>
  )
}

export default Homeslider