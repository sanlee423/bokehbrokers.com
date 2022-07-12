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
  imageUrls?: string[];
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
        {props.imageUrls &&
          props.imageUrls.map((imageUrl, i) => {
            return (
              <SwiperSlide key={`Image ${i}`}>
                <img alt={`Image ${i}`} src={imageUrl} />
              </SwiperSlide>
            );
          })}
      </SwiperFC>
    </>
  );
}
