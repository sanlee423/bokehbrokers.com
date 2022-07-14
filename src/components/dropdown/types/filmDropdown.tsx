import {ListItemIcon} from '@mui/material';
import {DropdownProps} from '../dropDownItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CameraIndoor, CameraRoll, PhotoCamera} from '@mui/icons-material';

export const filmDropDown: DropdownProps = {
  menuObj: [
    {
      title: 'View All',
      leftIcon: <ListItemIcon />,
      link: '/film',
    },
    {
      title: '120',
      leftIcon: <PhotoCamera />,
      link: '/film/120',
    },
    {
      title: '35mm',
      leftIcon: <PhotoCamera />,
      link: '/film/35mm',
    },
    {
      title: 'Specialty',
      leftIcon: <PhotoCamera />,
      rightIcon: <KeyboardArrowRightIcon />,
      goToMenu: 'filmspecialty',
      link: '/film/specialty',
    },
  ],
  subMenuObj: [
    {
      parentTitle: 'filmspecialty',
      menuObj: [
        {
          title: 'Large Format Film',
          leftIcon: <ListItemIcon />,
          link: '/film/specialty/largeformat',
        },
        {
          title: '220',
          leftIcon: <ListItemIcon />,
          link: '/film/specialty/220',
        },
      ],
    },
  ],
};
