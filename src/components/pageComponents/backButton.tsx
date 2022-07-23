import React from 'react';
import {IconButton, Tooltip} from '@mui/material';
import {ArrowBackRounded as ArrowBackIcon} from '@mui/icons-material';
import {useRouter} from 'next/router';
import {campediaTheme} from '@/utils/campediaTheme';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  backButtonContainer: {
    padding: '4px',
  },
}));

export default function BackButton() {
  const classes = useStyles(campediaTheme);

  const router = useRouter();

  const handleBackButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className={classes.backButtonContainer}>
      <Tooltip title="Back" arrow>
        <IconButton onClick={handleBackButton} disableRipple={true}>
          <ArrowBackIcon style={{fill: campediaTheme.palette.primary.main}} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
