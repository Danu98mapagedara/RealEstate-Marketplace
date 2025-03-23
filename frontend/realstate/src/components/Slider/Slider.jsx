
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate,Link,useParams } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./slider.css"; 
import land  from "../../constants/land";


const Slider = () => {

    const navigate=useNavigate();

    const handleNavigate = (id) => {
        navigate(`/land/${id}`);
      };
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop: 3 slides
          768: { slidesPerView: 1 }, // Tablet: 2 slides
          480: { slidesPerView: 1 }, // Mobile: 1 slide
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="custom-swiper"
      >
        {land.map((land, index) => (
            console.log(land),
          <SwiperSlide key={index} className="swiper-slide">


            <div
              className="slide-content"
              style={{
                backgroundImage: `url(${land.image})`
              }}
            >
              <button onClick={() => handleNavigate(land.id)}>
              <div className="overlay">
                <h2>{land.location}</h2>
                <h3>{land.title}</h3>
                <p>{land.price}</p>
               
            
              </div>
              </button>
            
            </div>
          
          </SwiperSlide>
        ))}
      </Swiper>
  
    </div>
  );
};

export default Slider;
