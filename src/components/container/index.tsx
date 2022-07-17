import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';
import {makeStyles} from '@mui/styles';
import React, {useEffect, useState} from 'react';
import MainNav from '../dropdown/mainNav';
import {Footer} from '../footer';
import {Header} from '../header';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  pageContainer: {
    overflowY: 'scroll',
  },
  webHeight: {
    height: '82vh',
  },
  mobileHeight: {
    height: '87vh',
  },
}));

export const Container: React.FC = ({children}) => {
  const classes = useStyles(campediaTheme);
  const {width} = useWindowSize();

  return (
    <div className={classes.mainContainer}>
      <Header />
      <MainNav />
      <div
        className={`${classes.pageContainer} ${
          width > 700 ? classes.webHeight : classes.mobileHeight
        }`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
