import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import './ReviewInfo.css';


const ReviewInfo = ({review}) => {
  const {img, name, description, ratings} = review;
  return (
    <section className='user-review h-96'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={
          {
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }
        }
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ReviewInfo;