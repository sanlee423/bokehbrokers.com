// @ts-nocheck
import React, {useState} from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  buttonParent: {
    width: '25%',
    height: '66%',

    '&:hover': {
      backgroundColor: 'rgba(17, 24, 39, 1)',
    },
  },
  button: {
    width: '100%',
    color: 'white !important',
    fontWeight: '700 !important',
    fontSize: 'medium !important',
    zIndex: 1301,
    marginTop: '1%',
    marginBottom: '3px',
    textTransform: 'none',

    '&:hover': {
      marginBottom: '0px',
      borderBottom: '3px solid white',
      borderRadius: '0',
    },
  },
}));

type MenuProps = {
  data: Object;
};

const PopoverMenu: React.FC<MenuProps> = ({data}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<EventTarget | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const handleOpen = (e: Event) => {
    if (e.currentTarget) {
      setAnchorEl(e.currentTarget);
      setOpen(true);
    }
  };

  const handleClose = (e: any) => {
    if (e.currentTarget && e.currentTarget.localName !== 'ul') {
      const menu = document.getElementById('main-nav').children[2];
      const menuBoundary: {
        left: number;
        top: number;
        right: number;
        bottom: number;
      } = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  return (
    <div className={classes.buttonParent}>
      <Button
        hover
        id="menu-button"
        className={classes.button}
        aria-owns={open ? 'nav-menu' : null}
        aria-haspopup="true"
        onMouseOver={handleOpen}
        onMouseLeave={handleClose}
        style={{zIndex: 1301}}>
        {Object.keys(data)[0]}
      </Button>
      <Menu
        id="main-nav"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        {Object.values(data)[0].map(item => {
          return (
            <MenuItem key={`${Object.keys(data)[0]}${item}`}>{item}</MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default PopoverMenu;
