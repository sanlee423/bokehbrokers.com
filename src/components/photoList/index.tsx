import * as React from 'react';
import cpTheme from 'src/theme/cpTheme';
import {makeStyles} from '@mui/styles';
import {Grid, Icon} from '@mui/material';
import getWindowDimensions from '@/utils/windowDimensions';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    width: '100%',
    height: '100%',
    padding: '2%',
  },
  gridItem: {
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    margin: '1%',
    paddingBottom: '0.6%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    verticalAlign: 'center',
    alignItems: 'center',
    borderRadius: '0.5rem',
    border: '1px solid white',
    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    '&:hover': {
      filter: 'brightness(105%)',
      backgroundColor: '#393a3b',
      transition: '300ms ease',

      "& $listText": {
        color: 'white',
      }
    }
  },
  listText: {
    width: '10%',
    display: 'flex',
    marginLeft: '10%',
    justifyContent: 'center',
    fontWeight: 600,
  },
  brandIcon: {
    width: '4.0rem',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
}));

export default function PhotoList() {
  const classes = useStyles(cpTheme);

  const [columns, setColumns] = React.useState(6);
  const [spacing, setSpacing] = React.useState(1.5);
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: 700,
    height: -1,
  });

  React.useEffect(() => {
    setWindowDimensions(getWindowDimensions()!);

    function handleResize() {
      setWindowDimensions(getWindowDimensions()!);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if(windowDimensions.width < 700) {
      setColumns(2);
      setSpacing(0);
    } else {
      setColumns(6);
      setSpacing(1.5);
    }
  }, []);

  return (
    <Grid className={classes.gridContainer} container spacing={spacing} columns={columns}>
      <Grid className={classes.gridItem} item xs={1}>
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
      <Grid className={classes.gridItem} item xs={1}>
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
      <Grid className={classes.gridItem} item xs={1}>
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
      <Grid className={classes.gridItem} item xs={1}>
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
      <Grid className={classes.gridItem} item xs={1}>
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
