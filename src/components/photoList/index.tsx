import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import cpTheme from 'src/theme/cpTheme';
import {makeStyles} from '@mui/styles';
import {Icon} from '@mui/material';
import Leica from 'icons/brand/leica.svg';

const useStyles = makeStyles(theme => ({
  //sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
  listContainer: {
    width: '20%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center',
  },
  listText: {
    height: '100%',
    width: '100%',
    display: 'flex',
    marginLeft: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    verticalAlign: 'center',
  },
  brandIcon: {
    width: '4rem',
    height: '4rem',
  },
  imgContainer: {
    width: '100%',
    height: '100%',
  },
}));

const brandList = [
  {
    src: `icons/brand/canon.svg?w=40%&fit=crop&auto=format`,
    srcSet: `icons/brand/canon.svg?w=20%&fit=crop&auto=format 2x`,
    alt: 'Canon',
  },
  {
    src: `icons/brand/fujifilm.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/fujifilm.svg?w=20%&fit=crop&auto=format 2x`,
    alt: 'Leica',
  },
  {
    src: `icons/brand/leica.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/leica.svg?w=20%&fit=crop&auto=format 2x`,
    alt: 'Leica',
  },
  {
    src: `icons/brand/nikon.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/nikon.svg?w=20%&fit=crop&auto=format 2x`,
    alt: 'Nikon',
  },
  {
    src: `icons/brand/pentax.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/pentax.svg?w=20%&fit=crop&auto=format 2x`,
    alt: 'Pentax',
  },
];

export default function PhotoList() {
  const classes = useStyles(cpTheme);

  return (
    <List className={classes.listContainer}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Icon className={classes.brandIcon}>
            <img
              className={classes.imgContainer}
              src={'icons/brand/leica.svg'}
              alt={'Leica'}
              loading="lazy"
            />
          </Icon>
        </ListItemAvatar>
        <div className={classes.listText}>Leica</div>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Icon className={classes.brandIcon}>
            <img
              className={classes.imgContainer}
              src={'icons/brand/fujifilm.svg'}
              alt={'Leica'}
              loading="lazy"
            />
          </Icon>
        </ListItemAvatar>
        <ListItemText primary="Leica" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Icon className={classes.brandIcon}>
            <img
              className={classes.imgContainer}
              src={'icons/brand/nikon.svg'}
              alt={'Leica'}
              loading="lazy"
            />
          </Icon>
        </ListItemAvatar>
        <ListItemText primary="Leica" />
      </ListItem>
    </List>
  );
}
