import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CameraIndoor, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const settingsDropdown: DropdownProps = {
  menuObj: [
    {
      title: 'Account',
      leftIcon: <ListItemIcon />,
      link: '/settings/account',
    },
    {
      title: 'Favorites',
      leftIcon: <CameraRoll />,
      rightIcon: <KeyboardArrowRightIcon />,
      link: '/settings/favorites',
    },
    {
      title: 'Privacy Policy & Terms',
      leftIcon: <CameraIndoor />,
      rightIcon: <KeyboardArrowRightIcon />,
      link: '/settings/privacy',
    },
    {
      title: 'Log Out',
      leftIcon: <PhotoCamera />,
      rightIcon: <KeyboardArrowRightIcon />,
      link: '/settings/logout',
    },
  ],
  subMenuObj: [],
};
