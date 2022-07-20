import React from 'react';
import {IconButton, Tooltip} from '@mui/material';
import {FilterListRounded as FilterListIcon} from '@mui/icons-material';
import {useRouter} from 'next/router';
import {campediaTheme} from '@/utils/campediaTheme';

export default function MobileFilterButton() {
  const router = useRouter();

  const handleFilter = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <Tooltip title="Select Options" arrow>
      <IconButton onClick={handleFilter} disableRipple={true}>
        <FilterListIcon style={{fill: campediaTheme.palette.primary.main}} />
      </IconButton>
    </Tooltip>
  );
}
