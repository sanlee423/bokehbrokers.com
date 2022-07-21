import React from 'react';
import {IconButton, Tooltip} from '@mui/material';
import {FilterListRounded as FilterListIcon} from '@mui/icons-material';
import {useRouter} from 'next/router';
import {campediaTheme} from '@/utils/campediaTheme';
import {MobileFilterList} from './mobileFilterList';

export default function MobileFilterButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Select Options" arrow>
        <IconButton
          onClick={handleClick}
          disableRipple={true}
          aria-controls={open ? 'select-options-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
          <FilterListIcon style={{fill: campediaTheme.palette.primary.main}} />
        </IconButton>
      </Tooltip>
      {anchorEl && (
        <MobileFilterList
          handleClose={handleClose}
          open={open}
          anchorEl={anchorEl}
        />
      )}
    </>
  );
}
