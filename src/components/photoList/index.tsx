import * as React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import cpTheme from 'src/theme/cpTheme';
import {makeStyles} from '@mui/styles';
import {Grid, Icon} from '@mui/material';

const useStyles = makeStyles(theme => ({
  //sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
  gridContainer: {
    width: '100%',
    height: '100%',
    padding: '2%',
  },
  gridRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listText: {
    width: '10%',
    display: 'flex',
    margin: '2%',
    marginLeft: '5%',
    padding: '5%',
    justifyContent: 'center',
  },
  brandIcon: {
    width: '4.0rem',
    height: '4.0rem',
  },
}));

export default function PhotoList() {
  const classes = useStyles(cpTheme);

  return (
    <Grid className={classes.gridContainer} container spacing={2} columns={6}>
      <Grid className={classes.gridRow} item xs={2}>
        <Icon className={classes.brandIcon}>
          <img
            className={classes.imgContainer}
            src={'icons/brand/leica.png'}
            alt={'Leica'}
            loading="lazy"
          />
        </Icon>
        <div className={classes.listText}>Leica</div>
      </Grid>
      <Grid className={classes.gridRow} item xs={2}>
        <Icon className={classes.brandIcon}>
          <img
            className={classes.imgContainer}
            src={'icons/brand/nikon.png'}
            alt={'Nikon'}
            loading="lazy"
          />
        </Icon>
        <div className={classes.listText}>Nikon</div>
      </Grid>
      <Grid className={classes.gridRow} item xs={2}>
        <Icon className={classes.brandIcon}>
          <img
            className={classes.imgContainer}
            src={'icons/brand/fuji.png'}
            alt={'Fujifilm'}
            loading="lazy"
          />
        </Icon>
        <div className={classes.listText}>Fujifilm</div>
      </Grid>
      <Grid className={classes.gridRow} item xs={2}>
        <Icon className={classes.brandIcon}>
          <img
            className={classes.imgContainer}
            src={'icons/brand/pentax.png'}
            alt={'Pentax'}
            loading="lazy"
          />
        </Icon>
        <div className={classes.listText}>Pentax</div>
      </Grid>
      <Grid className={classes.gridRow} item xs={2}>
        <Icon className={classes.brandIcon}>
          <img
            className={classes.imgContainer}
            src={'icons/brand/canon.png'}
            alt={'Canon'}
            loading="lazy"
          />
        </Icon>
        <div className={classes.listText}>Canon</div>
      </Grid>
    </Grid>
  );
}
