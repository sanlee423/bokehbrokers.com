import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import Menu, {MenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {campediaTheme} from '@/utils/campediaTheme';
import FilterGroup from '@/components/filterGroup/filterGroup';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({theme}) => ({
  '& .MuiPaper-root': {
    borderRadius: '3px',
    minWidth: 180,
    color: theme.palette.primary.main,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '8px 4px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

interface MobileFilterListProps {
  handleClose: () => void;
  open: boolean;
  anchorEl: HTMLElement;
}

export const MobileFilterList: React.FC<MobileFilterListProps> = ({
  handleClose,
  open,
  anchorEl,
}) => {
  return (
    <div>
      <StyledMenu
        id="mobile-options-menu"
        MenuListProps={{
          'aria-labelledby': 'mobile-options-button',
        }}
        theme={campediaTheme}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <FilterGroup />
      </StyledMenu>
    </div>
  );
};
