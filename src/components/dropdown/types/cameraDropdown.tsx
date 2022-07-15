import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CameraIndoor, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const cameraDropdown: DropdownProps = {
  menuObj: [
    {
      title: 'View All',
      leftIcon: 'A',
      link: '/cameras',
    },
    {
      title: 'Digital Cameras',
      leftIcon: 'D',
      // rightIcon: <KeyboardArrowRightIcon />,
      // goToMenu: 'digitalcamera',
      link: '/cameras/digital',
    },
    {
      title: 'Film Cameras',
      leftIcon: 'F',
      // rightIcon: <KeyboardArrowRightIcon />,
      // goToMenu: 'filmcamera',
      link: '/cameras/analog',
    },
    {
      title: 'Hybrid Cameras',
      leftIcon: 'H',
      link: '/cameras/hybrid',
    },
  ],
  subMenuObj: [
    {
      parentTitle: 'digitalcamera',
      menuObj: [
        {
          title: 'Medium Format',
          leftIcon: <ListItemIcon />,
          link: '/cameras/digital/medium',
        },
        {
          title: 'APS-C',
          leftIcon: <ListItemIcon />,
          link: '/cameras/digital/apsc',
        },
        {
          title: 'Full Frame',
          leftIcon: <ListItemIcon />,
          link: '/cameras/digital/fullframe',
        },
      ],
    },
    {
      parentTitle: 'filmcamera',
      menuObj: [
        {
          title: '35mm',
          leftIcon: <ListItemIcon />,
          link: '/cameras/film/35mm',
        },
        {
          title: 'Medium Format',
          leftIcon: <ListItemIcon />,
          link: '/cameras/film/mediumformat',
        },
        {
          title: 'Large Format',
          leftIcon: <ListItemIcon />,
          link: '/cameras/film/largeformat',
        },
      ],
    },
  ],
};
