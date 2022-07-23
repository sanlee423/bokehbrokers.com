import React from 'react';
import {IconButton, Tooltip} from '@mui/material';
import {FilterAlt as FilterAltIcon} from '@mui/icons-material';
import {campediaTheme} from '@/utils/campediaTheme';
import SwipeableEdgeDrawer from './swipeableEdge';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  filterButtonContainer: {
    padding: '4px',
  },
}));

export default function MobileFilterButton() {
  const classes = useStyles(campediaTheme);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.filterButtonContainer}>
      <Tooltip title="Select Options" arrow>
        <IconButton
          onClick={handleClick}
          disableRipple={true}
          aria-controls={open ? 'select-options-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
          <FilterAltIcon style={{fill: campediaTheme.palette.primary.main}} />
        </IconButton>
      </Tooltip>
      {anchorEl && (
        <>
          <SwipeableEdgeDrawer
            handleOpen={handleClick}
            handleClose={handleClose}
            open={open}
          />
          {/* <MobileFilterList
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
          /> */}
        </>
      )}
    </div>
  );
}
