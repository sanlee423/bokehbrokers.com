import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Camera, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const brandDropdown: DropdownProps = {
  menuObj: [
    {
      title: 'View All',
      leftIcon: <ListItemIcon />,
      link: '/brands/list',
    },
    {
      title: 'Camera Manufacturers',
      leftIcon: <PhotoCamera />,
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'cameras',
      link: '/brands/camera',
    },
    {
      title: 'Lens Manufacturers',
      leftIcon: <Camera />,
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'lens',
      link: '/brands/lens',
    },
    {
      title: 'Film Manufacturers',
      leftIcon: <CameraRoll />,
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'film',
      link: '/brands/film',
    },
  ],
  subMenuObj: [
    {
      parentTitle: 'cameras',
      menuObj: [
        {
          title: 'Digital Camera Brands',
          leftIcon: <ListItemIcon />,
          link: '/brands/camera/digital',
        },
        {
          title: 'Film Camera Brands',
          leftIcon: <ListItemIcon />,
          link: '/brands/camera/film',
        },
      ],
    },
    {
      parentTitle: 'lens',
      menuObj: [
        {
          title: 'View all lens manufacturers',
          leftIcon: <ListItemIcon />,
          link: 'brands/lens/list',
        },
        {
          title: 'Specialty lens manufacturers',
          leftIcon: <ListItemIcon />,
          link: 'brands/lens/specialty',
        },
        {
          title: 'Lens by mount',
          leftIcon: <ListItemIcon />,
          link: 'brands/lens/mount',
        },
      ],
    },
    {
      parentTitle: 'film',
      menuObj: [
        {
          title: 'View all film manufacturers',
          leftIcon: <ListItemIcon />,
          link: 'brands/film/list',
        },
        {
          title: 'Discontinued film manufacturers',
          leftIcon: <ListItemIcon />,
          link: 'brands/film/discontinued',
        },
      ],
    },
  ],
};
