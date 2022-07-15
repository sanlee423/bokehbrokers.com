import React from 'react';
import {makeStyles} from '@mui/styles';
import {Typography, Tooltip} from '@mui/material';

import {campediaTheme} from '@/utils/campediaTheme';
import Link from 'next/link';
import {ChevronRight} from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
  titleText: {
    fontWeight: 800,
    padding: '0.7rem 0',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  titleLink: {
    color: 'black',
    '&:hover': {
      color: '#1976d2',
    },
  },
}));

type LinkedTitleProps = {
  title: string;
  link: string;
  icon: boolean;
};

const LinkedTitle: React.FC<LinkedTitleProps> = ({title, link, icon}) => {
  const classes = useStyles(campediaTheme);

  return (
    <Tooltip title={title}>
      <Link href={link} aria-label={title}>
        <a className={classes.titleLink}>
          <Typography className={classes.titleText} variant="h6">
            {title} {icon && <ChevronRight />}
          </Typography>
        </a>
      </Link>
    </Tooltip>
  );
};

export default LinkedTitle;
