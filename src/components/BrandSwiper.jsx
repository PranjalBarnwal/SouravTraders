import React, { useRef, useState } from "react";
import granite from "./../assets/cards/granite.jpg";
import cpvc from "./../assets/cards/cpvc.jpg";
import mirror from "./../assets/cards/mirror.jpg";
import pipes from "./../assets/cards/pipes.jpg";
import tap from "./../assets/cards/tap.jpg";
import tiles from "./../assets/cards/tiles.jpg";
import toilet from "./../assets/cards/toilet.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";


import "./BrandSwiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function BrandSwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
      //  loop={"true"}
      >
        <SwiperSlide>
          <Card img={granite} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={cpvc} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={mirror} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={pipes} />
        </SwiperSlide>

        <SwiperSlide>
          <Card img={tap} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={tiles} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={toilet} />
        </SwiperSlide>
         
       
       
       
      </Swiper>
    </>
  );
}
