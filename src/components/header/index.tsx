import React from 'react';
import {makeStyles} from '@mui/styles';
import {Logo} from './logo';
import useWindowSize from '@/utils/windowDimensions';
import {campediaTheme} from '@/utils/campediaTheme';
import {Hamburger} from '../dropdown/mobile/hamburger';

const useStyles = makeStyles(theme => ({
  //bg-white flex flex-row justify-between items-center
  headerContainer: {
    cursor: 'pointer',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const {width} = useWindowSize();

  return (
    <div className={classes.headerContainer}>
      <Logo />
      {width < 700 && <Hamburger />}
    </div>
  );
};
