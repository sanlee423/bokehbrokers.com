import React, {useEffect, useState} from 'react';
import {Footer} from '@/components';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import CameraSections from '@/components/cameraSections/cameraSections';

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
}));

const Film: React.FC = () => {
  const classes = useStyles(cpTheme);

  return <div className={classes.homeContainer}>Film</div>;
};

export default Film;
