import {navSkeleton} from '@/utils/navSkeleton';
import getWindowDimensions from '@/utils/windowDimensions';
import {CircularProgress} from '@mui/material';
import React, {useEffect, useState} from 'react';
import PopoverMenu from './menu';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';

const useStyles = makeStyles(theme => ({
  //"container mx-auto flex flex-row justify-evenly"
  popoverContainer: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  popoverSpacer: {
    height: '2.25rem',
  },
}));

const Popover: React.FC = () => {
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
    <div className={`${classes.popoverContainer} container`}>
      {windowDimensions ? (
        windowDimensions.width > 670 ? (
          navSkeleton.map(navItem => {
            return <PopoverMenu key={Object.keys(navItem)[0]} data={navItem} />;
          })
        ) : (
          <div className={classes.popoverSpacer}> </div>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Popover;
