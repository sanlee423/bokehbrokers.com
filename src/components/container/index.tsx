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
  pageContainer: {
    overflow: 'hidden',
  },
}));

export const Container: React.FC = ({children}) => {
  const classes = useStyles(campediaTheme);
  const {width, height} = useWindowSize();

  React.useEffect(() => {
    if (document !== null) {
      const contentContainer = document.getElementById(
        'page-content-container',
      );

      if (width < 700) {
        if (contentContainer) {
          contentContainer.style.width = `${width}px`;
          contentContainer.style.height = `${height * 0.89}px`;
          contentContainer.style.overflowY = 'auto';
        }
      } else {
        if (contentContainer) {
          contentContainer.style.width = `${width}px`;
          contentContainer.style.height = `${height * 0.84}px`;
          contentContainer.style.overflowY = 'auto';
        }
      }
    }
  }, [width, height]);

  return (
    <div className={classes.mainContainer}>
      <Header />
      <MainNav />
      <div id={'page-content-container'}>{children}</div>
      <Footer />
    </div>
  );
};
