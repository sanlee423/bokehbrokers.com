import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';
import {Theme} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React from 'react';
import MainNav from '../dropdown/mainNav';
import {Footer} from '../footer';
import {Header} from '../header';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
}));

export const Container: React.FC = ({children}) => {
  const classes = useStyles(campediaTheme);

  return (
    <div className={classes.mainContainer}>
      <Header />
      <MainNav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
