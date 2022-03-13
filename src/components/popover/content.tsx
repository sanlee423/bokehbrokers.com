import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {
  data: string[];
  anchorEl: Element | null;
  closePopOver: () => void;
};

const PopoverContent: React.FC<Props> = ({data, anchorEl, closePopOver}) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={anchorEl ? true : false}
      onClose={closePopOver}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}>
      <MenuItem onClick={closePopOver}>Profile</MenuItem>
      <MenuItem onClick={closePopOver}>My account</MenuItem>
      <MenuItem onClick={closePopOver}>Logout</MenuItem>
    </Menu>
  );
};

export default PopoverContent;
