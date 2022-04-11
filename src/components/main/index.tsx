import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {
  Navbar,
  NavbarLeft,
  NavItemIcon,
  NavItemText,
} from '../navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import getWindowDimensions from '@/utils/windowDimensions';
import {CircularProgress} from '@mui/material';
import { SettingsDropdown, DropdownMenuLeft } from '../dropdown';

const useStyles = makeStyles(theme => ({
  mainNav: {
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
  },
}));

const Main: React.FC = () => {
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
    <div className={classes.mainNav}>
      {windowDimensions ? (
        windowDimensions.width > 670 && (
          <nav className="navbar">
            <NavbarLeft>
              <NavItemText text={'Brands'}>
                <DropdownMenuLeft></DropdownMenuLeft>
              </NavItemText>
              <NavItemText text={'Cameras'}>
                <DropdownMenuLeft></DropdownMenuLeft>
              </NavItemText>
              <NavItemText text={'Lenses'}>
                <DropdownMenuLeft></DropdownMenuLeft>
              </NavItemText>
              <NavItemText text={'Film'}>
                <DropdownMenuLeft></DropdownMenuLeft>
              </NavItemText>
            </NavbarLeft>
            <Navbar>
              <NavItemIcon icon={<KeyboardArrowDownIcon />}>
                <SettingsDropdown></SettingsDropdown>
              </NavItemIcon>
            </Navbar>
          </nav>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Main;
