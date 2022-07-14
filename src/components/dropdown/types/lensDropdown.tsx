import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import {CameraIndoor, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const lensDropDown: DropdownProps = {
  menuObj: [
    {
      title: 'View All',
      leftIcon: <ListItemIcon />,
      link: '/lens',
    },
    {
      title: 'By Mount',
      leftIcon: <PhotoCamera />,
      link: '/lens/mount',
    },
    {
      title: 'By Brand',
      leftIcon: <CameraIndoor />,
      link: '/lens/brand',
    },
    {
      title: 'Digital',
      leftIcon: <CameraRoll />,
      link: '/lens/digital',
    },
    {
      title: 'Analog',
      leftIcon: <CameraRoll />,
      link: '/lens/analog',
    },
  ],
  subMenuObj: [],
};
