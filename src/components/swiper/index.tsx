import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper as SwiperFC, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Pagination, Navigation} from 'swiper';

interface swiperProps {
  styleName: string;
}

export default function Swiper(props: swiperProps) {
  return (
    <>
      <SwiperFC
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={props.styleName}>
        <SwiperSlide>
          Slide 1
          {/* <img
            alt={'image1'}
            src={
              'https://static.bhphoto.com/images/multiple_images/images500x500/1336666510_IMG_251946.jpg'
            }
          /> */}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </SwiperFC>
    </>
  );
}
