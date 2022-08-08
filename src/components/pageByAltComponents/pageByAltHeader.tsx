import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {Typography} from '@mui/material';
import {getFormattedYear} from '@/utils/dateFormatter';
import Skeleton from '../skeleton';

const useStyles = makeStyles(theme => ({
  skeletonText: {
    border: '1px red solid',
    height: '20px',
  },
}));

interface PageByAltHeaderProps {
  name: string;
  loading: boolean;
  date?: string;
}

export default function PageByAltHeader(props: PageByAltHeaderProps) {
  const classes = useStyles(campediaTheme);

  return (
    <Typography variant={'h5'}>
      {props.loading ? (
        <Skeleton className={''} variant="text" animation="wave" />
      ) : (
        `${props.name} (${props.date && getFormattedYear(props.date)})`
      )}
    </Typography>
  );
}
