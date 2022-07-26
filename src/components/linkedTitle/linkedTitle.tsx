import React from 'react';
import {makeStyles} from '@mui/styles';
import {Typography, Tooltip, Theme} from '@mui/material';

import {campediaTheme} from '@/utils/campediaTheme';
import Link from 'next/link';
import {ChevronRight} from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
  titleText: {
    fontWeight: 600,
    padding: '10px 15px',
    margin: '1rem 0',
    fontSize: '1.5rem',
  },
  titleLink: {
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.main,
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
          <Typography className={classes.titleText} variant="body1">
            {title} {icon && <ChevronRight />}
          </Typography>
        </a>
      </Link>
    </Tooltip>
  );
};

export default LinkedTitle;
