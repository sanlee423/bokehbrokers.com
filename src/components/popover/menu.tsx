import {Button, Menu, MenuItem} from '@mui/material';
import React from 'react';

type Props = {
  title: string;
};
const PopoverMenu: React.FC<Props> = ({title}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    }
  }

  function handleClose() {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <div className={`${anchorEl ? 'border-b-4 border-white pt-2' : 'py-2'}`}>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        className="text-white"
        onClick={handleClick}
        onMouseOver={handleClick}>
        {title}
      </Button>
      <Menu
        id="simple-menu"
        className="w-screen h-1/2 mt-3"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{onMouseOut: handleClose, onMouseLeave: handleClose}}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default PopoverMenu;
