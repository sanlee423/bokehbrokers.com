import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {Skeleton as SkeletonMaterial} from '@mui/material';

const useStyles = makeStyles(theme => ({}));

interface SkeletonTextProps {
  variant: 'text' | 'circular' | 'rectangular';
  animation: 'wave' | false;
  className: string | undefined;
}

export default function Skeleton(props: SkeletonTextProps) {
  const classes = useStyles(campediaTheme);

  return <SkeletonMaterial {...props} />;
}
