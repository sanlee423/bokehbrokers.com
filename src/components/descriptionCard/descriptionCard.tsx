import React from 'react';
import {makeStyles} from '@mui/styles';
import {Typography} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';

const useStyles = makeStyles(theme => ({
  childText: {
    fontWeight: 800,
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  childDescription: {
    fontWeight: 400,
    margin: '1%',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
}));

type DescriptionCardProps = {
  title: string;
  description: string;
};

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  description,
}) => {
  const classes = useStyles(campediaTheme);

  return (
    <>
      <Typography className={classes.childText} variant="h6">
        {title}
      </Typography>
      <Typography className={classes.childDescription} variant="body1">
        {description}
      </Typography>
    </>
  );
};

export default DescriptionCard;
