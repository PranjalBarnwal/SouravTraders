import React, { useRef, useState } from "react";
import granite from "./../assets/cards/granite.jpg";
import cpvc from "./../assets/cards/cpvc.jpg";
import mirror from "./../assets/cards/mirror.jpg";
import pipes from "./../assets/cards/pipes.jpg";
import tap from "./../assets/cards/tap.jpg";
import tiles from "./../assets/cards/tiles.jpg";
import toilet from "./../assets/cards/toilet.jpg";
import urinal from "./../assets/cards/urinal.jpg";
import Card from "./Card";
import "./BrandSwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function BrandSwiper() {
  return (
    <div className="container-swiper">
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        loop={"true"}
      >
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
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          loop={"true"}
        >
          <SwiperSlide>
            <img src={granite} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={cpvc} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={mirror} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tiles} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={urinal} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tap} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pipes} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toilet} />
          </SwiperSlide>
        </Swiper>
      </Swiper>
    </div>
  );
}
