import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Camera, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const brandDropdown: DropdownProps = {
  menuObj: [
    {
      title: 'View All',
      leftIcon: <ListItemIcon />,
    },
    {
      title: 'Camera Manufacturers',
      leftIcon: <PhotoCamera />,
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'cameras',
    },
    {
      title: 'Lens Manufacturers',
      leftIcon: <Camera />,
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
