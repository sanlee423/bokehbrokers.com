import React from 'react';
import {IconButton, Theme, Tooltip} from '@mui/material';
import {ArrowBackRounded as ArrowBackIcon} from '@mui/icons-material';
import {useRouter} from 'next/router';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';

export default function BackButton() {
  const router = useRouter();

  const handleBackButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.back();
  };

  return (
    <Tooltip title="Back" arrow>
      <IconButton onClick={handleBackButton} disableRipple={true}>
        <ArrowBackIcon style={{fill: campediaTheme.palette.primary.main}} />
      </IconButton>
    </Tooltip>
  );
}
