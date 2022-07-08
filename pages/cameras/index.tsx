import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {Footer} from '@/components/footer';
import useSWR from 'swr';
import {CameraResponse} from 'pages/api/cameras';
import {Paper, Typography} from '@mui/material';
import Swiper from '@/components/swiper';

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  itemContainer: {
    padding: '5%',
  },
  cameraItem: {
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '3%',
    width: 'auto',
    margin: '5%',
    '& > *': {
      marginRight: '5%',
    },

    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    '&:hover': {
      filter: 'brightness(105%)',
      backgroundColor: '#393a3b',
      transition: '300ms ease',

      '& $cameraText': {
        color: 'white',
      },
    },
  },
  cameraText: {},
  swiperContainer: {
    width: '10vw',
  },
  swiper: {
    '.swiper-button-next': {
      height: '10px',
    },
  },
  descriptionBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '14vw',
    padding: '1%',
  },
  priceBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '10vw',
    padding: '1%',
  },
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

function getFormattedDate(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}

const Brands: React.FC = () => {
  const classes = useStyles(cpTheme);
  const [cameras, setCameras] = useState<CameraResponse | undefined>();
  const {data} = useSWR(`/api/cameras/`, fetcher);

  useEffect(() => {
    setCameras(data);
  }, [setCameras, data]);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.itemContainer}>
        {cameras &&
          cameras.map(camera => {
            return (
              <Paper key={camera.alt} className={classes.cameraItem}>
                <div className={classes.swiperContainer}>
                  <Swiper styleName={classes.swiper} />
                </div>
                <div className={classes.descriptionBox}>
                  <Typography className={classes.cameraText} variant="h6">
                    {camera.name}
                  </Typography>
                  <Typography className={classes.cameraText} variant="body2">
                    Release Date: {getFormattedDate(camera.releaseDate)}
                  </Typography>
                </div>
                <div className={classes.priceBox}>
                  <Typography className={classes.cameraText} variant="h6">
                    $1666
                  </Typography>
                </div>
              </Paper>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
