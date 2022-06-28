import React from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {Navbar, NavbarLeft, NavItemIcon, NavItemText} from '../navbar';
import SettingsIcon from '@mui/icons-material/Settings';
import {DropdownMenu} from '../dropdown/dropDownMenu';
import {brandDropdown} from '../dropdown/types/brandDropdown';
import {cameraDropdown} from '../dropdown/types/cameraDropdown';
import {lensDropDown} from '../dropdown/types/lensDropdown';
import {filmDropDown} from '../dropdown/types/filmDropdown';
import {settingsDropdown} from '../dropdown/types/settingsDropdown';
import useWindowSize from '@/utils/windowDimensions';

const useStyles = makeStyles(theme => ({
  mainNav: {
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
  },
}));

const Main: React.FC = () => {
  const classes = useStyles(cpTheme);
  const {width} = useWindowSize();

  return (
    <div className={classes.mainNav}>
      {width > 670 && (
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
            <NavItemText text={'Lenses'}>
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
          <Navbar>
            <NavItemIcon icon={<SettingsIcon />}>
              <DropdownMenu
                dropdown={settingsDropdown}
                isLeft={false}></DropdownMenu>
            </NavItemIcon>
          </Navbar>
        </nav>
      )}
    </div>
  );
};

export default Main;
