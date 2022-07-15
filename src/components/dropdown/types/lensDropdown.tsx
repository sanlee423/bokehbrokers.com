import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import {CameraIndoor, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const lensDropDown: DropdownProps = {
  menuObj: [
    {
      title: 'View All',
      leftIcon: 'A',
      link: '/lens',
    },
    {
      title: 'Prime Lenses',
      leftIcon: 'P',
      link: '/lens/prime',
    },
    {
      title: 'Zoom Lenses',
      leftIcon: 'Z',
      link: '/lens/zoom',
    },
    // {
    //   title: 'By Mount',
    //   leftIcon: <CameraRoll />,
    //   link: '/lens/mount',
    // },
  ],
  subMenuObj: [],
};
