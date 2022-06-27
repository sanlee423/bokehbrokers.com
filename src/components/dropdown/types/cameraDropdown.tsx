import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CameraIndoor, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const cameraDropdown: DropdownProps = {
  menuObj: [
    {
      title: 'View All',
      leftIcon: <ListItemIcon />,
    },
    {
      title: 'By Brand',
      leftIcon: 'B',
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'cameras',
    },
    {
      title: 'Lens Manufacturers',
      leftIcon: <CameraIndoor />,
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'lens',
    },
    {
      title: 'Film Manufacturers',
      leftIcon: <CameraRoll />,
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'film',
    },
  ],
  subMenuObj: [
    {
      parentTitle: 'cameras',
      menuObj: [
        {
          title: 'Digital Camera Brands',
          leftIcon: <ListItemIcon />,
        },
        {
          title: 'Film Camera Brands',
          leftIcon: <ListItemIcon />,
        },
      ],
    },
    {
      parentTitle: 'lens',
      menuObj: [
        {
          title: 'View all lens manufacturers',
          leftIcon: <ListItemIcon />,
        },
        {
          title: 'Specialty lens manufacturers',
          leftIcon: <ListItemIcon />,
        },
        {
          title: 'Lens by mount',
          leftIcon: <ListItemIcon />,
        },
      ],
    },
    {
      parentTitle: 'film',
      menuObj: [
        {
          title: 'View all film manufacturers',
          leftIcon: <ListItemIcon />,
        },
        {
          title: 'Discontinued film manufacturers',
          leftIcon: <ListItemIcon />,
        },
      ],
    },
  ],
};
