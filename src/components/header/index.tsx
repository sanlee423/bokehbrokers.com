import React, {useEffect, useState} from 'react';

import {Logo} from '@/components';
import {Hamburger} from '@/components/hamburger';
import getWindowDimensions from '@/utils/windowDimensions';
import {CircularProgress} from '@mui/material';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';

const useStyles = makeStyles(theme => ({
  //bg-white flex flex-row justify-between items-center
  headerContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles(cpTheme);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 700,
    height: -1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions()!);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classes.headerContainer}>
      <Logo />
      {windowDimensions ? (
        windowDimensions.width < 670 && <Hamburger />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
