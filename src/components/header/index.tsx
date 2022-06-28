import React from 'react';
import {Hamburger} from '@/components/hamburger';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {Logo} from '../logo';
import useWindowSize from '@/utils/windowDimensions';

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
  const {width} = useWindowSize();

  return (
    <div className={classes.headerContainer}>
      <Logo />
      {width < 670 && <Hamburger />}
    </div>
  );
};
