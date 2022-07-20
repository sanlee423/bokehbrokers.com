import React from 'react';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {CircularProgress} from '@mui/material';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
  },
  svgContainer: {
    display: 'block !important',
  },
}));

export default function CircularPageLoader() {
  const classes = useStyles(campediaTheme);

  return (
    <div className={classes.pageContainer}>
      <CircularProgress
        size={60}
        style={{color: campediaTheme.palette.primary.main}}
        className={classes.svgContainer}
      />
    </div>
  );
}
