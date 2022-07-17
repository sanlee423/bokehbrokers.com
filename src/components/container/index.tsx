import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';
import {makeStyles} from '@mui/styles';
import React from 'react';
import MainNav from '../dropdown/mainNav';
import {Footer} from '../footer';
import {Header} from '../header';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100vw',
    height: '100%',
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
  const {width, height} = useWindowSize();

  React.useEffect(() => {
    if (document !== null) {
      const contentContainer = document.getElementById(
        'page-content-container',
      );

      if (width < 700) {
        if (contentContainer) {
          contentContainer.style.width = `${width}px`;
          contentContainer.style.height = `${height * 0.87}px`;
          contentContainer.style.overflowY = 'scroll';
        }
      } else {
        if (contentContainer) {
          contentContainer.style.width = `${width}px`;
          contentContainer.style.height = `${height * 0.82}px`;
          contentContainer.style.overflowY = 'scroll';
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
