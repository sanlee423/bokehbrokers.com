import React from 'react';
import {makeStyles} from '@mui/styles';
import {Navbar, NavbarLeft, NavItemIcon, NavItemText} from './navbar';
import SettingsIcon from '@mui/icons-material/Settings';
import {DropdownMenu} from './dropDownMenu';
import {brandDropdown} from './types/brandDropdown';
import {cameraDropdown} from './types/cameraDropdown';
import {lensDropDown} from './types/lensDropdown';
import {filmDropDown} from './types/filmDropdown';
import {settingsDropdown} from './types/settingsDropdown';
import useWindowSize from '@/utils/windowDimensions';
import {campediaTheme} from '@/utils/campediaTheme';

const useStyles = makeStyles(theme => ({
  mainNav: {
    display: 'flex',
    justifyContent: 'center',
    verticalAlign: 'center',
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
  },
}));

const MainNav: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const {height, width} = useWindowSize();

  //Handle Dimensions -- Due to issue with mobile web
  React.useEffect(() => {
    if (document !== null) {
      const desktopNavbar = document.getElementById('desktop-navbar');

      if (width > 700) {
        if (desktopNavbar) {
          desktopNavbar.style.width = `${width}px`;
          desktopNavbar.style.height = `${height * 0.05}px`;
        }
      } else {
        if (desktopNavbar) {
          desktopNavbar.style.display = 'none';
        }
      }
    }
  }, [width, height]);

  return (
    <div className={classes.mainNav} id={'desktop-navbar'}>
      {width > 700 && (
        <nav className="navbar">
          <NavbarLeft>
            <NavItemText text={'Brands'}>
              <DropdownMenu
                dropdown={brandDropdown}
                isLeft={true}></DropdownMenu>
            </NavItemText>
            <NavItemText text={'Cameras'}>
              <DropdownMenu
                dropdown={cameraDropdown}
                isLeft={true}></DropdownMenu>
            </NavItemText>
            <NavItemText text={'Lens'}>
              <DropdownMenu
                dropdown={lensDropDown}
                isLeft={true}></DropdownMenu>
            </NavItemText>
            <NavItemText text={'Film'}>
              <DropdownMenu
                dropdown={filmDropDown}
                isLeft={true}></DropdownMenu>
            </NavItemText>
          </NavbarLeft>
          {/* <Navbar> ---- TODO: Add account and login at a later date
            <NavItemIcon icon={<SettingsIcon />}>
              <DropdownMenu
                dropdown={settingsDropdown}
                isLeft={false}></DropdownMenu>
            </NavItemIcon>
          </Navbar> */}
        </nav>
      )}
    </div>
  );
};

export default MainNav;
