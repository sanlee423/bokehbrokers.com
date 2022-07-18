import React from 'react';
// Import Swiper React components
import {Swiper as SwiperFC, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Pagination, Navigation} from 'swiper';
import {campediaTheme} from './campediaTheme';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  swiperSlide: {
    padding: '10%',
  },
}));

interface swiperProps {
  styleName: string;
  imageUrls?: string[];
}

export default function Swiper(props: swiperProps) {
  const classes = useStyles(campediaTheme);

  return (
    <>
      <SwiperFC
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Pagination]}
        className={props.styleName}>
        {props.imageUrls &&
          props.imageUrls.map((imageUrl, i) => {
            return (
              <SwiperSlide className={classes.swiperSlide} key={`Image ${i}`}>
                <img alt={`Image ${i}`} src={imageUrl} />
              </SwiperSlide>
            );
          })}
      </SwiperFC>
    </>
  );
}
